import React from "react";

function ExperienceCard({
  name,
  role,
  duration,
  mode,
  location,
}: {
  name: string;
  role: string;
  duration: string;
  mode: string;
  location: string;
}) {
  return (
    <>
      <div className="flex w-full  justify-between cursor-pointer flex-col sm:flex-row">
        <div className="text-white/90 text-2xl sm:text-base">
          <h1>{role}</h1>
          <p className="text-white/45 ">{name}</p>
        </div>
        <div className="flex flex-col sm:text-[.75rem]  text-white/45  sm:w-[20%]">
          <p>{duration}</p>
          <p>{location}</p>
          <div>
            <p className="sm:text-[.5rem] text-sm  text-center float-end  bg-white/45 rounded-full px-2 text-black">
              {mode}
            </p>
          </div>
        </div>
      </div>
      <hr className=" border-white/25  border-[0.025rem]" />
    </>
  );
}

export default ExperienceCard;
