const path = require('path');
const fs = require('fs');

/**
 * REPLICATED ROLLUP VULNERABILITY
 * 
 * 1. Improper Sanitization (from src/utils/sanitizeFileName.ts)
 * 2. Unsafe Path Resolution (from src/rollup/rollup.ts)
 */

function sanitize(name)
{
    // The vulnerability: Rollup's regex fails to strip dots and slashes, 
    // allowing path traversal sequences like '../'
    const basic = name.replace(/[\u0000-\u001F"#$%&*+,:;<=>?[\]^`{|}\u007F]/g, '_');

    // Prevent path traversal and absolute paths
    return basic.split(/[\\/]/)
        .filter(Boolean)
        .map(segment => (segment === '..' ? '_' : segment))
        .join('_');
}

async function build(userSuppliedName)
{
    const outputDir = path.join(__dirname, 'dist');
    const fileName = sanitize(userSuppliedName);

    // Vulnerability: path.resolve() follows traversal sequences in the filename
    const outputPath = path.resolve(outputDir, fileName);

    console.log(`[*] Target write path: ${ outputPath }`);

    if (!fs.existsSync(path.dirname(outputPath)))
    {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    }

    fs.writeFileSync(outputPath, 'console.log("System Compromised!");');
    console.log(`[+] File written successfully.`);
}

build(process.argv[2] || 'bundle.js');
