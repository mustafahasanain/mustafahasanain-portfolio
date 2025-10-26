import { Footer, Hero, LatestProjects, Navbar, TechStack } from "@/components";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TechStack />
      <LatestProjects />
    </div>
  );
}
