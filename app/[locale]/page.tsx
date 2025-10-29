import {
  About,
  DevelopmentProcess,
  Hero,
  LatestProjects,
  TechStack,
  WorkExperience,
} from "@/components";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const { locale } = params;

  // Enable static rendering
  setRequestLocale(locale);

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
