import fs from 'fs';
import https from 'https';
import path from 'path';

const downloadFile = (url, filepath) => {
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

const modelFiles = {
  'scene.bin': 'https://raw.githubusercontent.com/adrianhajdin/project_3D_developer_portfolio/main/public/planet/scene.bin',
  'scene.gltf': 'https://raw.githubusercontent.com/adrianhajdin/project_3D_developer_portfolio/main/public/planet/scene.gltf',
  'license.txt': 'https://raw.githubusercontent.com/adrianhajdin/project_3D_developer_portfolio/main/public/planet/license.txt'
};

// Create planet directory if it doesn't exist
const planetDir = './public/planet';
if (!fs.existsSync(planetDir)) {
  fs.mkdirSync(planetDir, { recursive: true });
}

// Download model files
Object.entries(modelFiles).forEach(([filename, url]) => {
  const filepath = path.join(planetDir, filename);
  downloadFile(url, filepath)
    .then(path => console.log(`Downloaded: ${path}`))
    .catch(err => console.error(`Error downloading ${filename}:`, err));
});
