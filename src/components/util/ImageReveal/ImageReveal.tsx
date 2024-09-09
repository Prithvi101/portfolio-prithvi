"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { ReactNode, useRef } from "react";

function ImageReveal({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const maskRef = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(maskRef.current, { x: -400, duration: 1, delay: 1 });
  });
  return (
    <div className={`${className}`}>
      {children}
      <div
        ref={maskRef}
        className="w-full h-full bg-white absolute top-0 rounded-3xl"
      ></div>
    </div>
  );
}

export default ImageReveal;
