import React from "react";
import cn from "./cn";

export const Heading: React.FC<{
  alignLeft?: boolean;
  lines?: boolean;
  text: string;
  className?: string;
}> = ({ alignLeft = false, lines = false, text, className }) => {
  const line = (flip: boolean) => (
    <div
      className={cn(
        "flex-1",
        lines
          ? cn(
            "hidden md:block h-px from-[##9E92C4] via-[#035ACA] to-[#61D4DA]",
            {
              "bg-linear-to-r": flip,
              "bg-linear-to-l": !flip,
            },
          )
          : "",
      )}
    />
  );
  return (
    <div
      className={cn("relative gap-8 items-center", {
        flex: !alignLeft,
        "inline-flex": alignLeft,
      })}
    >
      {!alignLeft && line(false)}
      <h2 className={cn("text-5xl font-bold", className)}>{text}</h2>
      {!alignLeft && line(true)}
      <div className="absolute h-4 w-32 rounded-full bg-black blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
};
