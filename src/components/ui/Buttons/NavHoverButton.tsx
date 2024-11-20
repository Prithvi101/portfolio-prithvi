import React, { MouseEventHandler } from "react";

function NavHoverButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={
        "relative overflow-hidden text-white  px-4 py-1  group-hover:text-white rounded-full text-[.65rem] transition-colors duration-300 delay-500 group"
      }
      onClick={onClick}
    >
      <span className="relative z-10 group-hover:text-black">{text}</span>
      <div
        className={
          "absolute inset-0 bg-[#ffd500] -translate-x-full group-hover:translate-x-0 group-hover:scale-150 transition-transform duration-300 rounded-full aspect-square w-[100%]"
        }
      ></div>
    </button>
  );
}

export default NavHoverButton;
