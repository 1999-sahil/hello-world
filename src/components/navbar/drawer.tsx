import { navLinks } from "@/constant/nav-links";
import { ModeToggle } from "../mode-toggle";
import SocialLinks from "./social";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { PiCopyrightThin } from "react-icons/pi";

type DrawerProps = {
    onLinkClick: () => void;
  };
  

function Drawer({ onLinkClick }: DrawerProps) {
  return (
    <div className="p-5 flex flex-col gap-10 h-full border-r border-solid border-neutral-600 dark:border-neutral-700">
      <div className="flex items-center justify-between">
        <SocialLinks />
        <ModeToggle />
      </div>
      <div className="space-y-4">
        {navLinks.map((link, index) => (
          <Link
            to={link.href}
            key={index}
            onClick={onLinkClick}
            className="flex items-center justify-between w-full text-[#111] dark:text-neutral-200 hover:text-[#70d627db] dark:hover:text-[#B0FC38]"
          >
            <span className="flex items-center gap-2 font-outfit font-medium lowercase">
              //{"  "}
              {link.title}
            </span>
            <GoArrowRight className="text-xs" />
          </Link>
        ))}
      </div>
      <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
        <span className="flex items-center gap-1">
          <PiCopyrightThin /> 2025. Made with passion by Sahil Ahmed.
        </span>
        <h2>All Rights Reserved.</h2>
      </div>
    </div>
  );
}

export default Drawer;
