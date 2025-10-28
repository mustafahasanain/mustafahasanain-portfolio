import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import { Faq } from "@/components";

export const metadata: Metadata = {
  title: "Contact | Mustafa Hasanain",
  description:
    "Get in touch with Mustafa Hasanain. Let's discuss your project and bring your ideas to life.",
  keywords: [
    "contact",
    "get in touch",
    "hire developer",
    "freelance developer",
    "web development services",
    "mustafa hasanain contact",
  ],
  openGraph: {
    title: "Contact | Mustafa Hasanain",
    description:
      "Get in touch with Mustafa Hasanain. Let's discuss your project and bring your ideas to life.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  );
}
