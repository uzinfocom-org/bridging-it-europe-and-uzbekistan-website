import React from "react";
import cn from "./cn";

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Button<
  T extends "a" | "button",
  TT extends T extends "a"
  ? AnchorProps & { component: "a" }
  : ButtonProps & { component: "button" },
>(props: TT) {
  const className = cn(
    "inline-flex bg-gradient-to-b from-[#AF69ED] to-[#3A166D] rounded-3xl py-2 px-3",
    props.className,
  );

  return props.component == "a" ? (
    <a {...props} className={className} />
  ) : (
    <button {...props} className={className} />
  );
}
