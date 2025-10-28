"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Input } from "@/components/ui/form/Input";
import { Textarea } from "@/components/ui/form/Textarea";
import { PhoneInput } from "@/components/ui/form/PhoneInput";
import { Checkbox } from "@/components/ui/form/Checkbox";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validations/contact";
import { contactInfo, socialLinks } from "@/data/social";
import Faq from "../Faq";

/**
 * Contact Section Component
 * Features:
 * - Left panel: Contact information (location, email, phone, social media)
 * - Right panel: Contact form with validation
 * - Web3Forms integration for email delivery
 * - Full dark mode support
 * - Responsive design (mobile-first)
 */
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      phone: "",
      message: "",
      privacyConsent: false,
    },
  });

  const phoneValue = watch("phone");

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // Web3Forms API endpoint
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Contact Form Submission from ${data.fullName}`,
          from_name: data.fullName,
          email: data.email,
          company: data.companyName || "Not provided",
          phone: data.phone,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again or contact me directly via email.",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Icon mapping for social media
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    facebook: Facebook,
    linkedin: Linkedin,
    x: Twitter,
    twitter: Twitter,
    instagram: Instagram,
  };

  const contactSocials = socialLinks.filter((link) =>
    ["facebook", "linkedin", "x", "instagram"].includes(link.id)
  );

  return (
    <section className="w-full py-20 md:py-32" id="contact">
      <Toaster position="top-right" richColors />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Contact Me
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          {/* Left Panel - Contact Information */}
          {/* <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-3xl p-8 md:p-12 text-white"> */}
          <div className="bg-black dark:bg-white rounded-3xl p-8 md:p-12 text-white dark:text-black">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Get in touch
            </h2>

            {/* Visit us */}
            {/* <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Visit us
              </h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                Come say hello at our office HQ.
                <br />
                {contactInfo.location}
                <br />
                Timezone: {contactInfo.timezone}
              </p>
            </div> */}

            {/* Chat to us */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Chat to me
              </h3>
              <p className="text-white/90 dark:text-black text-sm md:text-base mb-2">
                Feel free to reach out - I will get back to you soon.
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-white hover:text-white/80 dark:text-black hover:dark:text-black/60 text-sm md:text-base transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* Call us */}
            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call me
              </h3>
              <p className="text-white/90 dark:text-black text-sm md:text-base mb-2">
                Sat-Thu from 8am to 5pm.
              </p>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="text-white hover:text-white/80 dark:text-black text-sm md:text-base transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>

            {/* Social media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Social media</h3>
              <div className="flex gap-4">
                {contactSocials.map((link) => {
                  const Icon = iconMap[link.id] || Facebook;
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/10 hover:bg-white hover:text-[#AD7CF6] flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <Input
                label="Full Name"
                placeholder="John Doe"
                required
                {...register("fullName")}
                error={errors.fullName?.message}
              />

              {/* Company Name */}
              <Input
                label="Company Name"
                placeholder="Your Company Ltd."
                {...register("companyName")}
                error={errors.companyName?.message}
              />

              {/* Email */}
              <Input
                label="Email"
                type="email"
                placeholder="john@example.com"
                required
                {...register("email")}
                error={errors.email?.message}
              />

              {/* Phone Number */}
              <PhoneInput
                label="Phone Number"
                value={phoneValue}
                onChange={(value) => setValue("phone", value || "")}
                error={errors.phone?.message}
                required
              />

              {/* Message */}
              <Textarea
                label="Message"
                placeholder="Tell me about your project or what you would like to build."
                rows={5}
                required
                {...register("message")}
                error={errors.message?.message}
              />

              {/* Privacy Consent */}
              <Checkbox
                label={
                  <span>
                    I'd like to receive more information about company. I
                    understand and agree to the{" "}
                    <a
                      href="/privacy-policy"
                      className="text-primary hover:underline"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                }
                {...register("privacyConsent")}
                error={errors.privacyConsent?.message}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black dark:bg-white hover:dark:bg-white/80 hover:bg-black/80 cursor-pointer disabled:bg-blue-400 text-white dark:text-black font-semibold py-3.5 px-8 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <Faq />
      </div>
    </section>
  );
}
