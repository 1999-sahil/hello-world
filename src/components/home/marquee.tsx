import { heroCarousal } from "@/constant/hero-carousal";
import { motion } from "framer-motion";

interface MarqueeProps {
  from: string | number;
  to: string | number;
}

const Marquee = ({ from, to }: MarqueeProps) => {
  return (
    <div className="flex MyGradient">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-8 px-2"
        style={{ transform: "translateX(-0.768%) translateZ(0px)" }}
      >
        {heroCarousal.map((data, index) => (
          <span
            key={index}
            className="flex items-center justify-center gap-4 px-4 py-2 md:py-4"
          >
            <img src={data.img} alt={data.text} className="w-6 h-6 md:w-8 md:h-8" />
            <span className="whitespace-nowrap text-base font-medium uppercase md:text-xl font-poppins">
              {data.text}
            </span>
          </span>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-8 px-2"
        style={{ transform: "translateX(-0.768%) translateZ(0px)" }}
      >
        {heroCarousal.map((data, index) => (
          <span
            key={index}
            className="flex items-center justify-center gap-4 px-4 py-2 md:py-4"
          >
            <img src={data.img} alt={data.text} className="w-6 h-6 md:w-8 md:h-8" />
            <span className="whitespace-nowrap text-base font-medium uppercase md:text-xl font-poppins">
              {data.text}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
