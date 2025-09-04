import React from "react";
import { Heading } from "./heading";
import { EventOverviewCard } from "./event-overview-card";
import eventOverviewTexts from "./event-overview.json";
import cn from "./cn";

export const EventOverviewSection: React.FC = () => {
  return (
    <section className="container mx-auto relative z-10 mt-48">
      <Heading text="Event Overview" className="mb-8" />
      <div className="grid md:grid-cols-12 md:grid-rows-2 gap-8">
        {eventOverviewTexts.map((text, index) => (
          <EventOverviewCard
            key={index}
            index={index + 1}
            text={text}
            className={cn({
              "md:col-span-3": index == 0,
              "md:col-span-5": index == 1 || index == 3 || index == 4,
              "md:col-span-4": index == 2,
              "md:col-start-2": index == 3,
            })}
          />
        ))}
      </div>
    </section>
  );
};
