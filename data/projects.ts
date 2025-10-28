import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "React Movie App",
    description:
      "A movie discovery web app featuring trending films, detailed info, and search functionality using a public movie API.",
    image: "/projects/movie-trending-website.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/host.svg"],
    liveUrl: "fill-yours-info",
    githubUrl: "https://github.com/mustafahasanain/react-movie-app",
  },
  {
    id: "2",
    title: "Xora Landing Page",
    description:
      "A visually captivating landing page for a digital agency built with modern web technologies.",
    image: "/projects/xora-landing.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/host.svg"],
    liveUrl: "fill-yours-info",
    githubUrl: "https://github.com/mustafahasanain/xora-landing-page",
  },
  {
    id: "3",
    title: "Awwwards Winning Website",
    description:
      "A creative showcase website inspired by Awwwards design standards with smooth interactions and animations.",
    image: "/projects/awwwards.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/host.svg"],
    liveUrl: "fill-yours-info",
    githubUrl: "https://github.com/mustafahasanain/awwwards-winning-website",
  },
  {
    id: "4",
    title: "3D Portfolio",
    description:
      "A 3D interactive portfolio website integrating Three.js and React Three Fiber for immersive visuals.",
    image: "/projects/3d-portfolio.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/host.svg"],
    liveUrl: "fill-yours-info",
    githubUrl: "https://github.com/mustafahasanain/3d-portfolio",
  },
  {
    id: "5",
    title: "Travel Agency Dashboard",
    description:
      "A full-featured admin dashboard for managing travel bookings, clients, and destinations.",
    image: "/projects/travel-dashboard.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/host.svg"],
    liveUrl: "fill-yours-info",
    githubUrl: "https://github.com/mustafahasanain/travel-agency-dashboard",
  },
  {
    id: "6",
    title: "Record Share Platform",
    description:
      "A web platform for sharing and discovering audio recordings, podcasts, and music tracks.",
    image: "/projects/record-share.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/host.svg"],
    liveUrl: "fill-yours-info",
    githubUrl: "https://github.com/mustafahasanain/record-share-platform",
  },
  {
    id: "7",
    title: "Kemali Clinic",
    description:
      "A professional medical clinic website with appointment booking and services showcase.",
    image: "/projects/kemaliclinic.png",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/host.svg"],
    liveUrl: "fill-yours-info",
    githubUrl: "https://github.com/mustafahasanain/kemaliclinic",
  },
  {
    id: "8",
    title: "AI Resume Analyzer",
    description:
      "An AI-powered web app that analyzes resumes and provides improvement suggestions using NLP.",
    image: "/projects/ai-resume.png",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/host.svg"],
    liveUrl: "fill-yours-info",
    githubUrl: "https://github.com/mustafahasanain/ai-resume-analyzer",
  },
  {
    id: "9",
    title: "Nike E-Commerce",
    description:
      "A Nike-inspired e-commerce web app with product filtering, cart, and checkout functionalities.",
    image: "/projects/nike-ecommerce.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/host.svg"],
    liveUrl: "fill-yours-info",
    githubUrl: "https://github.com/mustafahasanain/nike-ecommerce",
  },
];

// Helper functions to filter projects
export const getProjectById = (id: string) => projects.find((p) => p.id === id);

export const getRecentProjects = (limit: number = 3) => {
  return projects.slice(-limit);
};
