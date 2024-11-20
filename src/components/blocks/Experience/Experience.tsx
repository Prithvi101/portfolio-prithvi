import React from "react";
import Background from "../Skills/Background";
import { Experiences } from "@/database/Experience";
import ExperienceCard from "./ExperienceCard";
import PageTitle from "@/components/ui/PageTitle";
const Experience = () => {
  return (
    <div
      id="experience"
      className="h-[100vh]   relative overflow-hidden px-8 pt-10"
    >
      <Background></Background>
      <PageTitle line1="Experience" line2="History"></PageTitle>
      <div className="flex flex-col gap-4 mt-10">
        {Experiences.map((item) => (
          <ExperienceCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
