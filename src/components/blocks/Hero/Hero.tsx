"use client";
import React, { useRef, useState } from "react";
import Partcles from "../../ui/Partcles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TextReveal from "../../util/TextReveal/TextReveal";
import ImageReveal from "../../util/ImageReveal/ImageReveal";
import Background from "./Background";
import Title from "./Title";
import Preloader from "../Preloader/Preloader";

function Hero() {
  const conatinerRef = useRef<HTMLDivElement>();
  const fakeContainer = useRef<HTMLDivElement>();
  const { contextSafe } = useGSAP({ scope: conatinerRef });
  const [preload, setPreload] = useState<Boolean>(false);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  });
  return (
    <>
      {!preload && (
        <Preloader handleOnComplete={() => setPreload(true)}></Preloader>
      )}
      <section className=" max-w-6xl  sm:px-auto">
        {/* container */}
        <div
          ref={conatinerRef}
          className="flex flex-col justify-center items-center "
        >
          <div className="min-h-[100dvh] relative flex flex-col  sm:text-left  text-center justify-center  items-center  ">
            <div className="">
              <Title></Title>
            </div>
            <div className=" self-center">
              <TextReveal>
                <h4 className="sub-tittle ">
                  {
                    "A self-taught developer with an interest in Computer Science."
                  }
                </h4>
              </TextReveal>
            </div>
            <div className="mt-10 flex flex-col justify-center items-center">
              <p className=" ::span:bg-yellow">
                Currently specializing in{" "}
                <span className="pill1">Frontend</span> and
                <span className="pill2">Mobile</span>
              </p>
              <p className="">SDE-I at bexcard.co.uk</p>
            </div>
          </div>
        </div>
        {/* background */}
        <div className="absolute w-[100vw] overflow-hidden  h-[100vh] z-[-1] bg-bgMain top-0 right-0">
          <Background></Background>
        </div>

        {/* fake conatiner */}
        <div ref={fakeContainer}></div>
      </section>
    </>
  );
}

export default Hero;
