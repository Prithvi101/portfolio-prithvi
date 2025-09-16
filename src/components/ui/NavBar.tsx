"use client";
import React, { useRef, useState } from "react";
import NavHoverButton from "./Buttons/NavHoverButton";

function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const navRect = navRef.current?.getBoundingClientRect();
    const rect = target.getBoundingClientRect();

    if (navRect) {
      setPillStyle({
        left: rect.left - navRect.left,
        width: rect.width,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setPillStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={navRef}
      className="fixed bg-black/50 backdrop-blur-md bottom-4 py-1 px-1 rounded-full text-[0.8rem] font-light left-[50%] translate-x-[-50%] z-[1000] border-white/25 border-[0.0025rem] "
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex justify-evenly">
        {/* Yellow pill */}
        <div
          className="absolute top-0 bottom-0 bg-[#eab308] rounded-full transition-all duration-300"
          style={{
            left: pillStyle.left,
            width: pillStyle.width - 10,
            opacity: pillStyle.opacity,
          }}
        ></div>

        <NavHoverButton
          text="Skills"
          onClick={() => handleScroll("skills")}
          onMouseEnter={handleMouseEnter}
        />
        <NavHoverButton
          text="Experience"
          onClick={() => handleScroll("experience")}
          onMouseEnter={handleMouseEnter}
        />
        <NavHoverButton
          text="Resume"
          onClick={() => handleScroll("resume")}
          onMouseEnter={handleMouseEnter}
        />
        <NavHoverButton
          text="Contact"
          onClick={() => handleScroll("contact")}
          onMouseEnter={handleMouseEnter}
        />
      </div>
    </div>
  );
}

export default NavBar;
