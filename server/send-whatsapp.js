// server/send-whatsapp.js
/**
 * Send a PDF via WhatsApp Cloud API.
 * Requires env:
 *   WHATSAPP_TOKEN=EAAG...
 *   PHONE_NUMBER_ID=1xxxxxxxxxxxxxx
 *
 * Usage:
 *   node server/send-whatsapp.js --file out/Anamnesis.pdf --to 5511999998888 --caption "Ficha de anamnese"
 */
require('dotenv').config({ path: require('path').resolve(__dirname, '.env') });
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const FormData = require('form-data');
const minimist = require('minimist');

async function uploadMedia({ file, token, phoneNumberId }) {
    const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/media`;
    const form = new FormData();
    form.append('messaging_product', 'whatsapp');
    form.append('type', 'application/pdf');
    form.append('file', fs.createReadStream(file), path.basename(file));
    const res = await axios.post(url, form, {
        headers: { Authorization: `Bearer ${token}`, ...form.getHeaders() },
        maxBodyLength: Infinity
    });
    return res.data.id;
}

async function sendDocument({ to, mediaId, filename, caption, token, phoneNumberId }) {
    const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;
    await axios.post(url, {
        messaging_product: 'whatsapp',
        to,
        type: 'document',
        document: { id: mediaId, filename, caption }
    }, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    });
}

(async function main() {
    const a = minimist(process.argv.slice(2));
    const file = path.resolve(a.file);
    const to = String(a.to || process.env.WHATSAPP_TO || '').trim();
    const caption = a.caption || 'Documento';
    const token = process.env.WHATSAPP_TOKEN;
    const phoneNumberId = process.env.PHONE_NUMBER_ID;

    if (!fs.existsSync(file)) throw new Error('File not found: ' + file);
    if (!token || !phoneNumberId) throw new Error('WHATSAPP_TOKEN and PHONE_NUMBER_ID are required');
    if (!to) throw new Error('Recipient phone "to" (E.164) is required');

    const mediaId = await uploadMedia({ file, token, phoneNumberId });
    await sendDocument({
        to,
        mediaId,
        filename: path.basename(file),
        caption,
        token,
        phoneNumberId
    });
    console.log('WhatsApp message sent to', to);
})().catch(err => {
    console.error('WhatsApp send failed:', err?.response?.data || err.message || err);
    process.exit(1);
});
