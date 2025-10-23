import { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/mustafahasanain",
    icon: "github",
    username: "@mustafahasanain",
    color: "#181717",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/mustafahasanain",
    icon: "linkedin",
    username: "mustafahasanain",
    color: "#0A66C2",
  },
  {
    id: "x",
    name: "X",
    url: "https://x.com/mustafahasanain",
    icon: "x",
    username: "@m7asanain",
    color: "#1DA1F2",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/mustafahasanain1/",
    icon: "x",
    username: "@mustafahasanain1",
    color: "#1DA1F2",
  },
  {
    id: "whatsapp",
    name: "Whatsapp",
    url: "https://wa.me/7904188727",
    icon: "whatsapp",
    username: "7904188727",
    color: "#EA4335",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:contact@mustafahasanain.com",
    icon: "email",
    username: "contact@mustafahasanain.com",
    color: "#EA4335",
  },
];

// Helper functions
export const getPrimarySocialLinks = () =>
  socialLinks.filter((link) =>
    ["github", "linkedin", "twitter", "email"].includes(link.id)
  );

export const getSocialLinkById = (id: string) =>
  socialLinks.find((link) => link.id === id);

export const getSocialLinkByName = (name: string) =>
  socialLinks.find((link) => link.name.toLowerCase() === name.toLowerCase());

// Contact information
export const contactInfo = {
  email: "contact@mustafahasanain.com",
  phone: "+964 790 4188 727",
  location: "Iraq, Baghdad",
  timezone: "GMT+3",
  availability: "available" as const,
};
