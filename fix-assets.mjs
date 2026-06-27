import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicAssetsDir = path.join(__dirname, 'public', 'assets');
const oldAssetsDir = path.join(__dirname, 'assets');
const srcAssetsDir = path.join(__dirname, 'src', 'assets');

// Create public/assets
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

const copyAndRename = (srcDir) => {
  if (!fs.existsSync(srcDir)) return;
  
  const items = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const item of items) {
    if (item.isFile()) {
      let newName = item.name;
      // Handle specific edge cases from the prompt
      if (item.name === 'section1 .png') newName = 'section1.png';
      if (item.name === 'sections 3.png') newName = 'sections-3.png';
      if (item.name === 'hero section.mp4') newName = 'hero-section.mp4';
      
      const srcPath = path.join(srcDir, item.name);
      const destPath = path.join(publicAssetsDir, newName);
      
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${srcPath} -> ${destPath}`);
    } else if (item.isDirectory()) {
      // recursive for images dir if needed, but we probably just ignore it or copy files
      if (item.name === 'images') {
        const imagesDir = path.join(srcDir, 'images');
        const imgItems = fs.readdirSync(imagesDir, { withFileTypes: true });
        for (const imgItem of imgItems) {
            if (imgItem.isFile()) {
                fs.copyFileSync(path.join(imagesDir, imgItem.name), path.join(publicAssetsDir, imgItem.name));
            }
        }
      }
    }
  }
};

copyAndRename(oldAssetsDir);
copyAndRename(srcAssetsDir);

// Delete old directories
if (fs.existsSync(oldAssetsDir)) {
    fs.rmSync(oldAssetsDir, { recursive: true, force: true });
    console.log(`Deleted ${oldAssetsDir}`);
}
if (fs.existsSync(srcAssetsDir)) {
    fs.rmSync(srcAssetsDir, { recursive: true, force: true });
    console.log(`Deleted ${srcAssetsDir}`);
}

console.log('Done moving files!');
