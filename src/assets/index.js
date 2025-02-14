// Import logo and main images
import logo from './logo.svg';
import backend from './backend.png';
import creator from './creator.png';
import mobile from './mobile.png';
import web from './web.png';
import github from './github.png';
import menu from './menu.svg';
import close from './close.svg';

// Import tech stack icons
import css from './tech/css.png';
import docker from './tech/docker.png';
import figma from './tech/figma.png';
import git from './tech/git.png';
import html from './tech/html.png';
import javascript from './tech/javascript.png';
import mongodb from './tech/mongodb.png';
import nodejs from './tech/nodejs.png';
import reactjs from './tech/reactjs.png';
import redux from './tech/redux.png';
import tailwind from './tech/tailwind.png';
import typescript from './tech/typescript.png';
import threejs from './tech/threejs.svg';

// Import company logos
import meta from './company/meta.png';
import shopify from './company/shopify.png';
import starbucks from './company/starbucks.png';
import tesla from './company/tesla.png';

// Import project images
import carrent from './carrent.png';
import jobit from './jobit.png';
import tripguide from './tripguide.png';

// Create a placeholder for any images that fail to load
const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23ccc' d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/%3E%3C/svg%3E";

// Function to safely get image URL with fallback
const getImageUrl = (importedImage) => {
  console.log('Attempting to load image:', importedImage);
  if (!importedImage) {
    console.warn('Image import is undefined');
    return placeholderImage;
  }
  try {
    // For Vite, we need to ensure we're getting the actual URL
    const imageUrl = importedImage?.default || importedImage;
    console.log('Successfully loaded image URL:', imageUrl);
    return imageUrl;
  } catch (error) {
    console.error('Error loading image:', error);
    return placeholderImage;
  }
};

export {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  meta,
  shopify,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  getImageUrl,
};
