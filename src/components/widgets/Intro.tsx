"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../space-man.json";

type IntroProps = {
  animate: boolean;
};

const Intro: React.FC<IntroProps> = ({ animate }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 800], [1, 0.5]);
  const translate = useTransform(scrollY, [0, 800], [0, -800]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "20vh" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ scale: animate ? scale : 1 }}
        className="text-[6rem] font-bold text-center select-text flex flex-col gap-2 justify-between  items-center mx-auto my-auto"
      >
        <div className="flex justify-center items-end ">
          <h1 data-shadow="I'm Prithvi" className="mainText text-[3rem]">
            I'm <span>Prithvi</span>
          </h1>
        </div>
        <h1 className=" text-center leading-10 text-[4rem] my-4">
          <span className="text-yellow-400  hover:text-white ">Full</span>
          <span className=" hover:text-yellow-400"> Stack</span>
          <span className=" hover:text-yellow-400"> Developer</span>
        </h1>
        <p className="text-xl font-light max-w-[600px] text-center mt-4">
          <span className="block">
            Your digital Swiss Army knife in the world of development! 🔧🌍
          </span>
          <span className="block">
            I specialize in crafting seamless web and mobile experiences. Let's
            turn ideas into pixel-perfect realities together! ✨💡
          </span>
        </p>
      </motion.div>
      <motion.div
        style={{ y: translate }}
        className="absolute left-0 top-0 h-[70%] z-[-1]"
      >
        <Lottie options={defaultOptions} />
      </motion.div>
    </>
  );
};

export default Intro;
