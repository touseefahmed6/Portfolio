import fs from 'fs';
import https from 'https';
import path from 'path';

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

const techImages = {
  'docker.png': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg',
  'figma.png': 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  'git.png': 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  'mongodb.png': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  'nodejs.png': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  'tailwind.png': 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
};

const companyLogos = {
  'meta.png': 'https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png',
  'shopify.png': 'https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png',
  'starbucks.png': 'https://1000logos.net/wp-content/uploads/2016/12/Starbucks-Logo.png',
  'tesla.png': 'https://1000logos.net/wp-content/uploads/2018/02/Tesla-Logo.png'
};

const techDir = './src/assets/tech';
const companyDir = './src/assets/company';

// Create directories if they don't exist
if (!fs.existsSync(techDir)) {
  fs.mkdirSync(techDir, { recursive: true });
}
if (!fs.existsSync(companyDir)) {
  fs.mkdirSync(companyDir, { recursive: true });
}

// Download tech images
Object.entries(techImages).forEach(([filename, url]) => {
  const filepath = path.join(techDir, filename);
  downloadImage(url, filepath)
    .then(path => console.log(`Downloaded: ${path}`))
    .catch(err => console.error(`Error downloading ${filename}:`, err));
});

// Download company logos
Object.entries(companyLogos).forEach(([filename, url]) => {
  const filepath = path.join(companyDir, filename);
  downloadImage(url, filepath)
    .then(path => console.log(`Downloaded: ${path}`))
    .catch(err => console.error(`Error downloading ${filename}:`, err));
});
