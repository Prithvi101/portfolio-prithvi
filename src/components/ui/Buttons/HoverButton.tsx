import React, { MouseEventHandler } from "react";

function HoverButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={
        "relative overflow-hidden bg-[#ffd500] p-2 px-4 text-black border border-black/60 group-hover:text-white rounded-full text-[.65rem] transition-colors duration-300 delay-500 group"
      }
      onClick={onClick}
    >
      <span className="relative z-10 group-hover:text-white">{text}</span>
      <div
        className={
          "absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 group-hover:scale-150 transition-transform duration-300 rounded-full aspect-square w-[100%]"
        }
      ></div>
    </button>
  );
}

export default HoverButton;
