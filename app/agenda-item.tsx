import React from "react";
import agendaTexts from "./agenda.json";

export const AgendaTime: React.FC<(typeof agendaTexts)[number]> = ({ time, time2, title, type }) => type == "heading" ? (
  <h3 className="text-4xl font-bold text-[#AEA2FF]">{title}</h3>
) : (
  <div className="flex">
    <div className="flex flex-col">
      <span className="w-24 text-4xl font-bold">{time}</span>
      {time2 && (<span className="w-24 text-4xl font-bold">{time2}</span>)}
    </div>
    <div className="flex flex-1 flex-col gap-1 relative">
      <span className="absolute bottom-3 font-medium text-[#AEA2FF]">{title}</span>
      <span className="font-medium">&nbsp;</span>
      <div className="h-px w-4/5 my-1 bg-linear-to-r from-[#9E92C4] via-[#035ACA] to-[#61D4DA]" />
    </div>
  </div>
);

