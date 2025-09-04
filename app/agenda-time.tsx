import React from "react";

export const AgendaTime: React.FC<{
  time: string;
  title: string;
  subtitle?: string;
}> = ({ time, title, subtitle }) => {
  return (
    <div className="flex">
      <span className="w-24 text-4xl font-bold">{time}</span>
      <div className="flex flex-1 flex-col gap-1">
        <span className="font-medium text-[#AEA2FF]">{title}</span>
        <div className="h-px w-4/5 my-1 bg-linear-to-r from-black via-[#035ACA] to-[#61D4DA]" />
        <span className="text-[#AEA2FF]">{subtitle}</span>
      </div>
    </div>
  );
};
