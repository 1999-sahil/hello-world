import { Note } from "@/lib/types";
import { cn } from "@/lib/utils";
import SecondaryButton from "../secondary-btn";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

type NotesListProps = {
  notes: Note[];
};

function NotesGridCard({ notes }: NotesListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.3 1"],
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5"
    >
      {notes.map((note, index) => {
        const getDifficultyColor = (level: boolean) => {
          switch (level) {
            case true:
              return "bg-green-300 dark:bg-green-900";
            case false:
              return "bg-[#b0fc38]/50";
            default:
              return "bg-gray-400";
          }
        };

        return (
          <div
            key={index}
            className="border cursor-cell hover:border-neutral-400 dark:hover:border-neutral-700 rounded-xl p-5 space-y-5 bg-white dark:bg-black"
          >
            <div className="flex items-center justify-between">
              <h2
                className={`text-xs font-mono  px-1 py-[2px] rounded ${getDifficultyColor(
                  note.premium
                )}`}
              >
                {note.premium ? "Premium" : "Free"}
              </h2>
              <h2
                className={`text-xs font-mono px-1 rounded py-[2px] bg-neutral-200 dark:bg-neutral-900`}
              >
                {note.difficulty}
              </h2>
            </div>
            {/** dot bg */}
            <div className="relative flex h-[6rem] w-full items-center justify-center bg-white dark:bg-black">
              <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:10px_10px]",
                  "[background-image:radial-gradient(#c4c2c2_1px,transparent_1px)]",
                  "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
                )}
              />
              {/* Radial gradient for the container to give a faded look */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
              <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                <img
                  src={note.image}
                  alt="image"
                  className="w-12 h-12 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-black rounded-xl p-[2px]"
                />
              </p>
            </div>
            {/** title */}
            <div className="flex flex-col items-center justify-center gap-3">
              <span className="font-poppins font-semibold text-center">{note.title}</span>
              <p className="text-xs font-openSans font-normal">
                {note.description}
              </p>
            </div>
            <div className="flex items-end justify-end">
              <SecondaryButton text="Visit" href={note.href} />
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default NotesGridCard;
