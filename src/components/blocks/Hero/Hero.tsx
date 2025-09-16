"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../../util/TextReveal/TextReveal";
import Background from "./Background";
import Title from "./Title";
import Preloader from "../Preloader/Preloader";
import Image from "next/image";

function Hero() {
  const conatinerRef = useRef<HTMLDivElement>(null);
  const innerContainer = useRef<HTMLDivElement>(null);
  const fakeContainer = useRef<HTMLDivElement>(null);
  const [preload, setPreload] = useState<Boolean>(false);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (typeof innerContainer?.current !== "undefined") {
      // Scale Content
      gsap.to(innerContainer?.current, {
        scale: 0.8,
        scrollTrigger: {
          trigger: fakeContainer.current,
          scrub: true,
          start: "top top",
          end: "bottom top",
        },
      });
    }
    if (typeof conatinerRef?.current != "undefined") {
      // Container Animation
      gsap.to(conatinerRef.current, {
        scrollTrigger: {
          trigger: conatinerRef.current,
          pin: true,
          toggleActions: "restart pause resume reverse",
          start: "top top",
          end: "bottom top",
          pinSpacing: false,
        },
      });
    }
  });
  return (
    <>
      {!preload && (
        <Preloader handleOnComplete={() => setPreload(true)}></Preloader>
      )}
      <section className=" w-full  sm:px-auto overflow-hidden">
        <div ref={conatinerRef} className="w-[100vw] ">
          {/* container */}
          <div className="   h-[20%] justify-end  flex items-center px-8  text-[0.4rem] text-white font-light ">
            <div className="flex gap-2 border-[1px] border-white/50 px-2 p-[0.25rem] rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-700"></span>
              </span>
              <p className="link">OPEN TO WORK</p>
            </div>
          </div>
          <div
            className="flex flex-col justify-start items-center  w-full"
            ref={innerContainer}
          >
            <div className="min-h-[100dvh] relative flex flex-col px-8 sm:px-auto  sm:text-left  text-center justify-start  items-center  ">
              <div className="">
                <Title></Title>
              </div>
              <div className=" self-center">
                <TextReveal>
                  <h2 className="sub-tittle link ">
                    {
                      "A self-taught developer with an interest in Computer Science."
                    }
                  </h2>
                </TextReveal>
              </div>
              <div className="mt-10 flex flex-col justify-center items-center text-[#fff]">
                <p className=" ::span:bg-yellow font-light text-white/90">
                  Currently specializing in{" "}
                  <span className="pill1 link">Frontend</span> and
                  <span className="pill2 link">Mobile</span>
                </p>
                <a href="http://www.trylevel2.com" target="_blank">
                  <p className=" flex items-center gap-2 font-light text-white/90">
                    Front-End Developer at{" "}
                    <span className="flex items-center gap-1 hover:text-blue-500">
                      <Image
                        className="rounded-sm"
                        src={"/logos/level_2.jpeg"}
                        width={25}
                        height={25}
                        alt="level-2 logo"
                      ></Image>
                      Level2
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* background */}
          <div className="absolute w-[100vw] overflow-hidden  h-[100vh] z-[-1] bg-bgMain top-0 right-0">
            <Background></Background>
          </div>
        </div>
        {/* fake conatiner */}
        <div className="fakeContainer" ref={fakeContainer}></div>
      </section>
    </>
  );
}

export default Hero;
