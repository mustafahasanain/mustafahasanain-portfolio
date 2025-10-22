import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    longDescription:
      "Built a comprehensive e-commerce solution featuring a modern React frontend, Node.js backend, and PostgreSQL database. Implemented Stripe payment integration, real-time inventory tracking, order management system, and a powerful admin dashboard for managing products, orders, and customers.",
    image: "/projects/ecommerce.jpg",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/mustafahasanain/ecommerce-platform",
    featured: true,
    category: "web",
    year: 2024,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration features, and analytics.",
    longDescription:
      "Developed a Trello-like task management system with drag-and-drop functionality, real-time collaboration using WebSockets, team workspaces, task assignments, due dates, comments, and comprehensive analytics dashboard to track team productivity.",
    image: "/projects/task-management.jpg",
    tags: [
      "React",
      "TypeScript",
      "Socket.io",
      "Express",
      "MongoDB",
      "Redux",
      "Material-UI",
    ],
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/mustafahasanain/task-manager",
    featured: true,
    category: "web",
    year: 2024,
  },
  {
    id: "3",
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy.",
    longDescription:
      "Created an intelligent content generation platform leveraging OpenAI's GPT models. Features include custom tone selection, multi-language support, content optimization for SEO, plagiarism detection, and a content calendar for scheduling posts across multiple platforms.",
    image: "/projects/ai-content.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "OpenAI API",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    liveUrl: "https://example-ai-content.com",
    githubUrl: "https://github.com/mustafahasanain/ai-content-generator",
    featured: true,
    category: "web",
    year: 2023,
  },
  {
    id: "4",
    title: "Fitness Tracking Mobile App",
    description:
      "A cross-platform mobile app for tracking workouts, nutrition, and fitness goals with social features.",
    longDescription:
      "Built a comprehensive fitness tracking application using React Native. Includes workout logging, nutrition tracking, progress photos, goal setting, social features to connect with friends, challenge participation, and integration with popular fitness wearables.",
    image: "/projects/fitness-app.jpg",
    tags: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Redux Toolkit",
      "Expo",
      "Native Base",
    ],
    githubUrl: "https://github.com/mustafahasanain/fitness-tracker",
    featured: false,
    category: "mobile",
    year: 2023,
  },
  {
    id: "5",
    title: "Real Estate Listing Platform",
    description:
      "A modern real estate platform with advanced search filters, virtual tours, and mortgage calculators.",
    longDescription:
      "Developed a full-featured real estate listing website with property search using advanced filters, interactive maps integration, virtual tour functionality, mortgage calculator, property comparison tools, saved searches, and email alerts for new listings matching user criteria.",
    image: "/projects/real-estate.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Google Maps API",
      "Prisma",
      "MySQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://example-realestate.com",
    githubUrl: "https://github.com/mustafahasanain/real-estate-platform",
    featured: false,
    category: "web",
    year: 2023,
  },
];

// Helper functions to filter projects
export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter((p) => p.category === category);

export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id);

export const getRecentProjects = (limit: number = 3) =>
  projects.sort((a, b) => b.year - a.year).slice(0, limit);
