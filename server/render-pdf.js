const puppeteer = require('puppeteer');

class PDFRenderer {
    constructor() {
        this.browser = null;
    }
    
    async init() {
        if (!this.browser) {
            this.browser = await puppeteer.launch({
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-accelerated-2d-canvas',
                    '--no-first-run',
                    '--no-zygote',
                    '--disable-gpu'
                ]
            });
        }
    }
    
    async renderPDF(html, options = {}) {
        await this.init();
        const page = await this.browser.newPage();
        
        try {
            await page.setViewport({ width: 794, height: 1123 }); // A4 dimensions
            await page.setContent(html, { waitUntil: 'networkidle0' });
            
            // Wait for fonts and images to load
            await page.evaluateHandle('document.fonts.ready');
            await page.waitForTimeout(1000);
            
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
            
            return pdf;
        } finally {
            await page.close();
        }
    }
    
    async close() {
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
        }
    }
}

module.exports = PDFRenderer;