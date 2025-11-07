/**
 * Umami Analytics Type Definitions
 *
 * Provides TypeScript types for Umami's global tracking API.
 * This enables type-safe custom event tracking throughout the application.
 *
 * Usage Example:
 *
 * // Track a simple event
 * window.umami?.track('button-click');
 *
 * // Track an event with custom properties
 * window.umami?.track('contact-form-submit', {
 *   email: 'user@example.com',
 *   subject: 'Portfolio Inquiry'
 * });
 *
 * // Track a conversion goal
 * window.umami?.track('resume-download', {
 *   format: 'pdf'
 * });
 */

interface UmamiEventData {
  hostname?: string;
  language?: string;
  referrer?: string;
  screen?: string;
  title?: string;
  url?: string;
  website?: string;
  [key: string]: string | number | boolean | undefined;
}

interface UmamiTracker {
  /**
   * Track a custom event
   *
   * @param eventName - The name of the event to track
   * @param eventData - Optional custom properties for the event
   */
  track(eventName: string, eventData?: UmamiEventData): void;

  /**
   * Track a pageview (usually automatic, but can be called manually)
   *
   * @param url - The URL to track (defaults to current page)
   * @param referrer - The referrer URL
   */
  track(url?: string, referrer?: string): void;
}

declare global {
  interface Window {
    /**
     * Umami Analytics global tracker
     * Available after the Umami script loads
     */
    umami?: UmamiTracker;
  }
}

export {};
