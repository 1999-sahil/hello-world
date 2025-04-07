import Blog from "@/components/blog/blog";
import PrimaryButton from "@/components/primary-btn";
import { textVariantsLeft } from "@/lib/motion";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

function Blogs() {
    return(
        <motion.div
              animate="animate"
              initial="initial"
              className="w-full h-full max-w-4xl mx-auto px-4 md:px-0 space-y-12 md:space-y-20 py-16"
            >
              <motion.div variants={textVariantsLeft} className="space-y-5">
                <div className="flex items-center">
                  <span className="border rounded-full p-1 border-[#111] dark:border-neutral-100">
                    <FaBookOpen className="dark:text-white text-[#111] size-4" />
                  </span>
                  <span className="border rounded-full px-3 py-1 text-xs border-[#111] dark:border-neutral-100 dark:text-white text-[#111] font-inter">
                    My Blogs
                  </span>
                </div>
                <div className="text-3xl md:text-4xl font-mono font-semibold leading-tight whitespace-nowrap">
                  <span className="flex flex-col items-start gap-2">
                    Handpicked insights from
                    <h2 className="bg-black text-white dark:bg-white dark:text-black rounded-md px-1.5 py-[2px]">
                      the pensieve
                    </h2>
                  </span>
                </div>
                <p className="text-xs md:text-sm max-w-xl font-raleway text-[#333] dark:text-neutral-300">
                I create technical content for the community and for my own learning.
          I publish content on well-known platforms like <strong>Medium</strong>
          , <strong>DEV</strong> and on my own blog application{" "}
          <strong>CodeFusion</strong>.
                </p>
                <div className="flex items-start justify-start gap-3 md:gap-4">
                  <PrimaryButton text="CodeFusion" href="" Icon={Link} />
                  <PrimaryButton text="Medium" href="" Icon={Link} />
                  <PrimaryButton text="DEV" href="" Icon={Link} />
                </div>
              </motion.div>
        
              {/** grids */}
              <Blog />
            </motion.div>
    )
}

export default Blogs;