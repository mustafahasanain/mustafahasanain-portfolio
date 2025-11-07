import { type Locale } from "@/i18n";

interface StructuredDataProps {
  locale: Locale;
}

export function StructuredData({ locale }: StructuredDataProps) {
  const baseUrl = "https://mustafahasanain.com";
  const currentUrl = locale === "en" ? baseUrl : `${baseUrl}/${locale}`;

  // Person schema for Mustafa Hasanain
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mustafa Hasanain",
    url: baseUrl,
    image: `${baseUrl}/profile.jpeg`,
    jobTitle: "Full-Stack Developer",
    description:
      locale === "en"
        ? "Full-Stack Developer specializing in modern web technologies"
        : locale === "ar"
        ? "مطور ويب متخصص في التقنيات الحديثة"
        : "Modern web teknolojilerinde uzmanlaşmış Full-Stack Geliştirici",
    sameAs: [
      "https://github.com/mustafahasanain",
      "https://linkedin.com/in/mustafahasanain",
      "https://twitter.com/mustafahasanain",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Full-Stack Development",
    ],
  };

  // WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mustafa Hasanain Portfolio",
    url: currentUrl,
    description:
      locale === "en"
        ? "Portfolio of Mustafa Hasanain - Full-Stack Developer"
        : locale === "ar"
        ? "محفظة أعمال مصطفى حسنين - مطور ويب"
        : "Mustafa Hasanain Portföyü - Full-Stack Geliştirici",
    author: {
      "@type": "Person",
      name: "Mustafa Hasanain",
    },
    inLanguage: locale === "en" ? "en-US" : locale === "ar" ? "ar-IQ" : "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${currentUrl}/projects?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
