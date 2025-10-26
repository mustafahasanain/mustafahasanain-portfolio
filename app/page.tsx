import { Footer, Hero, LatestProjects, Navbar, TechStack } from "@/components";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <LatestProjects />
      <Footer />
    </div>
  );
}
