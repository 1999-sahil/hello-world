import { Link } from "react-router-dom";

interface PrimaryButtonProps {
  text: string;
  href: string;
}

function PrimaryButton({ text, href }: PrimaryButtonProps) {
  const isEmailLink = href.startsWith("mailto:");

  const ButtonContent = (
    <section className="grid place-content-center">
      <button className="group flex h-8 cursor-pointer items-center gap-2 rounded-full bg-black dark:bg-zinc-50 text-white dark:text-black font-mono text-xs md:text-sm pr-6 pl-5 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700">
        <span className="rounded-full bg-white dark:bg-black p-[3px] text-sm transition-colors duration-300 group-hover:bg-white">
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

  if (isEmailLink || href.startsWith("http")) {
    return (
      <a
        href={href}
        className="no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {ButtonContent}
      </a>
    );
  }

  return <Link to={href}>{ButtonContent}</Link>;
}

export default PrimaryButton;

{
  /**
<section class="grid place-content-center py-24">
  <button class="group flex h-10 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700">
    <span class="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </span>
    <span>Hover this link</span>
  </button>
</section>  
*/
}

{
  /**
<div className="flex items-center gap-2 lg:gap-4 w-fit border border-[#333] dark:border-neutral-200 rounded-full pr-4 py-1.5">
      <span className="border border-[#333] dark:border-neutral-200 rounded-full p-1">
        <Icon className="size-4" />
      </span>
      <h2 className="text-sm font-mono font-medium">{text}</h2>
    </div>  
*/
}
