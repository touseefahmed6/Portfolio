// Add type declarations for images

// @ts-ignore
declare module '../assets/index.js' {
  interface Content {
    mobile: string;
    backend: string;
    creator: string;
    web: string;
    typescript: string;
    html: string;
    css: string;
    javascript: string;
    reactjs: string;
    redux: string;
    tailwind: string;
    nodejs: string;
    mongodb: string;
    git: string;
    figma: string;
    docker: string;
    meta: string;
    starbucks: string;
    tesla: string;
    shopify: string;
    carrent: string;
    jobit: string;
    tripguide: string;
    threejs: string;
    atompoint: string;
    getImageUrl: (name: string) => string;
    scrumCert: string;
    projectManagementCert: string;
    angularCert: string;
    cert1: string;
    cert2: string;
    cert3: string;
    cert4: string;
    cert5: string;
    cert6: string;
    wakeelAI1: string;
    wakeelAI2: string;
    wakeelAI3: string;
    wakeelAI4: string;
    wakeelAI5: string;
    wakeelAI6: string;
    wakeelAI7: string;
    wakeelAI8: string;
    cms1: string;
    cms2: string;
    cms3: string;
    resumeBuilder1: string;
    resumeBuilder2: string;
    resumeBuilder3: string;
    resumeBuilder4: string;
    resumeBuilder5: string;
  }
  const content: Content;
  export default content;
}

import {
  atompoint,
  getImageUrl,
  scrumCert,
  projectManagementCert,
  angularCert,
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
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
} from "../assets/index.js";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: "FaLayerGroup",
    description: "Building complete web applications using modern technologies like React.js, Next.js, and Node.js."
  },
  {
    title: "Frontend Excellence",
    icon: "FaReact",
    description: "Creating responsive, user-friendly interfaces with React.js and modern frontend tools."
  },
  {
    title: "Backend Solutions",
    icon: "FaServer",
    description: "Developing robust backend systems with Node.js, Firebase, and efficient database management."
  },
  {
    title: "Performance Optimization",
    icon: "FaRocket",
    description: "Optimizing applications for speed, scalability, and exceptional user experience."
  },
];

const technologies = [
  {
    name: "React JS",
    icon: "SiReact",
  },
  {
    name: "Next JS",
    icon: "SiNextdotjs",
  },
  {
    name: "Node JS",
    icon: "SiNodedotjs",
  },
  {
    name: "Tailwind CSS",
    icon: "SiTailwindcss",
  },
  {
    name: "JavaScript",
    icon: "SiJavascript",
  },
  {
    name: "TypeScript",
    icon: "SiTypescript",
  },
  {
    name: "Firebase",
    icon: "SiFirebase",
  },
  {
    name: "MongoDB",
    icon: "SiMongodb",
  },
  {
    name: "MS SQL",
    icon: "DiMsqlServer",
  },
  {
    name: "Express JS",
    icon: "SiExpress",
  },
  {
    name: "Bootstrap",
    icon: "SiBootstrap",
  },
  {
    name: "Google Cloud",
    icon: "SiGooglecloud",
  },
  {
    name: "AI Integration",
    icon: "SiOpenai",
  },
];

const experiences = [
  {
    title: "FullStack Engineer",
    company_name: "AtomPoint",
    icon: atompoint,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Present",
    points: [
      "Worked on Wakeel ai platform using Next.js, Tailwind css, CSS, Typescript, Firebase, and GitHub.",
      "Implemented cloud functions using Node.js.",
      "Received continuous feedback, significantly enhancing my skills.",
    ],
  },
  {
    title: "Full-Stack Web Developer Intern",
    company_name: "AtomPoint",
    icon: atompoint,
    iconBg: "#E6DEDD",
    date: "May 2024 - Sept 2024",
    points: [
      "Built responsive websites using React.js, Bootstrap, CSS, JavaScript, Firebase, and GitHub.",
      "Developed and integrated AI chatbot solutions using ChatGPT-4.",
      "Implemented cloud functions in Node.js, improving web application functionality.",
      "Gained hands-on experience with frontend and backend development, enhancing problem-solving and coding skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of managing Touseef during his internship on our development team. He picked up our complex codebase incredibly fast and wasn't afraid to dive deep into the architecture to really understand what he was building. Not only was he technically sharp, but he also communicated his ideas clearly with the team and kept everyone updated on his progress. His strong work ethic and ability to both code well and collaborate effectively would make him a great asset to any dev team",
    name: "Israa Junaid",
    designation: "Full Stack Engineer",
    company: "Atompoint",
    image: "fa-solid fa-user-tie",
  },
  {
    testimonial:
      "Touseef consistently demonstrates a strong ability to handle both front-end and back-end development tasks with remarkable efficiency. His attention to detail and commitment to delivering high-quality code have been instrumental in ensuring the success of our projects. He is quick to learn new technologies, adapt to changing requirements, and solve complex challenges effectively. What truly sets Touseef apart is his collaborative mindset. He communicates clearly, works seamlessly with team members, and always approaches tasks with enthusiasm and a positive attitude. His ability to contribute innovative ideas and take ownership of his responsibilities makes him a valuable asset to any team.",
    name: "Mirza Adil",
    designation: "Senior Full Stack Engineer",
    company: "Atompoint",
    image: "fa-solid fa-user",
  }
];

const projects = [
  {
    name: "Wakeel AI",
    description: "Wakeel AI offers a wide range of cutting-edge legal services powered by artificial intelligence. Explore our features designed to streamline your legal experience, whether you're a legal professional or a client.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "orange-text-gradient",
      },
    ],
    image: wakeelAI1,
    additionalImages: [wakeelAI2, wakeelAI3, wakeelAI4, wakeelAI5, wakeelAI6, wakeelAI7, wakeelAI8],
    source_code_link: "https://chat.wakeel.ai/",
    live_link: "https://chat.wakeel.ai/"
  },
  {
    name: "Case Management System",
    description: "Case Management System streamlines case assignnments, documents management, collaboration, analytics, and billing, empowering companies and advocates to focus on delivering exceptional legal services.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "mssql",
        color: "pink-text-gradient",
      },
    ],
    image: cms1,
    additionalImages: [cms2, cms3],
    source_code_link: "https://portal.wakeel.ai/login",
    live_link: "https://portal.wakeel.ai/login"
  },
  {
    name: "Resume Builder",
    description: "Resume-Builder simplifies resume creation by allowing users to generate professional resumes in three unique layouts. Users simply enter their details, and the platform automatically generates a downloadable resume. Additionally, an AI-powered ChatBot assists users in crafting content for their resumes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "AI",
        color: "orange-text-gradient",
      },
    ],
    image: resumeBuilder1,
    additionalImages: [resumeBuilder2, resumeBuilder3, resumeBuilder4, resumeBuilder5],
    source_code_link: "#",
    live_link: null
  },
];

const certificates = [
  {
    title: "Scrum Foundation Professional Certificate",
    organization: "CertiProf",
    date: "December 2023",
    image: scrumCert,
    link: "#",
  },
  {
    title: "Project Management Professional",
    organization: "Management & Strategy Institute",
    date: "December 2023",
    image: projectManagementCert,
    link: "",
  },
  {
    title: "Introduction to AngularJs",
    organization: "Great Learning Academy",
    date: "March 2023",
    image: angularCert,
    link: "",
  },
  {
    title: "Full Stack Development",
    organization: "Meta",
    date: "August 2023",
    image: cert1,
    link: "#",
  },
  {
    title: "JavaScript-Crash-Course",
    organization: "Discount-courses",
    date: "December 2023",
    image: cert2,
    link: "#",
  },
  {
    title: "UI/UX For Beginners",
    organization: "Great Learning Academy",
    date: "April 2023",
    image: cert3,
    link: "#",
  },
  {
    title: "Scrum Fundamentals Ceetified",
    organization: "ScrumStudy",
    date: "December 2023",
    image: cert4,
    link: "#",
  },
  {
    title: "Full Stack Web Development Internship",
    organization: "Atompoint",
    date: "September 2024",
    image: cert5,
    link: "",
  },
  {
    title: "React js Workshop",
    organization: "ACM-MAJU",
    date: "March 2023",
    image: cert6,
    link: "",
  },
];

export { services, technologies, experiences, testimonials, projects, certificates };
