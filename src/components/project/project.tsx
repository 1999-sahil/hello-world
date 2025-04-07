import { GoArrowDown, GoArrowRight } from "react-icons/go";
import PrimaryButton from "../primary-btn";
import { BouncyCardsFeatures } from "./carousal";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

function Project() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.2 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="w-full flex flex-col items-start gap-5 p-3 md:p-5"
    >
      {/** title */}
      <div className="flex items-center">
        <span className="border border-[#111] dark:border-neutral-100 rounded-full p-1">
          <GoArrowDown className="dark:text-white text-black text-sm" />
        </span>
        <span className="border border-[#111] dark:border-neutral-100 rounded-full px-3 py-1 text-xs dark:text-white text-black font-inter">
          My Projects
        </span>
      </div>

      {/** heading */}
      <div className="space-y-3 w-full">
        <span className="flex items-center gap-2 font-poppins font-medium text-black dark:text-white text-2xl md:text-4xl">
          My Latest{" "}
          <h2 className="text-white dark:text-black bg-[#111] dark:bg-neutral-50 rounded-md p-[2px]">
            Projects
          </h2>
        </span>
        <p className="font-openSans text-xs md:text-sm w-full md:max-w-[50%] text-[#333] dark:text-neutral-300">
          Here you will find some of the personal projects which showcasing my
          knowledge related to Front-end development, Full-stack development and
          UI responsive designs.
        </p>
      </div>

      {/** projects carousal */}
      <div className="w-full mb-12">
        <BouncyCardsFeatures />
      </div>

      <div className="flex items-center justify-center w-full md:my-8">
        <PrimaryButton
          href="/projects"
          Icon={GoArrowRight}
          text="See all projects"
        />
      </div>
    </motion.div>
  );
}

export default Project;
