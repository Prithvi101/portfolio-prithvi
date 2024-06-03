"use client";

import React from "react";
import ListCard from "./ListCard";
import { v4 } from "uuid";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

const ExperienceCard = (experience: any) => {
  const generateFloatingAnimation = () => {
    const y = [0, Math.random() * 20 - 10, 0]; // Random y-axis values between -10 and 10
    const duration = Math.random() * 2 + 1; // Random duration between 1 and 3 seconds
    return {
      y,
      transition: {
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      },
    };
  };
  return (
    <div className="flex  border-b-2 p-8   border-yellow-200/20 w-[100%] h-[100%]  cursor-pointer justify-center items-center">
      {/* Right */}
      <div className="flex  w-[100%] flex-col cursor-pointer">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[2rem]">{experience.experience.JobTitle}</h3>
            <p className="text-[1.5rem]">{experience.experience.Company}</p>
          </div>
          <div className="text-end flex flex-col justify-end ">
            <p>{experience.experience.Duration}</p>
            <div className="flex  mt-2 justify-end gap-4 ">
              <p>{experience.experience.Location}</p>
              <p
                className={
                  "text-black  rounded-full px-2 text-sm items-center text-center flex " +
                  (experience.experience.Mode == "Remote"
                    ? "bg-blue-500"
                    : "bg-white")
                }
              >
                {experience.experience.Mode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
