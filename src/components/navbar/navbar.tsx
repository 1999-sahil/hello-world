import { useState } from "react";
import Logo from "../logo";
import Drawer from "./drawer";
import { CgMenuRight } from "react-icons/cg";
import NavigationLinks from "./links";
import SocialLinks from "./social";
import { ModeToggle } from "../mode-toggle";

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed h-[100px] top-0 left-1/2 z-30 transform -translate-x-1/2 w-full max-w-5xl px-2 py-3">
      <div className="border dark:border-neutral-600/30 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl px-4 py-3 flex items-center justify-between">
        <Logo />
        <NavigationLinks />
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <SocialLinks />
            <div className="w-[2px] h-5 rounded-md bg-neutral-300 dark:bg-neutral-700"></div>
            <ModeToggle />
          </div>

          <div className="flex items-center gap-3">
            {/** mobile nav */}
            <div className="md:hidden relative">
              <button onClick={toggleDrawer} className="cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 p-1 rounded-md">
                <CgMenuRight className="text-lg text-black dark:text-white" />
              </button>

              {/* Drawer */}
              <div
                className={`fixed top-0 left-0 min-h-screen h-full w-80 z-50 bg-neutral-100 dark:bg-neutral-900 transform transition-transform duration-300 ease-in-out ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <Drawer onLinkClick={toggleDrawer} />
              </div>

              {/* Overlay */}
              {isOpen && (
                <div
                  onClick={toggleDrawer}
                  className="fixed min-h-screen inset-0 bg-black/70 dark:bg-neutral-800/50 z-40"
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomNavbar;