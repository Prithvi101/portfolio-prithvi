"use client";
import React, { useRef } from "react";
import Partcles from "../ui/Partcles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import TextReveal from "../util/TextReveal/TextReveal";

function Hero() {
  const conatinerRef = useRef<HTMLDivElement>();
  const fakeContainer = useRef<HTMLDivElement>();
  const { contextSafe } = useGSAP({ scope: conatinerRef });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
  });
  return (
    <section className=" max-w-6xl">
      {/* container */}
      <div ref={conatinerRef}>
        <div className="min-h-[100dvh] relative flex flex-col  text-left justify-center items-left  ">
          <div className="flex gap-4">
            <TextReveal className=" text-textPrimary sub-tittle">
              {"Hey there!, I'm"}
            </TextReveal>
            <div className=" h-8 w-24 overflow-hidden rounded-full bg-red-400 relative">
              <Image
                src={"/hero-image.png"}
                width={700}
                height={100}
                alt="blob"
                priority
                className=" absolute top-[-10%] left-0 "
              ></Image>
            </div>
          </div>
          <TextReveal className="hero-heading ">Prithvi Thakkar.</TextReveal>
          <TextReveal>
            <p className="font-normal text-p max-w-96">
              Software Engineer.{" "}
              <span className="text-textDisabled ">
                A self-taught developer with an interest in Computer Science.
              </span>
            </p>
          </TextReveal>
          <TextReveal>
            <p className="hero-point  mt-8">
              <span>
                <Image
                  src={"/snowflake.svg"}
                  width={25}
                  height={25}
                  alt="blob"
                  priority
                  className=" h-full w-auto"
                ></Image>
              </span>
              Currently specializing in Frontend and Mobile (react.js/
              react-native)
            </p>
          </TextReveal>
          <TextReveal>
            <p className="hero-point ">
              <span>
                <Image
                  src={"/snowflake.svg"}
                  width={25}
                  height={25}
                  alt="blob"
                  priority
                  className=" h-full w-auto"
                ></Image>
              </span>
              SDE-I at <span className="point">bexcard.co.uk</span>
            </p>
          </TextReveal>
        </div>
      </div>
      {/* background */}
      <div className="absolute w-[100vw] overflow-hidden  h-[100vh] z-[-1] bg-[#000] top-0 right-0">
        <Image
          src={"/hero-background.webp"}
          width={1024}
          height={800}
          alt="blob"
          priority
          className=" z-[-5] absolute bottom-0 left-0 w-[100vw] object-cover h-[100vh]"
        ></Image>
        <Partcles></Partcles>
      </div>

      {/* fake conatiner */}
      <div ref={fakeContainer}></div>
    </section>
  );
}

export default Hero;
