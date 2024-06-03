"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisScroller() {
  useEffect(() => {
    if (typeof window == "undefined") return;
    const lenisScroll = new Lenis({
      lerp: 0,
      //wheelMultiplier: 0.8
      wheelMultiplier: 1.3,
    });

    function raf(time: any) {
      lenisScroll.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisScroll.destroy();
    };
  }, []);

  return <></>;
}
