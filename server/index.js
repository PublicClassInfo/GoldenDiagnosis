const express = require('express');
const puppeteer = require('puppeteer');
const twilio = require('twilio');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve static files from src directory
app.use('/src', express.static(path.join(__dirname, '../src')));

// PDF Generation endpoint
app.post('/generate-pdf', async (req, res) => {
    try {
        const { html, options = {} } = req.body;
        
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        
        const pdf = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                top: '14mm',
                right: '14mm',
                bottom: '14mm',
                left: '14mm'
            },
            ...options
        });
        
        await browser.close();
        
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="diagnosis.pdf"',
            'Content-Length': pdf.length
        });
        
        res.send(pdf);
        
    } catch (error) {
        console.error('PDF generation error:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    }
});

// WhatsApp sharing endpoint
app.post('/share-whatsapp', async (req, res) => {
    try {
        const { pdfData, phoneNumber, message } = req.body;
        
        // Initialize Twilio client (you'll need to set these environment variables)
        const client = twilio(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN
        );
        
        // Save PDF temporarily
        const pdfBuffer = Buffer.from(pdfData, 'base64');
        const tempPath = path.join(__dirname, 'temp', `diagnosis-${Date.now()}.pdf`);
        
        // Ensure temp directory exists
        if (!fs.existsSync(path.join(__dirname, 'temp'))) {
            fs.mkdirSync(path.join(__dirname, 'temp'));
        }
        
        fs.writeFileSync(tempPath, pdfBuffer);
        
        // Send via WhatsApp using Twilio
        const result = await client.messages.create({
            body: message || 'Here is your diagnosis report',
            from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
            to: `whatsapp:${phoneNumber}`,
            mediaUrl: [`${req.protocol}://${req.get('host')}/download-pdf?file=${path.basename(tempPath)}`]
        });
        
        // Clean up temp file after sending
        setTimeout(() => {
            if (fs.existsSync(tempPath)) {
                fs.unlinkSync(tempPath);
            }
        }, 30000); // 30 seconds delay
        
        res.json({ 
            success: true, 
            messageId: result.sid,
            status: result.status 
        });
        
    } catch (error) {
        console.error('WhatsApp sharing error:', error);
        res.status(500).json({ error: 'Failed to share via WhatsApp' });
    }
});

// Temporary PDF download endpoint
app.get('/download-pdf', (req, res) => {
    const fileName = req.query.file;
    const filePath = path.join(__dirname, 'temp', fileName);
    
    if (fs.existsSync(filePath)) {
        res.setHeader('Content-Type', 'application/pdf');
        res.sendFile(filePath);
    } else {
        res.status(404).json({ error: 'File not found' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Golden Diagnosis Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});