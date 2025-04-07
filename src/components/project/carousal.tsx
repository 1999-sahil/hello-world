import { ReactNode } from "react";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export const BouncyCardsFeatures = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.3 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mx-auto max-w-4xl py-8 md:py-12 text-slate-800"
    >
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>STRIFE</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-white dark:bg-black p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img src="/assets/strife.png" alt="strife" className="w-full object-cover rounded-xl p-2 border h-full" />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Notecraft</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-white dark:bg-black p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img src="/assets/notecraft.png" alt="note-craft" className="w-full object-cover rounded-xl p-2 border h-full" />
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>CodeFusion</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-white dark:bg-black p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img src="/assets/codefusion.png" alt="code-fusion" className="w-full object-cover rounded-xl p-2 border h-full" />
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Diagram Docs</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-white dark:bg-black transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <img src="/assets/diadocs.png" alt="diagram-docs" className="w-full object-cover rounded-xl p-2 border h-full" />
          </div>
        </BounceCard>
      </div>
    </motion.section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-xl bg-neutral-200/50 dark:bg-neutral-900/50 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-2xl md:text-3xl font-semibold font-mono text-[#111] dark:text-zinc-100">{children}</h3>
  );
};
