"use client";

import React, { useMemo, useState } from "react";
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
import TextReveal from "@/utils/TextReveal/TextReveal";
const FrontendSkills = [
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
const BackendSkills = [
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
    title: "AWS",
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

const MySkills = () => {
  const [currentCard, setCurrentCard] = useState({ stack: "F", index: 0 });

  const renderFrontendSkills = useMemo(
    () =>
      FrontendSkills.map((item, index) => (
        <div className="w-[12%]" key={item?.title}>
          <SkillCard
            Logo={item?.icon}
            title={item?.title}
            color={item?.color}
          />
        </div>
      )),
    []
  );

  const renderBackendSkills = useMemo(
    () =>
      BackendSkills.map((item, index) => (
        <div className="w-[12%]" key={item?.title}>
          <SkillCard
            Logo={item?.icon}
            title={item?.title}
            color={item?.color}
          />
        </div>
      )),
    []
  );

  return (
    <>
      <div className="bokhe-gradient-main absolute bottom-[-10%] left-0 z-[0] w-[100%] opacity-55"></div>

      <div className="flex gap-4 px-24 py-16 flex-col">
        <div className="flex flex-col gap-0">
          <div className=" overflow-hidden ">
            <TextReveal className="myCustomClass p-0 text-white/50 text-[3rem]  ">
              My
            </TextReveal>
          </div>
          <div className=" overflow-hidden ">
            <TextReveal className="myCustomClass text-white text-[3rem]  ">
              Skillsset
            </TextReveal>
          </div>
        </div>
        <motion.div className="flex w-full justify-evenly">
          {renderFrontendSkills}
        </motion.div>
        <motion.div className="flex justify-evenly">
          {renderBackendSkills}
        </motion.div>
      </div>
    </>
  );
};

export default MySkills;
