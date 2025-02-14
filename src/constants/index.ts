import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  html,
  css,
  javascript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  getImageUrl,
} from "../assets/index";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Interns Pakistan",
    icon: getImageUrl(starbucks), // Using placeholder icon
    iconBg: "#383E56",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js, and related technologies.",
      "Building responsive and interactive user interfaces with modern UI/UX principles.",
      "Implementing state management using Redux Toolkit and Context API.",
      "Collaborating with team members and participating in code reviews.",
      "Working with REST APIs and handling data fetching and state management.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Axiom",
    icon: getImageUrl(tesla), // Using placeholder icon
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Developed responsive web applications using React.js and modern JavaScript.",
      "Created reusable UI components and implemented state management solutions.",
      "Collaborated with backend developers to integrate REST APIs.",
      "Participated in daily stand-ups and sprint planning meetings.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    icon: getImageUrl(shopify), // Using placeholder icon
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Building custom web applications for clients using React.js and Next.js.",
      "Implementing responsive designs and ensuring cross-browser compatibility.",
      "Working directly with clients to gather requirements and deliver solutions.",
      "Managing multiple projects simultaneously and meeting deadlines.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: getImageUrl(carrent),
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: getImageUrl(jobit),
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: getImageUrl(tripguide),
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
