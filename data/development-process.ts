import { DevelopmentPhase } from "@/types";

export const developmentPhases: DevelopmentPhase[] = [
  {
    id: 1,
    phase: "Phase 1",
    title: "Planning & Analysis",
    description:
      "I analyze project goals, target users, and technical requirements to define a clear scope and strategic plan that guides development.",
    animationSpeed: 3,
    containerClassName: "bg-[#812B8C]",
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Design",
    description:
      "I create mockups and prototypes that align with user needs and brand identity, ensuring an intuitive and visually appealing interface.",
    animationSpeed: 3,
    containerClassName: "bg-[#D9731A]",
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Development & Testing",
    description:
      "I build the application using modern technologies, writing clean and maintainable code, followed by rigorous testing to ensure quality and performance.",
    animationSpeed: 3,
    containerClassName: "bg-[#BF247A]",
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Deployment & Maintenance",
    description:
      "I deploy the application to production, monitor its performance, and provide ongoing support and updates to ensure smooth operation.",
    animationSpeed: 3,
    containerClassName: "bg-sky-600",
    colors: [[125, 211, 252]],
  },
];
