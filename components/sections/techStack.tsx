import Image from "next/image";
import { techStack } from "@/data/skills";
import TechStackCards from "../ui/TechStackCards";

const TechStack = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-4xl font-bold">Tech Stack</h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to build modern applications
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8 place-items-center max-w-[1400px] mx-auto">
          {techStack.map((category) => (
            <TechStackCards key={category.id}>
              <div
                className="flex h-48 w-40 sm:h-56 sm:w-48 md:h-64 md:w-56 lg:h-72 lg:w-64 xl:h-80 xl:w-72 2xl:h-96 2xl:w-80 cursor-pointer flex-col items-stretch rounded-2xl border-0 bg-linear-to-br from-[#1F2121] to-[#2A2D2D] p-4 sm:p-6 md:p-6 lg:p-8"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex flex-1 flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center">
                    <Image
                      src={category.logo}
                      alt={`${category.name} logo`}
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            </TechStackCards>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
