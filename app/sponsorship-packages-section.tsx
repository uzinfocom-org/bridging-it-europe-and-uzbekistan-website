import React from "react";
import Image from "next/image";
import { Heading } from "./heading";
import { SponsorshipCard } from "./sponsorship-card";

export const SponsorshipPackagesSection: React.FC = () => {
  return (
    <section className="relative container mx-auto z-10 mb-16 px-6">
      <Heading lines text="Sponsorship Packages" className="mb-8" />
      <p className="w-2/3 mx-auto text-center text-xl font-medium text-[#AEA2FF] mb-14">
        Boost your brand visibility and meet decision-makers from Europe and
        Central Asia. Choose a package and apply online.
      </p>
      <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-5">
        <div className="relative lg:row-span-2 flex flex-col gap-2 justify-between">
          <h4 className="relative z-10 text-4xl font-bold">What we offer:</h4>
          <p className="relative z-10 font-medium text-[#AEA2FF]">
            (A detailed sponsor kit with deliverables and pricing will be sent
            upon request.)
          </p>
          <Image
            className="absolute pointer-events-none opacity-20 top-1/2 right-0 -translate-y-1/2"
            src="/sponsorship-packages-shape.png"
            alt="Glass shape"
            width={467}
            height={465}
          />
        </div>
        <SponsorshipCard
          title="General Sponsor"
          subtitle="Exclusive top-tier visibility across stage, media wall, website, and program."
          label="Apply as General Sponsor"
          link="#register"
        />
        <SponsorshipCard
          title="Official Sponsor"
          subtitle="Branding at check-in desks, badges, and attendee communications."
          label="Apply as Official Sponsor"
          link="#register"
        />
        <SponsorshipCard
          title="Representative Sponsor"
          subtitle="Co-branding across press releases, photo/video content, and social media."
          label="Apply as Representative Sponsor"
          link="#register"
        />
        <SponsorshipCard
          title="Title Sponsor"
          subtitle="Co-branding across press releases and social media."
          label="Apply as Title Sponsor"
          link="#register"
        />
      </div>
    </section>
  );
};
