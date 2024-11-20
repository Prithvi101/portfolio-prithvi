import Image from "next/image";
import React from "react";

function ResumeCard() {
  return (
    <div className="relative group cursor-pointer ">
      <div className="bg-white w-44 h-60 rounded-lg p-4 transition-transform duration-300 leading-4 -rotate-6 group-hover:scale-110">
        <h1 className="text-pink-700 text-[.8rem] font-black">
          Prithvi Thakkar
        </h1>
        <h2 className="text-black text-[.7rem] font-black ">
          Frontend Developer
        </h2>
        <p className="text-[.5rem] text-black/65 leading-3 mt-2 ">
          I am Pruthvik, a frontend developer with over 2 year of professional
          experience. Successfully building user-friendly websites with ReactJS
          & NextJS. I pay attention to small details, enjoy technical problems,
          and work well in teams. I like learning new technologies and always
          aim to improve my skills.
        </p>
        <p className="text-[.6rem] underline text-slate-500/60 font-black leading-3 mt-2">
          pruthvik41@hotmail.com
        </p>
        <p className="text-[.6rem]  text-slate-500/60 font-black leading-3 mt-1">
          Aurangabad, IN
        </p>
      </div>
      <Image
        src={"/code-snippet.svg"}
        width={980}
        height={600}
        alt="bokhe"
        className="bg-slate-800 absolute top-0 z-[-1] transition-transform duration-300 left-[30%] rotate-12 p-4 w-44 h-60 group-hover:scale-110 group-hover:rotate-[25deg] rounded-lg "
      ></Image>
    </div>
  );
}

export default ResumeCard;
