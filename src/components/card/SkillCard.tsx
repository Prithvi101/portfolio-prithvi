import React from "react";
import { IconType } from "react-icons";

const SkillCard = ({
  Logo,
  title,
  color,
}: {
  Logo: IconType;
  title: string;
  color: string;
}) => {
  return (
    <div
      className={`w-[100%] h-[100%] flex  flex-col justify-center items-center   duration-200 aspect-[2/2] relative cursor-pointer  bg-gray-800/35  overflow-hidden text-[5em] text-[${color}] rounded-xl flex items-center justify-center`}
    >
      <div className=" duration-200 text-[4rem] flex flex-col justify-center">
        {<Logo color={color}></Logo>}
      </div>
      <div className="text-white text-center font-bold  flex justify-center items-center mt-2 text-[1rem] ">
        {title}
      </div>
    </div>
  );
};

export default SkillCard;
