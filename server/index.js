const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
});

// Parse JSON bodies
app.use(express.json({ limit: '50mb' }));

// Serve static files from src directory
app.use('/src', express.static(path.join(__dirname, '../src')));

// Serve the main HTML file at root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/GoldenDiagnosis.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        service: 'Golden Diagnosis Server',
        version: '1.0.0'
    });
});

// PDF Generation endpoint (simplified - returns success message)
app.post('/generate-pdf', async (req, res) => {
    try {
        const { html, options = {} } = req.body;
        
        // For now, just return a success message
        // We'll add Puppeteer PDF generation later
        res.json({ 
            success: true, 
            message: 'PDF generation endpoint is working!',
            note: 'Currently using client-side PDF generation',
            serverTime: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('PDF generation error:', error);
        res.status(500).json({ 
            error: 'Failed to process PDF request',
            details: error.message 
        });
    }
});

// WhatsApp sharing endpoint (simplified - returns share URL)
app.post('/share-whatsapp', async (req, res) => {
    try {
        const { phoneNumber, message } = req.body;
        
        if (!phoneNumber) {
            return res.status(400).json({ error: 'Phone number is required' });
        }
        
        // Create WhatsApp share URL
        const encodedMessage = encodeURIComponent(message || 'Here is your diagnosis report');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        res.json({ 
            success: true, 
            shareUrl: whatsappUrl,
            message: 'WhatsApp share URL generated successfully',
            serverTime: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('WhatsApp sharing error:', error);
        res.status(500).json({ 
            error: 'Failed to generate WhatsApp share URL',
            details: error.message 
        });
    }
});

// Handle all other routes - serve the main app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/GoldenDiagnosis.html'));
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Server error:', error);
    res.status(500).json({ 
        error: 'Internal server error',
        message: error.message 
    });
});

app.listen(PORT, () => {
    console.log('✨ ====================================');
    console.log('�� Golden Diagnosis Server Started!');
    console.log(`� Port: ${PORT}`);
    console.log('� Local: http://localhost:' + PORT);
    console.log('✅ Health: http://localhost:' + PORT + '/health');
    console.log('� App: http://localhost:' + PORT + '/');
    console.log('✨ ====================================');
    console.log('� Server features:');
    console.log('   ✅ Health monitoring');
    console.log('   ✅ Static file serving');
    console.log('   ✅ PDF endpoint (client-side fallback)');
    console.log('   ✅ WhatsApp share URLs');
    console.log('✨ ====================================');
});
