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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
          {techStack.map((category) => (
            <TechStackCards key={category.id}>
              <div
                className="flex h-48 w-40 sm:h-56 sm:w-48 md:h-72 md:w-64 lg:h-80 lg:w-72 xl:h-96 xl:w-80 cursor-pointer flex-col items-stretch rounded-2xl border-0 bg-linear-to-br from-[#1F2121] to-[#2A2D2D] p-4 md:p-8"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex flex-1 flex-col items-center justify-center text-center gap-3 md:gap-6">
                  <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center">
                    <Image
                      src={category.logo}
                      alt={`${category.name} logo`}
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm md:text-xl lg:text-2xl font-bold text-white">
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
