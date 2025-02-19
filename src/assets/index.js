// Import logo and main images
import logo from "./logo.svg";
import backend from "./backend.png";
import creator from "./creator.png";
import mobile from "./mobile.png";
import web from "./web.png";
import github from "./github.png";
import menu from "./menu.svg";
import close from "./close.svg";

// Import tech stack icons
import css from "./tech/css.png";
import docker from "./tech/docker.png";
import figma from "./tech/figma.png";
import git from "./tech/git.png";
import html from "./tech/html.png";
import javascript from "./tech/javascript.png";
import mongodb from "./tech/mongodb.png";
import nodejs from "./tech/nodejs.png";
import reactjs from "./tech/reactjs.png";
import redux from "./tech/redux.png";
import tailwind from "./tech/tailwind.png";
import typescript from "./tech/typescript.png";
import threejs from "./tech/threejs.svg";

// Import company logos
import meta from "./company/meta.png";
import shopify from './company/shopify.png';
import starbucks from './company/starbucks.png';
import tesla from './company/tesla.png';
import atompoint from "./company/Atompoint.png";

// Import project images
import carrent from './carrent.png';
import jobit from './jobit.png';
import tripguide from './tripguide.png';

// Project imports
// Wakeel AI images
import wakeelAI1 from './Projects/Wakeel-AI/image (6).png';
import wakeelAI2 from './Projects/Wakeel-AI/image (7).png';
import wakeelAI3 from './Projects/Wakeel-AI/image (8).png';
import wakeelAI4 from './Projects/Wakeel-AI/image (10).png';
import wakeelAI5 from './Projects/Wakeel-AI/image (11).png';
import wakeelAI6 from './Projects/Wakeel-AI/image (12).png';
import wakeelAI7 from './Projects/Wakeel-AI/image (13).png';
import wakeelAI8 from './Projects/Wakeel-AI/image (14).png';

// Case Management System images
import cms1 from '../assets/Projects/Case Management System/image (6).png';
import cms2 from '../assets/Projects/Case Management System/image (7).png';
import cms3 from '../assets/Projects/Case Management System/image (8).png';

// Resume Builder images
import resumeBuilder1 from './Projects/Resume-Builder/CV-Generator-1.jpg';
import resumeBuilder2 from './Projects/Resume-Builder/CV-Generator-2.jpg';
import resumeBuilder3 from './Projects/Resume-Builder/CV-Generator-3.jpg';
import resumeBuilder4 from './Projects/Resume-Builder/CV-Generator-4.jpg';
import resumeBuilder5 from './Projects/Resume-Builder/CV-Generator-5.jpg';

// Import certificates
import angularCert from "./Certificates/Angular JS Certificate.jpg";
import projectManagementCert from "./Certificates/Project Management Certificate_page-0001.jpg";
import scrumCert from "./Certificates/Scrum Foundation Professional Certificate_page-0001.jpg";
import cert1 from "./Certificates/image (1).png";
import cert2 from "./Certificates/image (2).png";
import cert3 from "./Certificates/image (3).png";
import cert4 from "./Certificates/image (4).png";
import cert5 from "./Certificates/image (5).png";
import cert6 from "./Certificates/image.png";

// Import profile image
import profile from './Touseef Ahmed.png';

// Import resume
import resume from './Touseef Ahmed - FullStack Developer.pdf';

/**
 * Get the URL of the image.
 * @param {string} imagePath - The path to the image.
 * @returns {string} - The URL of the image.
 */
const getImageUrl = (/* string */ imagePath) => {
  try {
    return new URL(imagePath, import.meta.url).href;
  } catch (error) {
    console.error('Error getting image URL:', error);
    return '';
  }
};

export {
  atompoint,
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
  wakeelAI1,
  wakeelAI2,
  wakeelAI3,
  wakeelAI4,
  wakeelAI5,
  wakeelAI6,
  wakeelAI7,
  wakeelAI8,
  cms1,
  cms2,
  cms3,
  resumeBuilder1,
  resumeBuilder2,
  resumeBuilder3,
  resumeBuilder4,
  resumeBuilder5,
  getImageUrl,
  profile,
  resume,
  // Certificates
  angularCert,
  projectManagementCert,
  scrumCert,
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
};
