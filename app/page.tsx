import { Footer, Hero, Navbar } from "@/components";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
