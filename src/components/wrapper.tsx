import { ReactNode } from "react";
import { cn } from "../lib/utils";

function Wrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="w-full min-h-screen grainy pt-20">
      <div
        className={cn(
          "w-full mx-auto h-full overflow-x-hidden",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
