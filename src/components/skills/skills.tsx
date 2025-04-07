import { GoArrowDown, GoArrowLeft, GoArrowRight } from "react-icons/go";
import Card from "./card";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.6 1"],
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
      className="bg-[#111] dark:bg-zinc-50 rounded-xl p-3 md:p-5 space-y-5"
    >
      {/** title */}
      <div className="flex items-center">
        <span className="border border-white dark:border-black rounded-full p-1">
          <GoArrowDown className="text-white dark:text-black text-sm" />
        </span>
        <span className="border border-white dark:border-black rounded-full px-3 py-1 text-xs text-white dark:text-black font-inter">
          Why Choose me
        </span>
      </div>

      {/** heading */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        {/** left */}
        <div className="w-full md:max-w-[40%] flex flex-col text-white dark:text-black font-medium font-poppins text-2xl md:text-4xl">
          <span>My Entensive</span>
          <span>List of Skills</span>
        </div>

        {/** right */}
        <div className="flex flex-col w-full md:max-w-[40%] text-neutral-100 dark:text-[#111]">
          <span className="border-b border-neutral-800 dark:border-neutral-600/50 pb-2 text-xs font-openSans">
            My technical skills which consist practices of development, Database
            Management, Responsive Design, Architectures, Web Technologies.
          </span>
          <span className="flex items-center justify-end gap-2 my-2">
            <GoArrowLeft className="border rounded-full p-[2px] text-xl md:text-2xl" />
            <GoArrowRight className="border rounded-full p-[2px] text-xl md:text-2xl" />
          </span>
        </div>
      </div>

      {/** cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
        <Card
          src="/assets/html-css.svg"
          title={"HTML & CSS"}
          description="Proficient in building well-structured, semantic HTML and styling with CSS to create visually appealing and user-friendly interfaces."
        />
        <div className="md:rotate-6">
          <Card
            src="/assets/javascript.svg"
            title={"Javascript"}
            description="Skilled in writing efficient and interactive JavaScript code to enhance user experience and add dynamic functionality to web applications."
          />
        </div>
        <Card
          src="/assets/react.svg"
          title={"React"}
          description="Experienced in developing modern, component-based UIs using React.js, with a focus on reusable components and state management."
        />
        <Card
          src="/assets/optimize.svg"
          title={"Optimization"}
          description="Adept at optimizing web performance through code minification, lazy loading, and efficient resource management for faster load times."
        />
        <Card
          src="/assets/clean-code.svg"
          title={"Clean Code"}
          description="Committed to writing clean, maintainable, and well-documented code to ensure scalability and ease of collaboration."
        />
        <Card
          src="/assets/responsive.svg"
          title={"Responsive Design"}
          description="Expertise in creating responsive designs that ensure seamless user experiences across all devices and screen sizes."
        />
      </div>
    </motion.div>
  );
}

export default Skills;
