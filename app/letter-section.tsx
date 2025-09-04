import React from "react";
import Image from "next/image";

export const LetterSection: React.FC = () => {
  return (
    <section className="relative container mx-auto mb-20 min-h-[80vh]">
      <Image
        className="absolute inset-0 pointer-events-none opacity-60 rounded-[80px] w-full h-full object-cover"
        src="/letter-background.jpg"
        alt="Event"
        width={1300}
        height={816}
      />
      <div className="absolute w-full h-96 top-0 left-0 bg-gradient-to-b from-black" />
      <div className="relative p-6 lg:p-32 text-center z-10">
        <p className="text-xl font-bold text-[#AEA2FF]">
          We warmly invite you to become part of this journey. Join us in Riga,
          connect with visionary leaders, and explore the opportunities that
          emerge when Europe and Uzbekistan come together.
          <br />
          <br />
          Thank you for your interest and support. Together, we will shape the
          digital future.
        </p>
      </div>
    </section>
  );
};
