import {
  About,
  DevelopmentProcess,
  Hero,
  LatestProjects,
  TechStack,
  WorkExperience,
} from "@/components";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <TechStack />
      <LatestProjects />
      <WorkExperience />
      <DevelopmentProcess />
    </div>
  );
}
