import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Footer, Navbar, ThemeProvider } from "@/components";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Mustafa Hasanain | Portfolio",
  description: "Creating Scalable Web Apps and Custom Software Solutions",
  keywords: [
    "web development",
    "software engineer",
    "portfolio",
    "React",
    "Next.js",
    "full stack developer",
  ],
  authors: [{ name: "Mustafa Hasanain" }],
  creator: "Mustafa Hasanain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mustafahasanain.com",
    title: "Mustafa Hasanain | Portfolio",
    description: "Creating Scalable Web Apps and Custom Software Solutions",
    siteName: "Mustafa Hasanain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustafa Hasanain | Portfolio",
    description: "Creating Scalable Web Apps and Custom Software Solutions",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.className} antialiased`}>
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
      </body>
    </html>
  );
}
