"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function TextReveal({
  className,
  children,
  slide,
}: {
  className?: string;
  children: string | ReactNode;
  slide?: boolean;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);
  useGSAP(
    () => {
      if (textRef.current) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(textRef.current, {
          scrollTrigger: {
            trigger: textRef.current,
            toggleActions: "restart pause resume reverse",
            start: "top 90%",
          },
          duration: 1,
          autoAlpha: 0,
          y: slide ? 120 : 0,
          ease: "power1.out",
          stagger: 0.08,
        });
      }
    },
    { scope: textRef }
  );
  return (
    <div className="overflow-hidden">
      <div className={`${className}` + "overflow-hidden"} ref={textRef}>
        {children}
      </div>
    </div>
  );
}
