import { BlurTitle, Grid } from "@/components";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 w-full h-full">
        <Grid />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 w-full max-w-6xl px-4 text-center">
          <p className="inline-block text-sm md:text-base tracking-[0.3em] uppercase mb-8 text-gray-800 dark:text-gray-300 bg-white dark:bg-[#0a0a0a] px-3 py-1 rounded">
            CODE. CREATE. INNOVATE.
          </p>

          <BlurTitle />

          <p className="inline-block text-lg md:text-xl mt-8 text-gray-800 dark:text-gray-200 bg-white dark:bg-[#0a0a0a] px-3 py-1 rounded">
            I'm Mustafa, a Software Engineer specialized in Web Development.
          </p>

          <button className="mt-10 px-8 py-3 border-2 bg-white dark:bg-[#0a0a0a] border-black/30 dark:border-white/30 rounded-md text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2 mx-auto">
            <a href="/projects">See my work</a>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
