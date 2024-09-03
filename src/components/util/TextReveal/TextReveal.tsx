"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import styles from "./TextReveal.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({
  className,
  children,
}: {
  className?: string;
  children: string | ReactNode;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { y: 400, duration: 1 },
      { y: 0, duration: 1 }
    );
  });
  return (
    <div className="overflow-hidden">
      <div className={`${className}`} ref={textRef}>
        {children}
      </div>
    </div>
  );
}
