import React from "react";
import Image from "next/image";
import { AgendaSection } from "./agenda-section";
import { CeoQuoteSection } from "./ceo-quote-section";
import { ContactsSection } from "./contacts-section";
import { EventOverviewSection } from "./event-overview-section";
import { HeaderSection } from "./header-section";
import { LetterSection } from "./letter-section";
import { RegistrationSection } from "./registration-section";
import { SponsorshipPackagesSection } from "./sponsorship-packages-section";
import { ClientOnly } from "./client-only";

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <ClientOnly />
      <HeaderSection />
      <EventOverviewSection />
      <AgendaSection />
      <div className="relative">
        <Image
          className="absolute -translate-y-1/2 w-1/3 pointer-events-none"
          src="/grid.svg"
          alt="Grid"
          width={724}
          height={1239}
        />
      </div>
      <CeoQuoteSection />
      <div className="relative">
        <Image
          className="absolute top-0 right-0 -translate-y-1/2 rotate-180 w-1/3 pointer-events-none"
          src="/grid.svg"
          alt="Grid"
          width={724}
          height={1239}
        />
      </div>
      <SponsorshipPackagesSection />
      <RegistrationSection />
      <LetterSection />
      <ContactsSection />
    </div>
  );
};

export default HomePage;
