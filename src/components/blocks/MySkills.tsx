"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiAwslambda,
  SiAwsamplify,
  SiNextdotjs,
  SiReactquery,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiLinux,
  SiRedux,
  SiAmazonec2,
  SiAmazondynamodb,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import SkillCard from "../card/SkillCard";
const MySkills = () => {
  const [currentCard, setCurrentCard] = useState({ stack: "F", index: 0 });
  const Frontend = [
    {
      icon: TbBrandReactNative,
      title: "React Native",
      color: "#61DBFB",
      text: "Using React Native, I build cross-platform mobile applications, leveraging a single codebase to deliver seamless experiences on both iOS and Android.",
    },
    {
      icon: SiNextdotjs,
      title: "Next Js",
      color: "#fff",
      text: "Utilizing Next.js, I develop robust server-side rendered (SSR) and static websites, optimizing performance and SEO while leveraging its file-based routing and API routes for full-stack capabilities.",
    },
    {
      icon: SiReactquery,
      title: "React Query",
      color: "#FF0000",
      text: "With React Query, I manage server-state in React applications effortlessly, ensuring data synchronization, caching, and seamless asynchronous operations.",
    },
    {
      icon: SiAwsamplify,
      title: "Amplify",
      color: "#FF0000",
      text: "Using AWS Amplify, I develop scalable full-stack applications, integrating authentication, storage, APIs, and hosting seamlessly with AWS services.",
    },
    {
      icon: SiTailwindcss,
      title: "Tailwind Css",
      color: "#61DBFB",
      text: "Employing Tailwind CSS, I rapidly build modern, responsive designs with utility-first classes, ensuring consistency and flexibility in styling.",
    },
    {
      icon: SiRedux,
      title: "Redux",
      color: "#f52249",
      text: "Using Redux, I manage complex application states predictably and maintainably, leveraging its centralized store and middleware for efficient state updates and debugging.",
    },
    {
      icon: SiTypescript,
      title: "TypeScript",
      color: "#006eff",
      text: "Employing TypeScript, I enhance JavaScript with strong typing, enabling better code quality, maintainability, and development efficiency through type checking and advanced IDE support.",
    },
    {
      icon: SiJavascript,
      title: "JavaScript",
      color: "#ffa500",
      text: "Proficient in JavaScript (ES6+), I develop interactive web applications, utilizing modern features like arrow functions, promises, async/await, and modules for cleaner and more efficient code.",
    },
  ];
  const Backend = [
    {
      icon: SiNodedotjs,
      title: "Node Js",
      color: "#3c873a",
      text: "Employing Node.js, I build scalable backend services and APIs, leveraging its non-blocking, event-driven architecture for efficient server-side development.",
    },
    {
      icon: SiExpress,
      title: "Express Js",
      color: "#000",
      text: "Using Express.js, I create robust and efficient RESTful APIs and server-side applications, streamlining backend development with its minimalistic and flexible framework.",
    },
    {
      icon: SiMongodb,
      title: "MongoDB",
      color: "#3c873a",
      text: "With MongoDB, I design and manage NoSQL databases, ensuring efficient data storage, retrieval, and scalability for dynamic web applications.",
    },
    {
      icon: SiLinux,
      title: "Linux",
      color: "#FFF",
      text: "Utilizing Linux, I manage server environments, ensuring reliability, security, and performance for deployed applications and services.",
    },
    {
      icon: FaAws,
      title: "Amazon Web Services",
      color: "#FF9900",
      text: "Leveraging Amazon Web Services (AWS), I deploy and manage cloud infrastructure, utilizing services like EC2, S3, and Lambda to ensure scalable and reliable applications.",
    },
    {
      icon: SiAwslambda,
      title: "AWS Lambda",
      color: "#f52249",
      text: "Using AWS Lambda, I develop and deploy serverless functions, enabling efficient, cost-effective execution of backend processes and event-driven architectures.",
    },
    {
      icon: SiAmazonec2,
      title: "AWS EC2",
      color: "#FF9900",
      text: "With AWS EC2, I configure and manage virtual servers in the cloud, providing scalable computing capacity for various applications and workloads.",
    },
    {
      icon: SiAmazondynamodb,
      title: "DynamoDB",
      color: "#356de6",
      text: "Utilizing DynamoDB, I implement fast and flexible NoSQL databases, ensuring high performance and scalability for data-intensive applications.",
    },
  ];
  return (
    <>
      <div className="bokhe-gradient-main absolute bottom-[-10%] left-0 z-[0] w-[100%] opacity-55"></div>

      <div className="flex gap-4 px-24 py-16 flex-col">
        <h2 className="text-white/55 text-[4rem]">My Skills</h2>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full justify-evenly"
        >
          {Frontend.map((item, index) => (
            <div
              className="w-[12%]"
              key={item?.title}
              onMouseEnter={() => setCurrentCard({ stack: "F", index: index })}
            >
              <SkillCard
                Logo={item?.icon}
                title={item?.title}
                color={item?.color}
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-evenly"
        >
          {Backend.map((item, index) => (
            <div
              className="w-[12%]"
              key={item?.title}
              onMouseEnter={() => setCurrentCard({ stack: "B", index: index })}
            >
              <SkillCard
                key={item?.title}
                Logo={item?.icon}
                title={item?.title}
                color={item?.color}
              />
            </div>
          ))}
        </motion.div>
        <div className="flex text-[5rem] items-center justify-center  mt-16 ">
          {currentCard.stack == "F"
            ? Frontend[currentCard.index]?.icon?.({})
            : Backend[currentCard.index]?.icon?.({})}
          <p className="text-[1.2rem] text-left max-w-[600px]  ml-4 self-centeropacity-65 h-20">
            {currentCard.stack == "F"
              ? Frontend[currentCard.index].text
              : Backend[currentCard.index].text}
          </p>
        </div>
      </div>
    </>
  );
};

export default MySkills;
