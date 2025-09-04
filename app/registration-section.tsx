"use client";

import React from "react";
import Image from "next/image";
import { Heading } from "./heading";
import Button from "./button";
import cn from "./cn";

const types = [
  { value: "attendee", label: "Attendee" },
  { value: "speaker", label: "Speaker" },
  { value: "general-sponsor", label: "General Sponsor" },
  { value: "official-sponsor", label: "Official Sponsor" },
  { value: "representative-sponsor", label: "Representative Sponsor" },
  { value: "title-sponsor", label: "Title Sponsor" },
];

export const RegistrationSection: React.FC = () => {
  const [isPending, startTransition] = React.useTransition();
  const [successful, setSuccessful] = React.useState(false);

  const submitAction = async () => {
    startTransition(async () => { });
  };
  return (
    <section
      id="register"
      className="container mx-auto mb-24 p-20 border border-[#20152F] rounded-4xl lg:grid lg:grid-cols-2 gap-6"
    >
      <div>
        <Heading alignLeft text="Registration" className="mb-8" />
        <p className="text-[#AEA2FF] mb-10">
          Secure your seat — places are limited.
        </p>
        <h3 className="text-4xl font-medium mb-5">Attendee Information</h3>
        <form
          action={submitAction}
          className={cn(
            "[&_input,&_select]:border",
            "[&_input,&_select]:border-[#A588B5]/50",
            "[&_input,&_select]:py-3",
            "[&_input,&_select]:px-4",
            "[&_input,&_select]:rounded-4xl",
          )}
        >
          <div className="relative flex flex-col gap-3">
            <input type="text" maxLength={256} placeholder="Full Name" />
            <input
              type="text"
              maxLength={256}
              placeholder="Company / Position"
            />
            <input type="text" maxLength={256} placeholder="Email / Phone" />
            <input type="text" maxLength={256} placeholder="Country" />
            <select>
              {types.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {successful && (
              <div className="absolute inset-0 bg-black flex flex-col gap-4 items-center justify-center">
                Successfully sent. Thank you!
                <Button component="button">Try again</Button>
              </div>
            )}
          </div>
          <div className="flex gap-3 mt-10">
            <Button component="button" type="submit">
              Register Now
            </Button>
            <Button component="a">Download Agenda (PDF)</Button>
            <Button component="a">Request Sponsor Kit</Button>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex items-center justify-end">
        <Image
          className="pointer-events-none"
          src="/registration-shape.png"
          alt="Glass shape"
          width={660}
          height={606}
        />
      </div>
    </section>
  );
};
