import React from "react";
import Image from "next/image";
import { Heading } from "./heading";
import agendaTexts from "./agenda.json";
import { AgendaTime as AgendaItem } from "./agenda-item";

export const AgendaSection: React.FC = () => {
  const breakIndex = agendaTexts.findIndex((text) => text.type == "break")
  const texts1 = agendaTexts.slice(0, breakIndex)
  const texts2 = agendaTexts.slice(breakIndex + 1)

  return (
    <section
      className="relative container mx-auto mt-36 mb-20 z-10 px-8 lg:px-0"
      id="agenda"
    >
      <Heading lines text="Agenda" className="mb-16" />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-8">
          {texts1.map((details, index) => (
            <AgendaItem key={index} {...details} />
          ))}
        </div>
        <Image
          className="pointer-events-none"
          src="/agenda-shape.png"
          alt="Glass shape"
          width={485}
          height={479}
        />
        <div className="flex flex-col gap-8">
          {texts2.map((details, index) => (
            <AgendaItem key={index} {...details} />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="mt-4 xs:mt-0 xs:absolute left-0 bottom-0 inline-flex border border-[#371E51] text-[#AEA2FF] p-6 rounded-4xl">
          (Agenda times may be adjusted; final program will be shared with
          confirmed attendees.)
        </div>
      </div>
    </section>
  );
};
