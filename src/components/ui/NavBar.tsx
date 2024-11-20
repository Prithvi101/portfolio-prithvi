"use client";
import React from "react";
import NavHoverButton from "./Buttons/NavHoverButton";

function NavBar() {
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed bg-black/50 bottom-4 py-1 px-1 rounded-full text-[0.8rem] font-light left-[50%] translate-x-[-50%] z-[1000]  border-white/25 border-[0.0025rem] ">
      <div className="flex justify-evenly">
        <NavHoverButton
          text="Skills"
          onClick={() => handleScroll("skills")}
        ></NavHoverButton>
        <NavHoverButton
          text="Experience"
          onClick={() => handleScroll("experience")}
        ></NavHoverButton>
        <NavHoverButton
          text="Resume"
          onClick={() => handleScroll("resume")}
        ></NavHoverButton>
        <NavHoverButton
          text="Contact"
          onClick={() => handleScroll("contact")}
        ></NavHoverButton>
      </div>
    </div>
  );
}

export default NavBar;
