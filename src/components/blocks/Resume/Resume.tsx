import React from "react";
import Background from "../Skills/Background";
import PageTitle from "@/components/ui/PageTitle";
import ResumeTemplate from "./ResumeCard";
import HoverButton from "@/components/ui/Buttons/HoverButton";

function Resume() {
  return (
    <div
      id="resume"
      className="h-[100dvh] overflow-hidden relative flex flex-col items-center justify-center"
    >
      <Background></Background>
      <a
        href="https://docs.google.com/document/d/10BjYDpHAO3zXUtTs5M-eFAMJSdwbupRjQ3d_t5h_0Ek/edit?usp=sharing"
        rel="noopener noreferrer"
        target="_blank"
      >
        <ResumeTemplate></ResumeTemplate>
      </a>
      <div className="mt-10">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://docs.google.com/document/d/10BjYDpHAO3zXUtTs5M-eFAMJSdwbupRjQ3d_t5h_0Ek/edit?usp=sharing"
        >
          <HoverButton text="View Resume"></HoverButton>
        </a>
      </div>
      {/* Social */}
      <div className="flex text-[.75rem] gap-4 mt-4 text-white/60">
        <a
          href="https://www.instagram.com/prithvi__101/"
          target="_blank"
          aria-label="linkedin"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 cursor-pointer hover:scale-125 transition-all duration-500"
        >
          <p className="cursor-pointer">LinkedIn</p>
        </a>
        <a
          href="https://github.com/Prithvi101"
          target="_blank"
          aria-label="github"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 cursor-pointer hover:scale-125 transition-all duration-500"
        >
          <p className="cursor-pointer">Github</p>
        </a>
      </div>
    </div>
  );
}

export default Resume;
