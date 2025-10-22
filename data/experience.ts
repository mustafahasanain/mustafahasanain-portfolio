import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Tech Innovations Inc.",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    locationType: "hybrid",
    startDate: "2023-01",
    endDate: "Present",
    description:
      "Leading the development of enterprise-scale web applications and mentoring junior developers.",
    responsibilities: [
      "Architected and developed scalable microservices using Node.js and TypeScript",
      "Led a team of 5 developers in building a customer-facing SaaS platform",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Conducted code reviews and established coding standards across the team",
      "Collaborated with product managers and designers to define technical requirements",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
    ],
    achievements: [
      "Reduced application load time by 40% through performance optimization",
      "Successfully migrated legacy monolith to microservices architecture",
      "Implemented monitoring system that decreased downtime by 75%",
    ],
  },
  {
    id: "2",
    company: "Digital Solutions Co.",
    position: "Full Stack Developer",
    location: "New York, NY",
    locationType: "remote",
    startDate: "2021-06",
    endDate: "2022-12",
    description:
      "Developed and maintained multiple client-facing web applications with focus on performance and user experience.",
    responsibilities: [
      "Built responsive web applications using React and Next.js",
      "Designed and implemented RESTful APIs using Express.js and MongoDB",
      "Integrated third-party services including Stripe, SendGrid, and Twilio",
      "Optimized database queries improving response times by 50%",
      "Participated in agile ceremonies and sprint planning",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Express.js",
      "MongoDB",
      "Redis",
      "Git",
      "Jest",
      "Tailwind CSS",
    ],
    achievements: [
      "Delivered 15+ successful projects on time and within budget",
      "Implemented automated testing increasing code coverage to 85%",
      "Mentored 3 junior developers in best practices",
    ],
  },
  {
    id: "3",
    company: "StartupXYZ",
    position: "Frontend Developer",
    location: "Austin, TX",
    locationType: "onsite",
    startDate: "2020-03",
    endDate: "2021-05",
    description:
      "Created modern, accessible, and performant user interfaces for early-stage startup products.",
    responsibilities: [
      "Developed reusable React components following atomic design principles",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Ensured cross-browser compatibility and responsive design",
      "Implemented state management using Redux and Context API",
      "Wrote comprehensive unit and integration tests",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Redux",
      "SASS",
      "Webpack",
      "Git",
      "Figma",
    ],
    achievements: [
      "Built component library used across 5+ products",
      "Improved accessibility score from 65 to 95 (Lighthouse)",
      "Reduced bundle size by 35% through code splitting",
    ],
  },
  {
    id: "4",
    company: "Freelance",
    position: "Web Developer",
    location: "Remote",
    locationType: "remote",
    startDate: "2018-09",
    endDate: "2020-02",
    description:
      "Provided web development services to small businesses and startups across various industries.",
    responsibilities: [
      "Built custom websites and web applications for clients",
      "Managed project timelines and client communications",
      "Provided ongoing maintenance and support",
      "Implemented SEO best practices and analytics tracking",
      "Trained clients on content management systems",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress",
      "PHP",
      "MySQL",
      "Bootstrap",
    ],
    achievements: [
      "Successfully completed 20+ client projects",
      "Maintained 5-star rating across all freelance platforms",
      "Generated $150K+ in revenue over 18 months",
    ],
  },
];

// Helper functions
export const getCurrentExperience = () =>
  experiences.find((exp) => exp.endDate === "Present");

export const getPastExperiences = () =>
  experiences.filter((exp) => exp.endDate !== "Present");

export const getExperienceByCompany = (company: string) =>
  experiences.find((exp) => exp.company === company);

export const getTotalYearsOfExperience = () => {
  const calculateYears = (start: string, end: string | "Present") => {
    const startDate = new Date(start);
    const endDate = end === "Present" ? new Date() : new Date(end);
    return (
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
    );
  };

  return experiences.reduce(
    (total, exp) => total + calculateYears(exp.startDate, exp.endDate),
    0
  );
};
