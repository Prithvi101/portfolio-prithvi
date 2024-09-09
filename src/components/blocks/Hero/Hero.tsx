"use client";
import React, { useRef } from "react";
import Partcles from "../../ui/Partcles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TextReveal from "../../util/TextReveal/TextReveal";
import ImageReveal from "../../util/ImageReveal/ImageReveal";
import Background from "./Background";
import Title from "./Title";

function Hero() {
  const conatinerRef = useRef<HTMLDivElement>();
  const fakeContainer = useRef<HTMLDivElement>();
  const { contextSafe } = useGSAP({ scope: conatinerRef });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  });
  return (
    <section className=" max-w-6xl px-8 sm:px-auto">
      {/* container */}
      <div ref={conatinerRef} className="flex">
        <div className="min-h-[100dvh] relative flex flex-col  sm:text-left  text-center justify-center sm:items-start items-center  ">
          <Title></Title>
        </div>
      </div>
      {/* background */}
      <div className="absolute w-[100vw] overflow-hidden  h-[100vh] z-[-1] bg-bgMain top-0 right-0">
        <Background></Background>
      </div>

      {/* fake conatiner */}
      <div ref={fakeContainer}></div>
    </section>
  );
}

export default Hero;
