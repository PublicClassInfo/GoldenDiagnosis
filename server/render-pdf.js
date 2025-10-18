// server/render-pdf.js
/**
 * Usage:
 *  node server/render-pdf.js \
 *    --in dist/GoldenDiagnosis.html \
 *    --out out/Anamnesis.pdf \
 *    --data data.json \
 *    --lang pt \
 *    --logo ./src/Images/MariaLogo.png
 */
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');
const puppeteer = require('puppeteer');
const minimist = require('minimist');

function readJSON(p) { return JSON.parse(fs.readFileSync(p, 'utf8')); }
function toDataURL(file) {
    const buf = fs.readFileSync(file);
    const type = mime.lookup(file) || 'application/octet-stream';
    return `data:${type};base64,${buf.toString('base64')}`;
}

(async function main() {
    const a = minimist(process.argv.slice(2));
    const htmlPath = path.resolve(a.in || 'dist/GoldenDiagnosis.html');
    const outPdf   = path.resolve(a.out || 'GoldenDiagnosis.pdf');
    const lang     = (a.lang || 'pt').toLowerCase() === 'en' ? 'en' : 'pt';
    const data     = a.data ? readJSON(path.resolve(a.data)) : {};   // same shape your page saves
    const logo     = a.logo ? toDataURL(path.resolve(a.logo)) : null;

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox','--font-render-hinting=medium']
    });

    try {
        const page = await browser.newPage();

        // 1) Tell your code we are headless (skips heavy UI in boot) + seed storage
        await page.evaluateOnNewDocument((seed, lang) => {
            try {
                window.__GD_HEADLESS__ = true;             // your boot() checks this flag
                window.localStorage.setItem('goldenDiagnosisFormData', JSON.stringify(seed || {}));
                window.localStorage.setItem('maria.lang', lang);
            } catch {}
        }, data, lang);

        // 2) Load the single-file page
        await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });

        // 3) Ask the page to build the exact print HTML
        const html = await page.evaluate(async (logo) => {
            try {
                // hydrate form data → export structure your code expects
                const exportData = (typeof collectFilledData === 'function')
                    ? collectFilledData()
                    : (window.GoldenDiagnosis?.collectFilledData
                        ? window.GoldenDiagnosis.collectFilledData() : null);

                // Choose or convert the logo the same way the browser would
                let logoSrc = logo;
                try {
                    if (!logoSrc && typeof chooseWorkingLogoSrc === 'function') {
                        logoSrc = await chooseWorkingLogoSrc();
                    }
                    if (typeof toDataURL === 'function') {
                        // When running from file:// your toDataURL returns inline fallback;
                        // a pre-supplied data URL (logo param) will pass through unchanged.
                        logoSrc = await toDataURL(logoSrc);
                    }
                } catch {}

                const gen = window.GoldenDiagnosis?.generateHTML || window.GoldenDiagnosis?.buildDocHTML;
                const html = gen ? gen(exportData, logoSrc, /*usePaged*/ false)
                                 : document.documentElement.outerHTML;
                return html;
            } catch (e) {
                return document.documentElement.outerHTML;
            }
        }, logo);

        // 4) Render that HTML in a clean page and print to PDF
        await page.setContent(html, { waitUntil: 'networkidle0' });
        await page.emulateMediaType('screen');
        await page.pdf({
            path: outPdf,
            format: 'A4',
            printBackground: true,
            margin: { top: '14mm', right: '14mm', bottom: '14mm', left: '14mm' }
        });

        console.log('PDF saved →', outPdf);
    } finally {
        await browser.close();
    }
})().catch(e => {
    console.error(e);
    process.exit(1);
});
