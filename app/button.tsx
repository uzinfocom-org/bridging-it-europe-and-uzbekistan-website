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

type CommonProps = {
  variant?: "default" | "secondary";
};

export default function Button<
  T extends "a" | "button",
  TT extends T extends "a"
  ? AnchorProps & { component: "a" }
  : ButtonProps & { component: "button" },
>(props: TT & CommonProps) {
  const className = cn(
    "inline-flex rounded-3xl py-2 px-3",
    "disabled:opacity-50 text-center",
    {
      "cursor-pointer": props.component == "button",
      "bg-gradient-to-b from-[#AF69ED] to-[#3A166D]":
        !props.variant || props.variant == "default",
      "border border-[#AF69ED]": props.variant == "secondary",
    },
    props.className,
  );

  return props.component == "a" ? (
    <a {...props} className={className} />
  ) : (
    <button {...props} className={className} />
  );
}
