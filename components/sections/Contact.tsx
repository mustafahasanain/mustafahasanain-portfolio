"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import {
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validations/contact";
import { contactInfo, socialLinks } from "@/data/social";
import { Checkbox, Faq, Input, PhoneInput, Textarea } from "@/components";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
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
      contactConsent: false,
    },
  });

  const phoneValue = watch("phone");

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
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
        toast.success(t("form.success.title"), {
          description: t("form.success.description"),
        });
        reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast.error(t("form.error.title"), {
        description: t("form.error.description"),
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
          {t("pageTitle")}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          {/* Left Panel - Contact Information */}
          <div className="bg-black dark:bg-white rounded-3xl p-8 md:p-12 text-white dark:text-black">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {t("heading")}
            </h2>

            {/* Chat to us */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                {t("chatToMe.title")}
              </h3>
              <p className="text-white/90 dark:text-black text-sm md:text-base mb-2">
                {t("chatToMe.description")}
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
                {t("callMe.title")}
              </h3>
              <p className="text-white/90 dark:text-black text-sm md:text-base mb-2">
                {t("callMe.hours")}
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
              <h3 className="text-lg font-semibold mb-4">{t("socialMedia")}</h3>
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
                label={t("form.fullName")}
                placeholder={t("form.fullNamePlaceholder")}
                required
                {...register("fullName")}
                error={errors.fullName?.message}
              />

              {/* Company Name */}
              <Input
                label={t("form.companyName")}
                placeholder={t("form.companyNamePlaceholder")}
                {...register("companyName")}
                error={errors.companyName?.message}
              />

              {/* Email */}
              <Input
                label={t("form.email")}
                type="email"
                placeholder={t("form.emailPlaceholder")}
                required
                {...register("email")}
                error={errors.email?.message}
              />

              {/* Phone Number */}
              <PhoneInput
                label={t("form.phoneNumber")}
                value={phoneValue}
                onChange={(value) => setValue("phone", value || "")}
                error={errors.phone?.message}
                required
              />

              {/* Message */}
              <Textarea
                label={t("form.message")}
                placeholder={t("form.messagePlaceholder")}
                rows={5}
                required
                {...register("message")}
                error={errors.message?.message}
              />

              <Checkbox
                label={
                  <span>{t("form.consent")}</span>
                }
                {...register("contactConsent")}
                error={errors.contactConsent?.message}
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black dark:bg-white hover:dark:bg-white/80 hover:bg-black/80 cursor-pointer disabled:bg-[#cccccc] text-white dark:text-black font-semibold py-3.5 px-8 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("form.submitting") : t("form.submit")}
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
