import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import WordLoader from "./WordLoader";

function Preloader({ handleOnComplete }: { handleOnComplete: Function }) {
  const container = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isExiting, setIsExiting] = useState(false);

  // Entry animation on mount
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" }
      );
    }

    // Wait 2 seconds, then trigger exit
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Exit animation when isExiting is true
  useEffect(() => {
    if (isExiting && container.current && contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(container.current, {
            y: "100%",
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
              handleOnComplete();
            },
          });
        },
      });
    }
  }, [isExiting, handleOnComplete]);

  return (
    <div
      ref={container}
      className="overflow-hidden w-full h-full fixed top-0 left-0 z-[10000] bg-[#080808] flex items-center justify-center"
    >
      <div
        ref={contentRef}
        className="flex flex-col items-center justify-center text-center"
      >
        <WordLoader />
      </div>
    </div>
  );
}

export default Preloader;
