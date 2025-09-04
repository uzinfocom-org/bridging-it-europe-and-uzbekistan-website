"use client";

import React from "react";

export const Countdown: React.FC<{ target: Date }> = ({ target }) => {
  const [now, setNow] = React.useState(new Date());
  const diff = Math.round((target.getTime() - now.getTime()) / 1000);
  const [days, hours, minutes, seconds] = ((diff: number) => {
    if (diff < 1) return [0, 0, 0, 0];

    return [
      Math.floor(diff / 3600 / 24),
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60),
      Math.floor(diff % 60),
    ];
  })(diff).map((n) => n.toString().padStart(2, "0"));

  React.useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <p className="mx-auto text-4xl md:text-6xl text-white font-medium bg-black/40 px-3 py-1 rounded-2xl">
      {[days, hours, minutes, seconds].map((n, i) => (
        <React.Fragment key={i}>
          {i != 0 ? <>&nbsp;:&nbsp;</> : ""}
          {n}
        </React.Fragment>
      ))}
    </p>
  );
};
