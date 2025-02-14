import https from 'https';
import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

const images = {
  'javascript.png': 'https://skillicons.dev/icons?i=javascript',
  'css.png': 'https://skillicons.dev/icons?i=css',
  'html.png': 'https://skillicons.dev/icons?i=html',
  'reactjs.png': 'https://skillicons.dev/icons?i=react',
  'redux.png': 'https://skillicons.dev/icons?i=redux',
  'typescript.png': 'https://skillicons.dev/icons?i=typescript',
  'tailwind.png': 'https://skillicons.dev/icons?i=tailwind',
  'nodejs.png': 'https://skillicons.dev/icons?i=nodejs',
  'mongodb.png': 'https://skillicons.dev/icons?i=mongodb',
  'git.png': 'https://skillicons.dev/icons?i=git',
  'figma.png': 'https://skillicons.dev/icons?i=figma',
  'docker.png': 'https://skillicons.dev/icons?i=docker'
};

const downloadImage = (url, filename) => {
  const targetPath = path.join(projectRoot, 'src', 'assets', 'tech', filename);
  const targetDir = path.dirname(targetPath);

  // Create directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  
  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  };
  
  https.get(url, options, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(targetPath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
      });
    } else {
      console.error(`Failed to download ${filename}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
};

Object.entries(images).forEach(([filename, url]) => {
  downloadImage(url, filename);
});
