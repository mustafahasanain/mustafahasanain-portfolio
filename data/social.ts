import { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/mustafahasanain",
    icon: "github",
    username: "@mustafahasanain",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/mustafahasanain",
    icon: "linkedin",
    username: "mustafahasanain",
  },
  {
    id: "x",
    name: "X",
    url: "https://x.com/MustafaHDev",
    icon: "x",
    username: "@MustafaHDev",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/people/Mustafa-Hasanain-Web-Developer/61582474967319/?mibextid=wwXIfr&rdid=11qzyfqLBCMasXLh&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DiKTdww4M%2F%3Fmibextid%3DwwXIfr",
    icon: "facebook",
    username: "Mustafa Hasanain Web Developer",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/mustafahasanain.dev/",
    icon: "x",
    username: "@mustafahasanain.dev",
  },
  {
    id: "whatsapp",
    name: "Whatsapp",
    url: "https://wa.me/7904188727",
    icon: "whatsapp",
    username: "7904188727",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:contact@mustafahasanain.com",
    icon: "email",
    username: "contact@mustafahasanain.com",
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
