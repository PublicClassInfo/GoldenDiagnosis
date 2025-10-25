const fs = require('fs');
const path = require('path');

// Copy necessary files for deployment
function prepareDeployment() {
    const deployDir = path.join(__dirname, '../deploy');
    
    if (!fs.existsSync(deployDir)) {
        fs.mkdirSync(deployDir);
    }
    
    // Copy server files
    const serverFiles = ['index.js', 'package.json', '.env'];
    serverFiles.forEach(file => {
        const source = path.join(__dirname, '../server', file);
        const dest = path.join(deployDir, file);
        
        if (fs.existsSync(source)) {
            fs.copyFileSync(source, dest);
            console.log(`Copied: ${file}`);
        }
    });
    
    // Copy src files
    const srcDest = path.join(deployDir, 'src');
    if (!fs.existsSync(srcDest)) {
        fs.mkdirSync(srcDest);
    }
    
    const srcFiles = ['GoldenDiagnosis.html', 'GoldenDiagnosis.js', 'GoldenDiagnosis.css'];
    srcFiles.forEach(file => {
        const source = path.join(__dirname, '../src', file);
        const dest = path.join(srcDest, file);
        
        if (fs.existsSync(source)) {
            fs.copyFileSync(source, dest);
            console.log(`Copied: src/${file}`);
        }
    });
    
    console.log('Deployment preparation complete!');
}

prepareDeployment();