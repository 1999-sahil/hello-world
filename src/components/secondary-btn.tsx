import { Link } from "react-router-dom";

interface PrimaryButtonProps {
  text: string;
  href: string;
}

function SecondaryButton({ text, href }: PrimaryButtonProps) {
    const ButtonContent = (
        <section className="grid place-content-center">
          <button className="group flex h-6.5 cursor-pointer items-center gap-2 rounded-full bg-black dark:bg-zinc-50 text-white dark:text-black font-mono text-xs md:text-sm pr-4 pl-3 transition-all duration-300 ease-in-out hover:bg-black hover:pl-1 hover:text-white active:bg-neutral-700">
            <span className="rounded-full bg-white dark:bg-black p-[2px] text-sm transition-colors duration-300 group-hover:bg-white">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black dark:group-hover:text-white group-active:-rotate-45"
                height="0.8em"
                width="0.8em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
            <span>{text}</span>
          </button>
        </section>
      );
    
  return (
    <Link to={href}>{ButtonContent}</Link>
  )
}

export default SecondaryButton