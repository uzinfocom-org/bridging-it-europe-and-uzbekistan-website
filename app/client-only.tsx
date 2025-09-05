"use client";
import { GoogleAnalytics } from "nextjs-google-analytics";

export const ClientOnly: React.FC = () => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
    </>
  );
};
