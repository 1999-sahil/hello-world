interface CardProps {
  src: string;
  title: string;
  description: string;
}

function Card({ src, title, description }: CardProps) {
  return (
    <div className="bg-neutral-800/50 dark:bg-[#111] rounded-xl p-3 space-y-4">
      <div className="flex flex-row md:flex-col gap-2 items-center md:items-start">
        <span className="w-fit">
          <img
            src={src}
            alt={title}
            className="w-4 h-4 md:w-6 md:h-6"
          />
        </span>
        <span className="text-sm md:text-base font-poppins font-medium text-neutral-100 dark:text-neutral-200">
          {title}
        </span>
      </div>
      <p className="text-xs font-openSans text-neutral-300 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}

export default Card;
