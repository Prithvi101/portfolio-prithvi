import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import styles from "./preloader.module.scss";
import CubeGrid from "./CubeGrid";

function Preloader({ handleOnComplete }: { handleOnComplete: Function }) {
  const container = useRef(null);
  useGSAP(
    () => {
      if (container.current) {
        const preloaderTimeline = gsap.timeline();
        preloaderTimeline.to(container.current, {
          y: 1000,
          onComplete: () => {
            // You can add actions to be performed here after the animation completes
            handleOnComplete();
          },
        });
      }
    },
    { scope: container }
  );
  return (
    <div className="overflow-hidden w-full h-full fixed top-0 left-0  z-[100]">
      <div
        ref={container}
        className="fixed flex-col z-[100] top-0 left-0 w-full h-full bg-[#060311]  overflow-hidden flex items-center justify-center"
      >
        <CubeGrid></CubeGrid>
        <h1 className="mt-10">Loading.....</h1>
      </div>
    </div>
  );
}

export default Preloader;
