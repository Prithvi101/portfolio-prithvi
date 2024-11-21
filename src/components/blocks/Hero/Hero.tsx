"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../../util/TextReveal/TextReveal";
import Background from "./Background";
import Title from "./Title";
import Preloader from "../Preloader/Preloader";

function Hero() {
  const conatinerRef = useRef<HTMLDivElement>(null);
  const innerContainer = useRef<HTMLDivElement>(null);
  const fakeContainer = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: conatinerRef });
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
      <section className=" max-w-6xl  sm:px-auto overflow-hidden">
        <div ref={conatinerRef}>
          {/* container */}
          <div
            className="flex flex-col justify-center items-center "
            ref={innerContainer}
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
                <a href="http://www.bexcard.co.uk" target="_blank">
                  <p className="">SDE-I at bexcard.co.uk</p>
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
