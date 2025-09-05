import React from "react";
import Image from "next/image";
import bridgingMask from "@/public/bridging-mask.svg";
import itEuropeAndUzbekistanMask from "@/public/it-europe-and-uzbekistan-mask.svg";
import { Countdown } from "./countdown";

export const HeaderSection: React.FC = () => {
  return (
    <>
      <header className="mb-28">
        <Image
          className="absolute top-0 left-0 right-0 -translate-y-[calc(100%-160px)] mx-auto pointer-events-none"
          src="/header-line-globe.png"
          alt="Line Globe"
          width={1135}
          height={914}
        />
        <a href="https://uzinfocom.eu" target="_blank">
          <Image
            className="relative z-10 mx-auto mt-8"
            src="/uzinfocom-logo.svg"
            alt="UZINFOCOM logo"
            width={240}
            height={48}
            priority
          />
        </a>
      </header>
      <section className="relative z-10 container mx-auto flex flex-col">
        <div className="flex flex-wrap justify-center lg:justify-between mb-14 gap-6 lg:gap-0">
          <div className="flex-1 text-center lg:text-left w-full lg:w-56 xl:ml-16">
            <div className="border border-[#20152F] rounded-4xl p-6 lg:w-56 bg-black/60">
              <h2 className="font-bold text-3xl mb-4">Digital Art House</h2>
              <h3 className="text-[#AEA2FF] text-lg">
                Skolas iela 2, Centra rajons, Rīga, LV-1010
              </h3>
            </div>
          </div>
          <div className="w-full lg:hidden" />
          <div className="flex-1 w-[420px] scale-50 lg:scale-100">
            <div
              className="relative mb-8 mx-auto w-[416px] h-[52px] mask-no-repeat pointer-events-none"
              style={{ maskImage: `url(${bridgingMask.src})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-[#977DFF] to-[#E97AFF]" />
              <Image
                className="absolute -translate-x-1/4 -translate-y-1/2 mix-blend-overlay"
                src="/bridging-background.png"
                alt="BRIDGING"
                width={416}
                height={52}
                priority
              />
              <Image
                className="absolute right-0 translate-x-1/2 -translate-y-1/2 mix-blend-overlay"
                src="/bridging-background.png"
                alt="BRIDGING"
                width={416}
                height={52}
                priority
              />
            </div>
            <div className="relative mx-auto w-[420px] h-[119px]">
              <div
                className="w-[420px] h-[119px] mask-no-repeat pointer-events-none"
                style={{ maskImage: `url(${itEuropeAndUzbekistanMask.src})` }}
              >
                <div className="absolute h-[66px] top-0 left-0 right-0 bg-gradient-to-r from-white via-[#977DFF] to-[#E97AFF]" />
                <div className="absolute h-[54px] bottom-0 left-0 right-0 bg-gradient-to-r from-[#6163FF] via-[#977DFF] to-[#E97AFF]" />
              </div>
              <span className="absolute top-[30px] left-[180px] text-white text-stroke text-[46px] italic">
                &
              </span>
            </div>
          </div>
          <div className="w-full lg:hidden" />
          <div className="flex-1 text-center lg:text-right xl:mr-16">
            <div className="border border-[#20152F] rounded-4xl p-6 w-full lg:w-40 ml-auto bg-black/60">
              <h2 className="text-8xl font-medium">8</h2>
              <h3 className="text-[#AEA2FF] text-2xl font-bold">
                October
                <br />
                2025
              </h3>
            </div>
          </div>
        </div>
        <a
          href="#register"
          className="mx-auto inline-flex text-[#AEA2FF] text-lg font-bold bg-linear-to-b from-[#E163FA] p-px rounded-4xl via-[#8D53EA] to-[#5158E4] mb-16"
        >
          <span className="bg-black py-3 px-12 rounded-4xl">Register now</span>
        </a>
      </section>
      <div className="relative mt-8">
        <div className="absolute -translate-y-1/2">
          <Image
            className="mx-auto mix-blend-screen scale-150 pointer-events-none"
            src="/infinity-background.png"
            alt="Infinity backgound"
            width={1832}
            height={2160}
          />
        </div>
      </div>
      <section className="relative z-10 container mx-auto flex flex-col">
        <Countdown target={new Date("2025-10-08T10:00:00")} />
      </section>
    </>
  );
};
