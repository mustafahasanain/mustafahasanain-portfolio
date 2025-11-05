const fs = require('fs');
const path = require('path');

// Directories to process
const outDir = path.join(__dirname, '..', 'out');
const enDir = path.join(outDir, 'en');

// Files to copy from /en/ to root
const filesToCopy = [
  'index.html'
];

// Directories to copy from /en/ to root
const dirsToCopy = [
  'projects',
  'contact'
];

console.log('Running postbuild script...');

// Copy individual files
filesToCopy.forEach(file => {
  const src = path.join(enDir, file);
  const dest = path.join(outDir, file);

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file} to root`);
  } else {
    console.warn(`⚠ Warning: ${file} not found in /en/`);
  }
});

// Copy directories recursively
function copyDirRecursive(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read all files and subdirectories
  const entries = fs.readdirSync(src, { withFileTypes: true });

  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Recursively copy subdirectory
      copyDirRecursive(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Copy each directory
dirsToCopy.forEach(dir => {
  const src = path.join(enDir, dir);
  const dest = path.join(outDir, dir);

  if (fs.existsSync(src)) {
    copyDirRecursive(src, dest);
    console.log(`✓ Copied /${dir}/ directory to root`);
  } else {
    console.warn(`⚠ Warning: ${dir} directory not found in /en/`);
  }
});

console.log('✓ Postbuild script completed successfully!');
