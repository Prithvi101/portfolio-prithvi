import React, { MouseEventHandler } from "react";

function NavHoverButton({
  text,
  onClick,
  onMouseEnter,
}: {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="relative z-10 sm:px-4 px-2 py-1 text-white hover:text-black rounded-full sm:text-[.65rem] text-[1rem] transition-colors duration-300"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {text}
    </button>
  );
}

export default NavHoverButton;
