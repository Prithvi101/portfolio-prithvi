"use client";
import FooterCard from "@/components/ui/Cards/FooterCard";
import PageTitle from "@/components/ui/PageTitle";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        id="contact"
        className="h-[60vh] px-8 flex   flex-col sm:flex-row justify-evenly sm:justify-between"
      >
        <div className="mt-10">
          <PageTitle line1="Let's" line2="Connect"></PageTitle>
          <div className="flex justify-evenly mt-10">
            <a
              href="https://github.com/Prithvi101"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/prithvi__101/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://www.linkedin.com/in/pruthvik101/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 cursor-pointer hover:scale-125 transition-all duration-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="flex flex-col gap-8">
            <FooterCard
              onClick={() => handleScroll("skills")}
              title={"Skills"}
              subTitle={
                "Check out the things I'm good at, from building websites to Mobile apps"
              }
            ></FooterCard>
            <FooterCard
              onClick={() => handleScroll("skills")}
              title={"Projects"}
              subTitle={
                "Check out the things I'm good at, from building websites to Mobile apps"
              }
            ></FooterCard>
          </div>
          <div className="flex flex-col gap-8">
            <FooterCard
              title={"Experience"}
              onClick={() => handleScroll("experience")}
              subTitle={
                "Check out the things I'm good at, from building websites to Mobile apps"
              }
            ></FooterCard>{" "}
            <FooterCard
              title={"Resume"}
              onClick={() => handleScroll("resume")}
              subTitle={
                "Check out the things I'm good at, from building websites to Mobile apps"
              }
            ></FooterCard>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center pb-20 text-white/45 text-[.75rem]">
        <p>© 2024 Prithvi Thakkar</p>
        <p className="text-[.65rem] mt-2">
          Powered by Next.js, Framer motion and GitHub.
        </p>
      </div>
    </>
  );
}

export default Footer;
