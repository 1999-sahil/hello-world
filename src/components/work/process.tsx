import { GoArrowDown, GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";


function WorkProcess() {
  const ref = useRef<HTMLDivElement>(null);
      const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"],
      });
      const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
      const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div ref={ref}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress,
    }} className="bg-[#111] dark:bg-zinc-50 p-3 md:p-5 rounded-xl space-y-6">
      {/** title */}
      <div className="flex items-center">
        <span className="border border-white dark:border-black rounded-full p-1">
          <GoArrowDown className="text-white dark:text-black text-sm" />
        </span>
        <span className="border border-white dark:border-black rounded-full px-3 py-1 text-xs text-white dark:text-black font-inter">
          Work Process
        </span>
      </div>

      {/** heading */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        {/** left */}
        <div className="w-full md:max-w-[40%] flex flex-col text-white dark:text-black font-medium font-poppins text-2xl md:text-4xl">
          <span>My Work Process</span>
        </div>

        {/** right */}
        <div className="flex flex-col w-full md:max-w-[40%] text-neutral-100 dark:text-[#111]">
          <span className="border-b border-neutral-800 dark:border-neutral-300 pb-2 text-xs font-openSans">
            My commitment to collaboration, innovation, and quality ensures that
            every project is delivered on time and exceeds expectations.
          </span>
          <span className="flex items-center justify-end gap-2 my-2">
            <GoArrowLeft className="border rounded-full p-[2px] text-xl md:text-2xl" />
            <GoArrowRight className="border rounded-full p-[2px] text-xl md:text-2xl" />
          </span>
        </div>
      </div>

      {/** cards */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-neutral-800/50 dark:bg-[#111] space-y-3 rounded-xl p-3 md:p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full text-white bg-[#C54BBC] px-2 py-[2px] text-xs font-inter">
              Discovery
            </span>
            <span className="flex items-center gap-1 text-neutral-200">
              <GoArrowRight className="text-sm" />
              <h2 className="text-xs font-mukta underline">Read more</h2>
            </span>
          </div>
          <p className="text-xs font-openSans text-neutral-100 dark:text-neutral-300">
            Uncover insights and define goals through research and
            collaboration.
          </p>
        </div>

        <div className="rotate-3 bg-[#B0FC38] space-y-3 rounded-xl p-3 md:p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full text-white bg-[#111] px-2 py-[2px] text-xs font-inter">
              Strategy
            </span>
            <span className="flex items-center gap-1 text-neutral-800">
              <GoArrowRight className="text-sm" />
              <h2 className="text-xs font-mukta underline">Read more</h2>
            </span>
          </div>
          <p className="text-xs font-raleway text-[#111]">
            Create a clear roadmap to achieve your objectives effectively.
          </p>
        </div>
        <div className="bg-neutral-800/50 dark:bg-[#111] space-y-3 rounded-xl p-3 md:p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full text-white bg-[#4169E1] px-2 py-[2px] text-xs font-inter">
              Design
            </span>
            <span className="flex items-center gap-1 text-neutral-200">
              <GoArrowRight className="text-sm" />
              <h2 className="text-xs font-mukta underline">Read more</h2>
            </span>
          </div>
          <p className="text-xs font-raleway text-neutral-100 dark:text-neutral-300">
            Craft intuitive and visually stunning solutions tailored to your
            needs.
          </p>
        </div>
        <div className="bg-neutral-800/50 dark:bg-[#111] space-y-3 rounded-xl p-3 md:p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full text-white bg-[#FF9913] px-2 py-[2px] text-xs font-inter">
              Build
            </span>
            <span className="flex items-center gap-1 text-neutral-200">
              <GoArrowRight className="text-sm" />
              <h2 className="text-xs font-mukta underline">Read more</h2>
            </span>
          </div>
          <p className="text-xs font-raleway text-neutral-100 dark:text-neutral-300">
            Develop robust and scalable solutions to bring your vision to life.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default WorkProcess;