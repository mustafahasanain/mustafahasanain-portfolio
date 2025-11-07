import Script from "next/script";

/**
 * Umami Analytics Component
 *
 * Privacy-focused, lightweight analytics tracking for the portfolio.
 *
 * Setup Instructions:
 * 1. Sign up at https://cloud.umami.is (free tier)
 * 2. Add your website domain
 * 3. Copy your Website ID from the dashboard
 * 4. Add to .env.local:
 *    NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-website-id
 *    NEXT_PUBLIC_UMAMI_SRC=https://cloud.umami.is/script.js
 *
 * Features:
 * - Automatic pageview tracking
 * - Custom event tracking via window.umami.track()
 * - No cookies, GDPR compliant
 * - < 2KB script size
 */
export default function Analytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const scriptSrc = process.env.NEXT_PUBLIC_UMAMI_SRC;

  // Don't render if environment variables are not set
  if (!websiteId || !scriptSrc) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "Umami Analytics: Missing environment variables. Add NEXT_PUBLIC_UMAMI_WEBSITE_ID and NEXT_PUBLIC_UMAMI_SRC to .env.local"
      );
    }
    return null;
  }

  return (
    <Script
      async
      defer
      src={scriptSrc}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  );
}
