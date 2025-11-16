import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "React Movie App",
    description:
      "A movie discovery web app featuring trending films, detailed info, and search functionality using a public movie API.",
    image: "/projects/movie-trending-website.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/app.svg", "/host.svg"],
    liveUrl: "https://darkgoldenrod-goshawk-786139.hostingersite.com/",
    githubUrl: "https://github.com/mustafahasanain/react-movie-app",
  },
  {
    id: "2",
    title: "Xora Landing Page",
    description:
      "A visually captivating landing page for a digital agency built with react and tailwind.",
    image: "/projects/xora-landing.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/host.svg"],
    liveUrl: "https://darkorchid-walrus-501311.hostingersite.com/",
    githubUrl: "https://github.com/mustafahasanain/xora-landing-page",
  },
  {
    id: "3",
    title: "Awwwards Winning Website",
    description:
      "A creative showcase website inspired by Awwwards design standards with smooth interactions and animations.",
    image: "/projects/awwwards.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/host.svg"],
    liveUrl: "https://lightgrey-cat-361121.hostingersite.com/",
    githubUrl: "https://github.com/mustafahasanain/awwwards-winning-website",
  },
  {
    id: "4",
    title: "3D Portfolio",
    description:
      "A 3D interactive portfolio website integrating Three.js and React Three Fiber for immersive visuals.",
    image: "/projects/3d-portfolio.png",
    iconLists: ["/re.svg", "/threejs.svg", "/gsap.svg", "/host.svg"],
    liveUrl: "https://snow-alpaca-660933.hostingersite.com/",
    githubUrl: "https://github.com/mustafahasanain/3d-portfolio",
  },
  {
    id: "5",
    title: "Travel Agency Dashboard",
    description:
      "A full-featured admin dashboard for managing travel bookings, clients, and destinations.",
    image: "/projects/travel-dashboard.png",
    iconLists: [
      "/re.svg",
      "/rr.svg",
      "/tail.svg",
      "/app.svg",
      "/syncfusion.svg",
      "/gemini.svg",
      "/vercel.svg",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/mustafahasanain/travel-agency-dashboard",
  },
  {
    id: "6",
    title: "Netrix-Iq",
    description:
      "A WooCommerce web app for selling network reliable networking hardware and smart home devices.",
    image: "/projects/netrix-iq.png",
    iconLists: ["/wordpress.svg", "/php.svg"],
    liveUrl: "",
    githubUrl: "https://github.com/mustafahasanain/record-share-platform",
  },
  {
    id: "7",
    title: "Kemali Clinic",
    description:
      "A professional medical clinic website with appointment booking and services showcase.",
    image: "/projects/kemaliclinic.png",
    iconLists: ["/nextjs.svg", "/tail.svg", "/ts.svg", "/host.svg"],
    liveUrl: "https://powderblue-turkey-333061.hostingersite.com/",
    githubUrl: "https://github.com/mustafahasanain/kemaliclinic",
  },
  {
    id: "8",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered web app that analyzes resumes and provides improvement suggestions using NLP.",
    image: "/projects/ai-resume.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/app.svg", "/host.svg"],
    liveUrl: "",
    githubUrl: "https://github.com/mustafahasanain/ai-resume-analyzer",
  },
  {
    id: "9",
    title: "Nike E-Commerce",
    description:
      "A Nike-inspired e-commerce web app with product filtering, cart, and checkout functionalities.",
    image: "/projects/nike-ecommerce.jpg",
    iconLists: [
      "/nextjs.svg",
      "/tail.svg",
      "/ts.svg",
      "/claude.svg",
      "/host.svg",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/mustafahasanain/nike-ecommerce",
  },
];

// Helper functions to filter projects
export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const getRecentProjects = (limit: number = 3) => {
  return projects.slice(-limit);
};
