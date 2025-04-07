import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { GrUserWorker } from "react-icons/gr";
import { useTheme } from "../theme-provider";
import { textVariantsBottom, textVariantsLeft } from "@/lib/motion";
import PrimaryButton from "../primary-btn";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const WorkTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const { theme } = useTheme(); // Ensures SSR consistency

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <motion.div
      animate="animate"
      initial="initial"
      className="w-full h-full font-sans overflow-hidden"
      ref={containerRef}
    >
      {/** title */}
      <motion.div
        variants={textVariantsLeft}
        className="px-4 py-16 max-w-3xl w-full space-y-5"
      >
        <div className="flex items-center">
          <span className="border rounded-full p-1 border-[#111] dark:border-neutral-100">
            <GrUserWorker className="dark:text-white text-[#111] text-sm" />
          </span>
          <span className="border rounded-full px-3 py-1 text-xs border-[#111] dark:border-neutral-100 dark:text-white text-[#111] font-inter">
            My Work
          </span>
        </div>
        <div className="text-3xl md:text-4xl font-mono font-semibold leading-tight whitespace-nowrap">
          <span className="flex items-center gap-1">
            My Work{" "}
            <h2 className="bg-black text-white dark:bg-white dark:text-black rounded-md px-1.5 py-[2px]">
              Experience
            </h2>
          </span>
        </div>
        <p className="text-xs md:text-sm max-w-xl font-raleway text-[#333] dark:text-neutral-300">
          I have done many <strong>Internships</strong> in{" "}
          <strong>Software Development</strong> domain. You can see the timeline
          of my work experience along with my education.
        </p>
        <div className="flex items-start justify-start mt-12">
          <PrimaryButton
            href="https://www.linkedin.com/in/sahil-ahmed-86222718a"
            text="Linkedin"
          />
        </div>
      </motion.div>

      <motion.div
        variants={textVariantsBottom}
        className="flex items-center justify-center w-full"
      >
        <img
          src={
            theme === "dark"
              ? "/assets/dark-arrow.svg"
              : "/assets/light-arrow.svg"
          }
          alt="theme-arrow"
          width={150}
          height={150}
        />
      </motion.div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};
