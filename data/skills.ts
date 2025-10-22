import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      {
        id: "react",
        name: "React",
        level: "expert",
        yearsOfExperience: 5,
      },
      {
        id: "nextjs",
        name: "Next.js",
        level: "expert",
        yearsOfExperience: 4,
      },
      {
        id: "typescript",
        name: "TypeScript",
        level: "advanced",
        yearsOfExperience: 4,
      },
      {
        id: "javascript",
        name: "JavaScript",
        level: "expert",
        yearsOfExperience: 6,
      },
      {
        id: "html",
        name: "HTML5",
        level: "expert",
        yearsOfExperience: 6,
      },
      {
        id: "css",
        name: "CSS3",
        level: "expert",
        yearsOfExperience: 6,
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        level: "advanced",
        yearsOfExperience: 3,
      },
      {
        id: "sass",
        name: "SASS/SCSS",
        level: "advanced",
        yearsOfExperience: 4,
      },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    skills: [
      {
        id: "nodejs",
        name: "Node.js",
        level: "advanced",
        yearsOfExperience: 5,
      },
      {
        id: "express",
        name: "Express.js",
        level: "advanced",
        yearsOfExperience: 4,
      },
      {
        id: "python",
        name: "Python",
        level: "intermediate",
        yearsOfExperience: 2,
      },
      {
        id: "graphql",
        name: "GraphQL",
        level: "intermediate",
        yearsOfExperience: 2,
      },
      {
        id: "rest",
        name: "REST APIs",
        level: "expert",
        yearsOfExperience: 5,
      },
    ],
  },
  {
    id: "database",
    name: "Database & Storage",
    skills: [
      {
        id: "postgresql",
        name: "PostgreSQL",
        level: "advanced",
        yearsOfExperience: 4,
      },
      {
        id: "mongodb",
        name: "MongoDB",
        level: "advanced",
        yearsOfExperience: 4,
      },
      {
        id: "mysql",
        name: "MySQL",
        level: "intermediate",
        yearsOfExperience: 3,
      },
      {
        id: "redis",
        name: "Redis",
        level: "intermediate",
        yearsOfExperience: 2,
      },
      {
        id: "prisma",
        name: "Prisma",
        level: "advanced",
        yearsOfExperience: 2,
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    skills: [
      {
        id: "aws",
        name: "AWS",
        level: "intermediate",
        yearsOfExperience: 3,
      },
      {
        id: "docker",
        name: "Docker",
        level: "advanced",
        yearsOfExperience: 3,
      },
      {
        id: "kubernetes",
        name: "Kubernetes",
        level: "intermediate",
        yearsOfExperience: 2,
      },
      {
        id: "git",
        name: "Git",
        level: "expert",
        yearsOfExperience: 6,
      },
      {
        id: "cicd",
        name: "CI/CD",
        level: "advanced",
        yearsOfExperience: 3,
      },
      {
        id: "vercel",
        name: "Vercel",
        level: "advanced",
        yearsOfExperience: 3,
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & Other",
    skills: [
      {
        id: "vscode",
        name: "VS Code",
        level: "expert",
        yearsOfExperience: 6,
      },
      {
        id: "figma",
        name: "Figma",
        level: "intermediate",
        yearsOfExperience: 3,
      },
      {
        id: "jest",
        name: "Jest",
        level: "advanced",
        yearsOfExperience: 4,
      },
      {
        id: "webpack",
        name: "Webpack",
        level: "intermediate",
        yearsOfExperience: 3,
      },
      {
        id: "eslint",
        name: "ESLint",
        level: "advanced",
        yearsOfExperience: 4,
      },
    ],
  },
  {
    id: "soft-skills",
    name: "Soft Skills",
    skills: [
      {
        id: "problem-solving",
        name: "Problem Solving",
        level: "expert",
      },
      {
        id: "communication",
        name: "Communication",
        level: "advanced",
      },
      {
        id: "teamwork",
        name: "Team Collaboration",
        level: "expert",
      },
      {
        id: "leadership",
        name: "Leadership",
        level: "advanced",
      },
      {
        id: "agile",
        name: "Agile/Scrum",
        level: "advanced",
      },
      {
        id: "mentoring",
        name: "Mentoring",
        level: "advanced",
      },
    ],
  },
];

// Helper functions
export const getAllSkills = () =>
  skillCategories.flatMap((category) => category.skills);

export const getSkillsByLevel = (
  level: "beginner" | "intermediate" | "advanced" | "expert"
) => getAllSkills().filter((skill) => skill.level === level);

export const getSkillByName = (name: string) =>
  getAllSkills().find(
    (skill) => skill.name.toLowerCase() === name.toLowerCase()
  );

export const getCategoryById = (id: string) =>
  skillCategories.find((category) => category.id === id);

export const getSkillCount = () => getAllSkills().length;

export const getExpertSkills = () => getSkillsByLevel("expert");
