import React from "react";
import cn from "./cn";

export const EventOverviewCard: React.FC<{
  index: number;
  text: string;
  className?: string;
}> = ({ index, text, className }) => {
  return (
    <div
      className={cn(
        "relative rounded-4xl p-6 border border-[#20152F] bg-[#0F0A14]/60 text-[#AEA2FF] font-medium overflow-hidden",
        className,
      )}
    >
      <span className="absolute -bottom-2 right-2 text-[#401A59]/50 text-8xl">
        {index.toString().padStart(2, "0")}
      </span>
      <span className="relative">{text}</span>
    </div>
  );
};
