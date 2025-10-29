"use client";

import { useState } from "react";
import { PdfModal } from "@/components";
import {
  FiCode,
  FiHeart,
  FiZap,
  FiTarget,
  FiDownload,
  FiEye,
} from "react-icons/fi";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="w-full py-20 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
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
                        SOFTWARE ENGINEER
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Hi, I'm{" "}
                      <span className="bg-[#ad7cf6] dark:bg-[#cbacf9] bg-clip-text text-transparent">
                        Mustafa
                      </span>
                    </h2>

                    <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-6">
                      {/* A passionate full-stack developer crafting digital
                      experiences that merge creativity with functionality. I
                      turn complex problems into elegant solutions. */}
                      I’m a Software Engineer specializing in modern web
                      development. I focus on building user-centered
                      applications that combine clean design with solid
                      engineering to solve real-world problems.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                          <FiCode className="text-purple-600 text-lg" />
                        </div>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Clean Code Advocate
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <FiZap className="text-blue-600 text-lg" />
                        </div>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          Performance Focused
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                          <FiHeart className="text-cyan-600 text-lg" />
                        </div>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          User-Centric Design
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
                      View CV
                    </button>
                    <a
                      href="/Mustafa_Hasanain_CV.pdf"
                      download="Mustafa_Hasanain_CV.pdf"
                      className="flex-1 px-6 py-3 bg-white dark:bg-neutral-900 text-purple-600 dark:text-purple-400 border-2 border-[#ad7cf6] dark:border-[#cbacf9] rounded-xl hover:bg-purple-50 dark:hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                    >
                      <FiDownload className="text-xl" />
                      Download
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
                  {/* bg-gradient-to-br from-purple-600 to-pink-500 */}
                  <div className="text-5xl md:text-6xl font-bold bg-[#ad7cf6] dark:bg-[#cbacf9] bg-clip-text text-transparent mb-3">
                    5+
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Years</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    of experience building amazing products
                  </p>
                </div>
              </div>

              {/* Projects Card */}
              <div className="group cursor-pointer">
                <div className="h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-6 md:p-8 border border-neutral-300 dark:border-neutral-700 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-[1.05]">
                  <div className="text-5xl md:text-6xl font-bold bg-[#ad7cf6] dark:bg-[#cbacf9] bg-clip-text text-transparent mb-3">
                    20+
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Projects
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    delivered from concept to production
                  </p>
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="group cursor-pointer">
                <div className="h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-6 md:p-8 border border-neutral-300 dark:border-neutral-700 hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-[1.05]">
                  <div className="text-5xl md:text-6xl font-bold bg-[#ad7cf6] dark:bg-[#cbacf9] bg-clip-text text-transparent mb-3">
                    15+
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">
                    Technologies
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    mastered and actively using
                  </p>
                </div>
              </div>

              {/* Passion Card */}
              <div className="group cursor-pointer">
                <div className="h-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl p-6 md:p-8 border border-neutral-300 dark:border-neutral-700 hover:border-pink-500/50 transition-all duration-300 group-hover:scale-[1.05]">
                  <div className="text-5xl md:text-6xl font-bold bg-[#ad7cf6] dark:bg-[#cbacf9] bg-clip-text text-transparent mb-3">
                    100%
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Passion</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    dedicated to quality & excellence
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
                        What Drives Me
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                        I believe great software isn't just about writing
                        code—it's about solving real problems, creating
                        delightful experiences, and making technology work for
                        people. Every line I write is an opportunity to make
                        someone's life easier or their work more enjoyable.
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
