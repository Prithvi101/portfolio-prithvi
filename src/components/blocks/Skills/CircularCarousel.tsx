"use client";
import TextReveal from "@/components/util/TextReveal/TextReveal";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

interface CircularCarouselProps {
  pathRadius: number; // Radius of the circle
  items: {
    title: string;
    text: string;
    image: string;
  }[]; // Carousel items
  itemSize?: number; // Size of each carousel item
  animationDuration?: number; // Duration of the animation
}

const CircularCarousel: React.FC<CircularCarouselProps> = ({
  pathRadius,
  items,
}) => {
  const angle = useMotionValue(0); // Current rotation angle
  const velocity = useRef(0); // Store velocity from drag
  const colisionDiv = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [responsivePathRadius, setResponsivePathRadius] = useState<number>(
    updateRadius(pathRadius)
  );

  // Handle drag events to adjust the carousel angle
  const handleDrag = (
    event: MouseEvent,
    info: { velocity: { x: number }; delta: { x: number } }
  ) => {
    setDragging(true);
    const dampingFactor = 0.1; // Scale the motion
    angle.stop();
    velocity.current = info.velocity.x * dampingFactor;
    angle.set(angle.get() + info.delta.x * dampingFactor);
  };

  // Custom snapping function to round the angle
  const customSnap = (increment: number, value: number) => {
    return Math.round(value / increment) * increment;
  };

  // Handle drag end and apply inertia with snapping to the nearest item
  const handleDragEnd = () => {
    const currentVelocity = velocity.current;
    const step = 360 / items.length; // Snapping step
    const currentAngle = angle.get();
    const targetAngle = currentAngle + currentVelocity * 0.5; // Base inertia target

    animate(angle, targetAngle, {
      type: "inertia",
      velocity: currentVelocity,
      power: 1,
      timeConstant: 400,
      restDelta: 1, // Coarser rest point for inertia
      onComplete: () => {
        animate(angle, customSnap(step, angle.get()), {
          type: "spring",
          bounce: 0,
          damping: 10,
          ease: "easeInOut",
          onComplete() {
            let collisionDivRect = colisionDiv.current?.getBoundingClientRect();
            let newActiveIndex = null;
            if (
              collisionDivRect === undefined ||
              typeof document === "undefined"
            )
              return;

            let boxes = document.querySelectorAll(".carousal-cards");
            boxes.forEach((box, index) => {
              let boxRect = box.getBoundingClientRect();
              if (
                collisionDivRect.x < boxRect.x + boxRect.width &&
                collisionDivRect.x + collisionDivRect.width > boxRect.x &&
                collisionDivRect.y < boxRect.y + boxRect.height &&
                collisionDivRect.y + collisionDivRect.height > boxRect.y
              ) {
                newActiveIndex = index;
              }
            });
            if (typeof newActiveIndex == "number")
              setActiveIndex(newActiveIndex);
            setDragging(false);
          },
        });
      },
    });
  };

  // Update the path radius dynamically based on window size
  function updateRadius(radius: number): number {
    let windowWidth = 1280;
    if (typeof window !== "undefined") windowWidth = window?.innerWidth; // Use innerWidth for more common use case
    const baseWidth = 1200; // Define a base width for the calculation (adjust as necessary)
    console.log("update radius", radius, windowWidth);
    // Calculate the new proportional radius
    const proportionalRadius = (windowWidth / baseWidth) * radius;
    if (proportionalRadius < 500) return 500;
    console.log("this is radius", proportionalRadius);

    return proportionalRadius;
  }

  useEffect(() => {
    // Update the radius on the first render
    // Call once on mount after the DOM has painted
    setTimeout(() => {
      console.log("Updated+responsivePathRadius");
      setResponsivePathRadius(updateRadius(pathRadius) + 1);
    }, 500);
    // Add event listener to handle window resize
    const handleResize = () =>
      setResponsivePathRadius(updateRadius(pathRadius));
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [pathRadius]); // Depend on pathRadius

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <motion.div
        className="cursor-grab"
        style={{
          width: responsivePathRadius * 2,
          height: responsivePathRadius * 2,
          borderRadius: "50%",
          position: "absolute",
          zIndex: 1000,
        }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        <div
          ref={colisionDiv}
          className="p-4  absolute top-10 left-0 right-0 m-auto w-5"
        ></div>
      </motion.div>
      <motion.div
        style={{
          width: responsivePathRadius / 2,
          height: responsivePathRadius / 2,
          borderRadius: "50%",
          rotate: angle,
          position: "relative",
          backgroundColor: "#fff",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={
              "absolute top-0 bottom-0 left-0 right-0 m-auto bg-white rounded-lg  text-black flex items-center justify-center cursor-grab select-none carousal-cards"
            }
            style={{
              transform: `rotate(${(i * 360) / items.length}deg) translateY(${
                -responsivePathRadius + 100
              }px)`,
              width:
                (2 * 3.14159 * responsivePathRadius) / (items.length * 1.5),

              height:
                (2 * 3.14159 * responsivePathRadius) / (items.length * 1.5),
            }}
          >
            <Image
              src={item?.image}
              width={100}
              height={100}
              alt={item?.title}
            ></Image>
          </div>
        ))}
      </motion.div>
      <div className="absolute top-[-50%]  text-center">
        {!dragging && (
          <TextReveal slide>
            <h2 className="text-white font-bold">
              {items[activeIndex]?.title}
            </h2>
            <p className="sm:text-[16px] text-[12px] w-40 text-slate-400">
              {items[activeIndex]?.text}
            </p>
          </TextReveal>
        )}
      </div>
    </div>
  );
};

export default CircularCarousel;
