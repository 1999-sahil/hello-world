import { Bell, User } from "lucide-react";
import PrimaryButton from "../primary-btn";
import HeroCarousal from "./carousal";
import { motion } from "framer-motion";
import { textVariantsBottom, textVariantsLeft } from "@/lib/motion";

export default function Banner() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      className="overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center px-2 pb-48 pt-12 md:pt-24">
        {/** title */}
        <motion.div
          variants={textVariantsLeft}
          className="flex flex-col items-center justify-center text-center whitespace-nowrap font-mono font-semibold text-2xl lg:text-4xl leading-tight text-[#111] dark:text-neutral-100"
        >
          <span className="flex items-center gap-2">
            Building{" "}
            <h2 className="text-white dark:text-black bg-[#111] dark:bg-white w-fit rounded-[5px] px-2 py-[2px]">
              modern web applications
            </h2>
          </span>
          <span>with a focus on aesthetics,</span>
          <span>functionality and accessibility.</span>
        </motion.div>

        <motion.div
          variants={textVariantsLeft}
          className="flex items-center justify-center w-full max-w-2xl p-3"
        >
          <p className="text-xs lg:text-sm text-center font-outfit text-[#333] dark:text-neutral-300">
            Hey, <strong>I am Sahil Ahmed</strong>, a versatile individual. With
            a passion for learning I am dedicated to delivering high-quality
            results and contribute meaningful contribution to dev community.
          </p>
        </motion.div>

        {/** button */}
        <motion.div
          variants={textVariantsLeft}
          className="flex items-center justify-center gap-4 my-5"
        >
          <PrimaryButton
            text="Contact me"
            href="mailto:sahilahmed466@gmail.com"
          />
        </motion.div>

        {/** image */}
        <motion.div
          variants={textVariantsBottom}
          className="absolute bottom-0 left-1/2 h-auto min-h-36 w-[calc(100vw_-_56px)] max-w-4xl -translate-x-1/2 overflow-hidden rounded-t-xl bg-zinc-900 dark:bg-zinc-800 p-0.5"
        >
          <div className="flex items-center justify-between px-2 py-1">
            <div className="flex items-center gap-0.5">
              <span className="size-2 rounded-full bg-red-400"></span>
              <span className="size-2 rounded-full bg-yellow-400"></span>
              <span className="size-2 rounded-full bg-green-400"></span>
            </div>
            <span className="rounded bg-[#B0fc38] text-black px-2 py-0.5 text-xs font-mono">
              @ sahilahmed
            </span>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div className="relative z-0 h-full w-full grid grid-cols-[100px_1fr] md:grid-cols-[150px_1fr] overflow-hidden rounded-t-lg bg-white dark:bg-zinc-100">
            {/** left */}
            <div className="h-full border-r border-zinc-300 p-2">
              <svg
                width="32"
                height="auto"
                viewBox="0 0 50 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-fit fill-zinc-950"
              >
                <path
                  d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                  stop-color="#09090B"
                ></path>
                <path
                  d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                  stop-color="#09090B"
                ></path>
              </svg>
              <div className="mt-3 space-y-1.5">
                <span className="flex items-center gap-1.5 text-xs text-indigo-600">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  <span>Messages</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-700 dark:text-neutral-600">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Tasks</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-700 dark:text-neutral-600">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  <span>Board</span>
                </span>
              </div>
            </div>
            {/** right */}
            <div className="relative z-0 p-2">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded bg-zinc-200 px-1.5 py-1 pr-8 text-xs text-zinc-600 dark:text-zinc-600">
                  Search...
                </span>
                <div className="flex items-center gap-1.5 text-xl">
                  <Bell className="text-blue-500 size-4" />
                  <User className="text-neutral-600 size-4" />
                </div>
              </div>
              <div className="h-full w-full rounded-xl border border-dashed border-zinc-500 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-200"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-white/0 dark:from-neutral-500/0 to-white dark:to-neutral-300"></div>
          </div>
        </motion.div>
      </div>

      {/** carousal */}
      <HeroCarousal />
    </motion.section>
  );
}
