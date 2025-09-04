import React from "react";
import Image from "next/image";

export const CeoQuoteSection: React.FC = () => {
  return (
    <section className="relative container mx-auto z-10 mb-12 py-16 flex flex-col items-center gap-8">
      <div className="flex gap-2">
        <div className="relative w-2">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full w-[474px] h-[432px]">
            <Image
              className="pointer-events-none"
              src="/ceo-quote-shape.png"
              alt="Glass shape"
              width={474}
              height={432}
            />
          </div>
        </div>
        <div className="text-3xl lg:text-5xl text-center">
          “Technology is about building bridges, not walls. True innovation
          comes when people from different worlds connect, share knowledge, and
          create something greater together.”
        </div>
        <div className="relative w-2">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full w-[474px] h-[432px]">
            <Image
              className="pointer-events-none"
              src="/ceo-quote-shape.png"
              alt="Glass shape"
              width={474}
              height={432}
            />
          </div>
        </div>
      </div>
      <div className="inline-flex mx-auto items-center gap-4 px-12">
        <div className="inline-flex shrink-0 rounded-full p-px bg-linear-to-r from-[#9E92C4] via-[#035ACA] to-[#61D4DA]">
          <Image
            className="pointer-events-none rounded-full border-4 border-black"
            src="/ceo.jpg"
            alt="Emil Gimranov"
            width={70}
            height={70}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold">Emil Gimranov</span>
          <span className="font-medium text-[#AEA2FF]">
            CEO of UZINFOCOM, Visionary in Digital Transformation
          </span>
        </div>
      </div>
    </section>
  );
};
