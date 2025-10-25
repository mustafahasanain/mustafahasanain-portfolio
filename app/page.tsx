import { Footer, Hero, Navbar, TechStack } from "@/components";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <Footer />
    </div>
  );
}
