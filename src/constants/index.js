import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
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
  refine,
  threejs,
  treleva,
  metaMad,
  hooBank,
  ytClone,
} from "../assets";

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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
    icon: creator,
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Software Developer",
    company_name: "Treleva Technologies",
    icon: treleva,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Yariga Properties",
    description:
      "Yariga is a web-based platform for buying, selling, and renting real estate. It features customizable search functions, property listings, and rental services. Yariga also provides useful tools such as mortgage calculators and legal advice to assist users in making informed decisions throughout the real estate process.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "refine",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "MUI",
        color: "orange-text-gradient",
      },
    ],
    image: refine,
    source_code_link: `https://github.com/yuviS003/MERN-dashboard`,
    live_link: `https://refine-dashboard-seven.vercel.app/`,
  },
  {
    name: "Trip Guide",
    description:
      "TripGuide is a user-friendly web-based platform for booking tours and hotels. It features customizable search functions, extensive databases of hotels and tour providers, and reviews from previous guests. Users can also book tours and activities in their preferred destination, making informed decisions through a comprehensive platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/yuviS003/demo-travel-app",
    live_link: "https://demo-travel-app.vercel.app/",
  },
  {
    name: "Metaverse Madness",
    description:
      "Metaversus is a cutting-edge landing website for a company specializing in metaverse and virtual reality technology. The sleek and modern design showcases their innovative approach to immersive experiences, and the clear messaging highlights their expertise and passion for creating a new digital frontier.",
    tags: [
      {
        name: "next-13",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "framer",
        color: "pink-text-gradient",
      },
    ],
    image: metaMad,
    source_code_link: "https://github.com/yuviS003/next13-metaverse-landing",
    live_link: "https://next13-metaverse-landing.vercel.app/",
  },
  {
    name: "HooBank",
    description:
      "HooBank is a contemporary financial institution that offers state-of-the-art credit card and online payment services. The website's sleek design and advanced technology make banking more accessible and convenient than ever. HooBank's cutting-edge approach sets it apart, providing modern consumers with a banking experience tailored to their needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "vitejs",
        color: "orange-text-gradient",
      },
    ],
    image: hooBank,
    source_code_link: "https://github.com/yuviS003/hooBank-modernUI",
    live_link: "https://hoo-bank-modern-ui.vercel.app/",
  },
  {
    name: "YouTube 2.0",
    description:
      "This YouTube clone web app, developed with Rapid API, React, and MUI, allows users to explore and enjoy a wide range of videos. With its modern and intuitive design, users can easily browse and search for videos, view channels, and watch videos seamlessly. It offers a personalized viewing experience with features such as customizable themes and subscriptions to channels.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: ytClone,
    source_code_link: "https://github.com/yuviS003/youtube_clone",
    live_link: "https://youtube-clone-yuvis003.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
