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
      className={`w-[100%] h-[100%] group hover:scale-110  duration-200 aspect-[2/2] relative cursor-pointer  bg-gray-800/35  overflow-hidden text-[5em] text-[${color}] rounded-xl flex items-center justify-center`}
    >
      <div className="group-hover:blur-3xl duration-200 text-[4rem] flex flex-col justify-center">
        {<Logo color={color}></Logo>}
      </div>
      <div className="text-white text-center font-bold  text-[1rem] hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:block">
        {title}
      </div>
    </div>
  );
};

export default SkillCard;
