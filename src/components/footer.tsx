import Logo from "./logo";
import { GoArrowUpRight } from "react-icons/go";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

function Footer() {
  const footerLinks = [
    { title: "Projects", href: "" },
    { title: "Github", href: "" },
    { title: "Linkedin", href: "" },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.9 1"],
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
      className="w-full py-2 mt-12 md:mt-20 px-4 pb-2 md:px-0 max-w-4xl mx-auto"
    >
      <div className="space-y-12">
        <div className="flex items-center justify-center">
          <a
            href="mailto:sahilahmed466@gmail.com"
            target="_blank"
            className="relative font-poppins font-semibold text-xl w-fit z-10"
          >
            <span className="relative z-10 px-[2px] flex items-center gap-1">
              <MdMailOutline className="text-sm" />
              sahilahmed466@gmail.com
              <GoArrowUpRight />
            </span>
            <span className="absolute w-full h-[0.4rem] bg-[#B0FC38] dark:bg-purple-700 bottom-1 left-0 z-0"></span>
          </a>
        </div>

        <div className="flex items-center justify-between w-full mb-10">
          <Logo />
          <span className="flex items-center gap-3">
            {footerLinks.map((link, index) => (
              <Link
                to={link.href}
                key={index}
                className="flex items-center gap-1 hover:text-[#91c63b] dark:hover:text-[#B0FC38]"
              >
                <h2 className="text-xs font-inter font-medium">{link.title}</h2>
                <GoArrowUpRight className="text-sm" />
              </Link>
            ))}
          </span>
        </div>
        <span className="text-xs flex items-center justify-center font-mono gap-1 text-neutral-600 dark:text-neutral-400">
          Build, design and maintained by{" "}
          <h2 className="font-inter text-black dark:text-white underline">
            Sahil Ahmed
          </h2>
        </span>
      </div>
    </motion.div>
  );
}

export default Footer;
