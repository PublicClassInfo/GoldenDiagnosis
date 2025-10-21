/*// ======================================Jesse
   // 🚀 Express server
   // - /health (ping)
   // - /api/render-pdf (HTML → PDF)
   // - /api/send-whatsapp (PDF base64 → link → WhatsApp Cloud)
   // ====================================*/
import 'dotenv/config';
import path from 'node:path';
import fs from 'node:fs';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { renderPdfFromHtml } from './render-pdf.js';
import { savePdfToUploads, sendWhatsAppDocument } from './send-whatsapp.js';

const app = express();
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;

// static files for uploaded PDFs
app.use('/files', express.static(path.join(process.cwd(), 'server', 'uploads')));

// middlewares
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json({ limit: '12mb' }));

// health check
app.get('/health', (req, res) => res.type('text/plain').send('ok'));

// HTML -> PDF
app.post('/api/render-pdf', async (req, res) => {
    try {
        const { html, filename } = req.body || {};
        if (!html) return res.status(400).json({ error: 'Missing html' });
        const pdf = await renderPdfFromHtml(html);
        const outName = filename || `anamnese_${Date.now()}.pdf`;
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${outName}"`
        });
        res.send(Buffer.from(pdf));
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'render_failed' });
    }
});

// WhatsApp (document) via Cloud API
app.post('/api/send-whatsapp', async (req, res) => {
    try {
        const {
            filename,
            pdfBase64,
            to = process.env.RECIPIENT_WAID,
            caption = 'Ficha de anamnese'
        } = req.body || {};

        if (!pdfBase64) return res.status(400).json({ error: 'Missing pdfBase64' });
        if (!to) return res.status(400).json({ error: 'Missing to' });

        const buf = Buffer.from(pdfBase64, 'base64');
        const { fname } = await savePdfToUploads(filename, buf);
        const publicLink = `${baseUrl}/files/${encodeURIComponent(fname)}`;

        const resp = await sendWhatsAppDocument({
            baseUrl,
            to,
            token: process.env.WHATSAPP_TOKEN,
            phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
            link: publicLink,
            filename: fname,
            caption
        });

        res.json({ ok: true, response: resp, link: publicLink });
    } catch (e) {
        console.error('WhatsApp error:', e.response || e);
        res.status(500).json({ error: 'whatsapp_failed', details: e.response || e.message });
    }
});

// (optional) serve dist/ for local demo
const DIST = path.join(process.cwd(), 'dist');
if (fs.existsSync(DIST)) {
    app.use(express.static(DIST));
    app.get('/', (req, res) => res.sendFile(path.join(DIST, 'index.html')));
}

app.listen(port, () => console.log(`✓ Server on ${baseUrl}`));