import React from "react";
import { agenda, Speaker, Text } from "./agenda";

const RenderText: React.FC<{ text: Text }> = ({ text }) => {
  switch (text.type) {
    case "text":
      return <span className="text-xl font-bold text-[#D1CAFF]">{text.text}</span>
    case "presentation":
      return <><span className="text-xl text-[#D1CAFF]">{text.prefix}</span><span className="text-xl text-white font-bold">{text.name}</span></>
  }
}

const RenderSpeaker: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  switch (speaker.type) {
    case "person":
      return <div className="flex gap-2">
        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.6762 13.5002C23.6762 14.8299 23.4143 16.1465 22.9055 17.375C22.3967 18.6034 21.6508 19.7196 20.7106 20.6598C19.7704 21.6001 18.6542 22.3459 17.4258 22.8547C16.1973 23.3636 14.8807 23.6255 13.551 23.6255C12.2213 23.6255 10.9047 23.3636 9.67625 22.8547C8.4478 22.3459 7.33161 21.6001 6.39139 20.6598C5.45118 19.7196 4.70536 18.6034 4.19652 17.375C3.68768 16.1465 3.42578 14.8299 3.42578 13.5002C3.42578 10.8148 4.49254 8.23946 6.39139 6.34061C8.29024 4.44176 10.8656 3.375 13.551 3.375C16.2364 3.375 18.8118 4.44176 20.7106 6.34061C22.6095 8.23946 23.6762 10.8148 23.6762 13.5002Z" stroke="#FF57EE" stroke-width="1.68754" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19.1762 21.9378C18.8195 14.9773 8.28254 14.9773 7.9259 21.9378M16.3636 10.4063C16.3636 11.1523 16.0673 11.8676 15.5398 12.3951C15.0124 12.9226 14.297 13.2189 13.551 13.2189C12.8051 13.2189 12.0897 12.9226 11.5622 12.3951C11.0348 11.8676 10.7385 11.1523 10.7385 10.4063C10.7385 9.66037 11.0348 8.94499 11.5622 8.41753C12.0897 7.89007 12.8051 7.59375 13.551 7.59375C14.297 7.59375 15.0124 7.89007 15.5398 8.41753C16.0673 8.94499 16.3636 9.66037 16.3636 10.4063Z" stroke="#FF57EE" stroke-width="1.68754" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <div className="flex flex-col">
          <span className="text-[#F4C1F5] text-lg font-semibold">
            {speaker.name}
          </span>
          <span className="text-[#F475F6]">
            {speaker.title}
          </span>
        </div>
      </div>
    case "other":
      return <div className="text-[#F4C1F5] text-lg font-semibold">{speaker.name}</div>
  }
}

export const AgendaSection: React.FC = () => {
  return (
    <section
      className="relative container mx-auto mt-36 mb-20 z-10 px-8 lg:px-0"
      id="agenda"
    >
      <h1 className="text-4xl lg:text-8xl font-bold mb-16">Event Program</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="hidden md:block md:col-span-2 text-[#FEBCFF]/50 bg-[#FEBCFF]/5 px-2.5 py-3.5">
          Time
        </div>
        <div className="hidden md:block md:col-span-4 text-[#FEBCFF]/50 bg-[#FEBCFF]/5 px-2.5 py-3.5">
          Event
        </div>
        <div className="hidden md:block md:col-span-6 text-[#FEBCFF]/50 bg-[#FEBCFF]/5 px-2.5 py-3.5">
          Speaker / Details
        </div>
        <div className="hidden md:block md:col-span-12 h-5" />
        {agenda.map((agenda, index) => <React.Fragment key={index}>
          {index != 0 && <div className="bg-[image:var(--line-gradient)] md:col-span-12 h-px my-6 md:my-2" />}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-[#F6EEFF]">
              {agenda.start}
            </div>
            <div className="text-2xl font-medium text-[#79739D]">
              {agenda.end}
            </div>
          </div>
          <div className="md:col-span-4">
            <RenderText text={agenda.text} />
          </div>
          <div className="md:col-span-6 flex gap-6 flex-wrap">
            {agenda.speakers.map((speaker, index) => (
              <RenderSpeaker key={index} speaker={speaker} />
            ))}
          </div>
        </React.Fragment>)}
      </div>
    </section>
  );
};
