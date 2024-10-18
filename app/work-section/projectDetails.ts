export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 1,
    name: "Tigerhall",
    description:
      "A social learning platform focused on Corporate & individual growth.",
    technologies: ["NextJS", "Typescript", "Turborepo"],
    demo: "https://tigerhall.com/",
    image: require(".//../../public/projects/tigerhall.webp"),
    available: true,
  },
  {
    id: 2,
    name: "VianlixUi",
    description:
      "A side project where I add resusable animation components that you can copy paste to your projects",
    technologies: ["NextJS", "Framer-motion", "TailwindCSS"],
    demo: "https://vianlix.com/",
    github: "https://github.com/pixelftw/VianlixUi",
    image: require(".//../../public/projects/vianlix.webp"),
    available: true,
  },
  {
    id: 3,
    name: "Daze MGMT",
    description:
      "A website where users can book infuencers for there buisness advertisements",
    technologies: ["NextJS", "GSAP", "Strapi"],
    demo: "https://daze-mgmt.com/",
    image: require(".//../../public/projects/dazeMGMT.webp"),
    available: true,
  },
  {
    id: 5,
    name: "Ai Delle Whatsapp bot",
    description:
      "It was a fun project made for experiencing the open ai Dalle api",
    technologies: ["Dalle", "ExpressJS", "whatapp-web.js"],
    github: "https://github.com/Vikas-Yadav-07/whatapp-bot",
    image: require(".//../../public/projects/whatsappbot.webp"),
    available: true,
  },
  {
    id: 4,
    name: "Daze MGMT",
    description:
      "A website where users can book infuencers for there buisness advertisements",
    technologies: ["NextJS", "GSAP", "Strapi"],
    demo: "https://daze-mgmt.com/",
    image: require(".//../../public/projects/dazeMGMT.webp"),
    available: true,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
