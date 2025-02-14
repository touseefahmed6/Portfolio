import https from 'https';
import fs from 'fs';
import path from 'path';

const projectRoot = '.';

const images = {
  'javascript.png': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'css.png': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg'
};

function downloadImage(url, filename) {
  const filepath = path.join(projectRoot, 'src', 'assets', 'tech', filename);
  
  // Ensure the directory exists
  const dir = path.dirname(filepath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
}

Object.entries(images).forEach(([filename, url]) => {
  downloadImage(url, filename);
});
