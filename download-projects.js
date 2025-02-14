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

const projectImages = {
  'carrent.png': 'https://raw.githubusercontent.com/adrianhajdin/project_3D_developer_portfolio/main/src/assets/carrent.png',
  'jobit.png': 'https://raw.githubusercontent.com/adrianhajdin/project_3D_developer_portfolio/main/src/assets/jobit.png',
  'tripguide.png': 'https://raw.githubusercontent.com/adrianhajdin/project_3D_developer_portfolio/main/src/assets/tripguide.png'
};

// Download project images to assets directory
Object.entries(projectImages).forEach(([filename, url]) => {
  const filepath = path.join('./src/assets', filename);
  downloadImage(url, filepath)
    .then(path => console.log(`Downloaded: ${path}`))
    .catch(err => console.error(`Error downloading ${filename}:`, err));
});
