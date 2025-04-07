import NotesGridCard from "@/components/notes/card";
import PrimaryButton from "@/components/primary-btn";
import { notes } from "@/constant/notes";
import { LucideNotebookText } from "lucide-react";
import { motion } from "framer-motion";
import { textVariantsLeft } from "@/lib/motion";

function Notes() {
  return (
    <motion.div
      animate="animate"
      initial="initial"
      className="w-full h-full max-w-4xl mx-auto px-4 md:px-0 space-y-12 md:space-y-20 py-16"
    >
      <motion.div variants={textVariantsLeft} className="space-y-5">
        <div className="flex items-center">
          <span className="border rounded-full p-1 border-[#111] dark:border-neutral-100">
            <LucideNotebookText className="dark:text-white text-[#111] size-4" />
          </span>
          <span className="border rounded-full px-3 py-1 text-xs border-[#111] dark:border-neutral-100 dark:text-white text-[#111] font-inter">
            My Notes
          </span>
        </div>
        <div className="text-3xl md:text-4xl font-mono font-semibold leading-tight whitespace-nowrap">
          <span className="flex items-center gap-2">
            Your
            <h2 className="bg-black text-white dark:bg-white dark:text-black rounded-md px-1.5 py-[2px]">
              Knowledge
            </h2>
            Inventory
          </span>
        </div>
        <p className="text-xs md:text-sm max-w-xl font-raleway text-[#333] dark:text-neutral-300">
          Collect badges of knowledge as you explore different topics and
          levels. These notes are your cheat codes for becoming a coding master.
        </p>
        <div className="flex items-start justify-start">
          <PrimaryButton text="Notion" href="" />
        </div>
      </motion.div>

      {/** grids */}
      <NotesGridCard notes={notes} />
    </motion.div>
  );
}

export default Notes;
