"use client";

import { useState } from "react";
import { PdfModal } from "@/components";
import { useTranslations } from "next-intl";
import {
  FiCode,
  FiHeart,
  FiZap,
  FiTarget,
  FiDownload,
  FiEye,
} from "react-icons/fi";

const About = () => {
  const t = useTranslations("about");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="w-full py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {t("title")}
        </h1>
        <div className="max-w-7xl mx-auto mt-12">
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
            {/* Large Profile Card - Takes up left side */}
            <div className="lg:col-span-5 row-span-2 group">
              {/* bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 */}
              <div className="h-full bg-[#ad7cf6] dark:bg-[#cbacf9] rounded-3xl p-1 hover:scale-[1.02] transition-all duration-500">
                <div className="h-full bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full mb-6">
                      <span className="text-sm font-semibold bg-[#ad7cf6] dark:bg-[#cbacf9] bg-clip-text text-transparent">
                        {t("badge")}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      {t("greeting")}
                    </h2>

                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
                      {t("description1")}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                          <FiCode className="text-purple-600 text-lg" />
                        </div>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          {t("features.cleanCode")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <FiZap className="text-blue-600 text-lg" />
                        </div>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          {t("features.performance")}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                          <FiHeart className="text-cyan-600 text-lg" />
                        </div>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          {t("features.userCentric")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex-1 px-6 py-3 bg-[#ad7cf6] dark:bg-[#cbacf9] text-white dark:text-[#0a0a0a] rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                    >
                      <FiEye className="text-xl" />
                      {t("cv.view")}
                    </button>
                    <a
                      href="/Mustafa_Hasanain_CV.pdf"
                      download="Mustafa_Hasanain_CV.pdf"
                      className="flex-1 px-6 py-3 bg-white dark:bg-neutral-900 text-purple-600 dark:text-purple-400 border-2 border-[#ad7cf6] dark:border-[#cbacf9] rounded-xl hover:bg-purple-50 dark:hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                    >
                      <FiDownload className="text-xl" />
                      {t("cv.download")}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards - Top Right */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
              {/* Experience Card */}
              <div className="group cursor-pointer">
                <div className="h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-6 md:p-8 border border-neutral-300 dark:border-neutral-700 hover:border-purple-500/50 transition-all duration-300 group-hover:scale-[1.05]">
                  <div className="text-5xl md:text-6xl font-bold bg-[#ad7cf6] dark:bg-[#cbacf9] bg-clip-text text-transparent mb-3">
                    {t("stats.experience.value")}
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t("stats.experience.label")}
                  </p>
                </div>
              </div>

              {/* Projects Card */}
              <div className="group cursor-pointer">
                <div className="h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-6 md:p-8 border border-neutral-300 dark:border-neutral-700 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-[1.05]">
                  <div className="text-5xl md:text-6xl font-bold bg-[#ad7cf6] dark:bg-[#cbacf9] bg-clip-text text-transparent mb-3">
                    {t("stats.projects.value")}
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t("stats.projects.label")}
                  </p>
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="group cursor-pointer">
                <div className="h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-6 md:p-8 border border-neutral-300 dark:border-neutral-700 hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-[1.05]">
                  <div className="text-5xl md:text-6xl font-bold bg-[#ad7cf6] dark:bg-[#cbacf9] bg-clip-text text-transparent mb-3">
                    {t("stats.technologies.value")}
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t("stats.technologies.label")}
                  </p>
                </div>
              </div>

              {/* Passion Card */}
              <div className="group cursor-pointer">
                <div className="h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-6 md:p-8 border border-neutral-300 dark:border-neutral-700 hover:border-pink-500/50 transition-all duration-300 group-hover:scale-[1.05]">
                  <div className="text-5xl md:text-6xl font-bold bg-[#ad7cf6] dark:bg-[#cbacf9] bg-clip-text text-transparent mb-3">
                    {t("stats.passion.value")}
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {t("stats.passion.label")}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card - Bottom spanning full width */}
            <div className="lg:col-span-7 group">
              <div className="h-full bg-[#ad7cf6] dark:bg-[#cbacf9] rounded-3xl p-1 hover:scale-[1.02] transition-all duration-500">
                <div className="h-full bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {t("mission.title")}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                        {t("mission.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      <PdfModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pdfUrl="/Mustafa_Hasanain_CV.pdf"
      />
    </section>
  );
};

export default About;
