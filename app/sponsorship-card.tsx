import React from "react";
import cn from "./cn";
import Button from "./button";

export const SponsorshipCard: React.FC<{
  title: string;
  subtitle: string;
  label: string;
  link: string;
  className?: string;
}> = ({ title, subtitle, label, link, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col border border-[#20152F] rounded-2xl p-5 items-start",
        className,
      )}
    >
      <h5 className="text-4xl font-bold">{title}</h5>
      <p className="font-medium text-[#AEA2FF] my-6 flex-1">{subtitle}</p>
      <Button component="a" href={link}>
        {label}
      </Button>
    </div>
  );
};
