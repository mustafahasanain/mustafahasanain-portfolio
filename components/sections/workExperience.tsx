import { Button } from "@/components";
import { workExperience } from "@/data/experience";

const WorkExperience = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="heading mb-12">Work Experience</h1>
        <div className="w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 h-full"
            >
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center p-4 sm:p-5 md:p-6 lg:p-8 gap-3 sm:gap-4 h-full">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 shrink-0"
                />
                <div className="sm:ms-4 lg:ms-0 xl:ms-5 flex-1">
                  <h1 className="text-start text-lg sm:text-xl md:text-2xl font-bold text">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-300 mt-2 sm:mt-3 font-semibold text-sm sm:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
