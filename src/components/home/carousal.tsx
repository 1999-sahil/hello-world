import { textVariantsLeft, textVariantsRight } from "@/lib/motion";
import Marquee from "./marquee";
import { motion } from "framer-motion";

function HeroCarousal() {
  return (
    <motion.div initial="initial" animate="animate" className="relative -mt-2 -rotate-1 scale-[1.01] border-y-2 border-dashed border-zinc-900 dark:border-zinc-50 bg-white dark:bg-[#111] my-3">
      <motion.div variants={textVariantsLeft} className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900 dark:border-zinc-100">
        <div
          className="flex gap-12 px-2"
          style={{ transform: "translateX(-0.768%) translateZ(0px)" }}
        >
          <Marquee from={0} to={"-100%"} />
        </div>
      </motion.div>

      <motion.div variants={textVariantsRight} className="relative z-0 flex overflow-hidden ">
        <div
          className="flex gap-12 px-2"
          style={{ transform: "translateX(-0.768%) translateZ(0px)" }}
        >
          <Marquee from={"-100%"} to={0} />
        </div>
      </motion.div>

      {/** mask */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-white/0 dark:from-[#1a1a1a]"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-white/0 dark:from-[#1a1a1a]"></div>
    </motion.div>
  );
}

export default HeroCarousal;
