import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Jost, Cairo } from "next/font/google";
import { Footer, Navbar, ThemeProvider } from "@/components";
import { locales, defaultLocale } from "@/i18n";
import "../globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  preload: true,
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });

  // Create locale-aware URL (no prefix for default locale)
  const siteUrl = locale === defaultLocale
    ? "https://mustafahasanain.com"
    : `https://mustafahasanain.com/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    authors: [{ name: "Mustafa Hasanain" }],
    creator: "Mustafa Hasanain",
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : locale === "ar" ? "ar_SA" : "tr_TR",
      url: siteUrl,
      title: t("title"),
      description: t("description"),
      siteName: "Mustafa Hasanain Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout(props: Props) {
  const params = await props.params;
  const { locale } = params;
  const { children } = props;

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${jost.variable} ${cairo.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
