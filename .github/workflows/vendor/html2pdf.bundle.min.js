// scripts/build.js
/* Build: inline CSS/JS → dist/GoldenDiagnosis.html (no external deps) */
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(__dirname, '..', 'src');
const OUT_DIR = path.resolve(__dirname, '..', 'dist');
const VENDOR_DIR = path.resolve(__dirname, '..', 'vendor');

const HTML_IN  = path.join(SRC_DIR, 'GoldenDiagnosis.html');
const CSS_IN   = path.join(SRC_DIR, 'Images', 'GoldenDiagnosis.css');
const JS_IN    = path.join(SRC_DIR, 'Images', 'GoldenDiagnosis.js');
const VENDOR_PDF = path.join(VENDOR_DIR, 'html2pdf.bundle.min.js');

const HTML_OUT = path.join(OUT_DIR, 'GoldenDiagnosis.html');

function read(file) { return fs.readFileSync(file, 'utf8'); }
function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function minifyCSS(css) {
    return css
        .replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, '')   // comments
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}:;,])\s*/g, '$1')
        .trim();
}
function liteMinifyJS(js) {
    // safe-ish: strip /* */ and //… (not perfect, but fine for our bundle)
    return js
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/(^|\n)\s*\/\/[^\n]*/g, '$1')
        .replace(/\n{2,}/g, '\n')
        .trim();
}

(function build() {
    const html = read(HTML_IN);
    const css  = minifyCSS(read(CSS_IN));
    const js   = read(JS_IN);                 // keep comments (emoji banners) in your main JS
    const pdf  = fs.existsSync(VENDOR_PDF) ? read(VENDOR_PDF) : '';

    let out = html;

    // inline CSS link → <style>
    out = out.replace(
        /<link[^>]+href=["'][^"']*GoldenDiagnosis\.css["'][^>]*>/i,
        `<style id="gd-inline-css">\n${css}\n</style>`
    );

    // inline html2pdf vendor if referenced (or inject right before your main JS)
    if (pdf) {
        if (/<script[^>]+html2pdf\.bundle\.min\.js/i.test(out)) {
            out = out.replace(
                /<script[^>]+html2pdf\.bundle\.min\.js[^>]*>\s*<\/script>/i,
                `<script id="gd-inline-html2pdf">\n${pdf}\n</script>`
            );
        } else {
            out = out.replace(
                /(<\/body>\s*<\/html>\s*$)/i,
                `<script id="gd-inline-html2pdf">\n${pdf}\n</script>\n$1`
            );
        }
    }

    // inline your app JS (keep formatting)
    out = out.replace(
        /<script[^>]+src=["'][^"']*GoldenDiagnosis\.js["'][^>]*>\s*<\/script>/i,
        `<script id="gd-inline-app">\n${js}\n</script>`
    );

    ensureDir(OUT_DIR);
    fs.writeFileSync(HTML_OUT, out, 'utf8');

    const kb = n => (n/1024).toFixed(1)+' KB';
    console.log('Built →', HTML_OUT);
    console.log('Sizes:',
        'HTML', kb(Buffer.byteLength(out)),
        'CSS', kb(Buffer.byteLength(css)),
        'JS', kb(Buffer.byteLength(js)),
        pdf ? 'Vendor '+kb(Buffer.byteLength(pdf)) : '(vendor not inlined)'
    );
})();
