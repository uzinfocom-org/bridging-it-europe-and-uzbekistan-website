import React from "react";
import { Heading } from "./heading";

export const ContactsSection: React.FC = () => {
  return (
    <footer className="container mx-auto pb-16 px-6">
      <Heading lines text="Contacts" className="mb-8" />
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col gap-6">
          <div className="[&_a]:text-[#AEA2FF] rounded-4xl p-6 border border-[#20152F] bg-[#0F0A14]/60">
            <h5 className="text-2xl font-bold mb-1">Victoria Kuznetsova</h5>
            <p className="mb-2">(Europe)</p>
            <p>
              <a href="mailto:victoria.kuznetsova@uzinfocom.com">
                Email: victoria.kuznetsova@uzinfocom.com
              </a>
            </p>
            <p>
              <a href="tel:+37126733426">Phone: +371 267 33426</a>
            </p>
          </div>

          <div className="[&_a]:text-[#AEA2FF] rounded-4xl p-6 border border-[#20152F] bg-[#0F0A14]/60">
            <h5 className="text-2xl font-bold mb-1">Umid Sunnatjonov</h5>
            <p className="mb-2">(Uzbekistan)</p>
            <p>
              <a href="mailto:umidjon.sunnatjonov@uzinfocom.uz">
                Email: umidjon.sunnatjonov@uzinfocom.uz
              </a>
            </p>
            <p>
              <a href="tel:+998977093369">Phone: +998 97 709 33 69</a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1 rounded-4xl p-6 border border-[#20152F] bg-[#0F0A14]/60">
          <h5 className="text-2xl font-bold">Venue</h5>
          <p>
            Digital Art House, Skolas iela 2, Centra rajons, Rīga, LV-1010,
            Latvia
          </p>
          <iframe
            className="w-full rounded-2xl border-0 flex-1"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1327.3811169539701!2d24.113085771466466!3d56.95607638820911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecf45747fe225%3A0x59af381996b53edd!2sDigital%20Art%20House%20Exhibitions%20%26%20Night%20Club!5e0!3m2!1sen!2sge!4v1756997400625!5m2!1sen!2sge"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </footer>
  );
};
