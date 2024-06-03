"use client";
import Intro from "@/components/widgets/Intro";
import { useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

import ExperienceCard from "@/components/card/ExperienceCard";
import { experience1, experience2, experience3 } from "@/components/Experience";
import Particles from "@/components/things/Particles";
import MySkills from "@/components/blocks/MySkills";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px 50px 0px" });

  return (
    <main
      ref={ref}
      id="scroll-container"
      className="flex min-h-screen flex-col    "
    >
      <div className="h-[100vh]">
        <div
          className={
            " min-h-screen w-full h-[100%] flex justify-center items-center  " +
            (isInView ? " fixed top-0" : "")
          }
        >
          <motion.div
            initial={{ opacity: 0, y: "-100vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bokhe-gradient-main absolute opacity-30 bottom-[-70%] right-0 m-auto z-[-3] w-8 overflow-hidden"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: "100vh" }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bokhe-gradient-main absolute opacity-90 bottom-[100%] left-0  m-auto z-[-3]"
          ></motion.div>

          <div className="absolute w-[100%] top-0 h-[100%] z-[-3] overflow-hidden">
            <Particles className={" w-[100%]"}></Particles>
          </div>
          <Intro animate={isInView}></Intro>
        </div>
      </div>

      <div className="min-h-screen bg-[#000001] relative overflow-hidden  ">
        <MySkills></MySkills>
      </div>
      <div className="min-h-screen bg-[#000001] relative overflow-hidden">
        <div className="bokhe-gradient-main absolute bottom-[-10%] left-0 z-[0] w-[100%] opacity-55"></div>
        <div className="flex gap-4 px-24 py-16 flex-col">
          <h2 className="text-white/55 text-[4rem] leading-2">
            Experience <br />
            <span className="text-[3rem] ">History</span>
          </h2>
          <ExperienceCard experience={experience1}></ExperienceCard>
          <ExperienceCard experience={experience3}></ExperienceCard>
          <ExperienceCard experience={experience2}></ExperienceCard>
        </div>
      </div>
    </main>
  );
}
