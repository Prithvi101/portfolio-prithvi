import { FaAws } from "react-icons/fa";
import {
  SiAwsamplify,
  SiAwslambda,
  SiHostinger,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const experience1 = {
  JobTitle: "Full Stack Developer",
  Company: "Bexcard.co.uk",
  Duration: "June 2023 - Present",
  Location: "Manchester,UK",
  Mode: "Remote",
  Data: [
    {
      title: "Web",
      list: [
        "Led a team in the development of a cutting-edge website using the Next.js framework.",
        "Implemented support for OpenGraph, facilitating easy sharing and display of site content on social media  ",
        "Developed a user-friendly blog section powered by Sanity.io, providing valuable content and enhancing audience engagement.",
        "Hosted the website on AWS Amplify to ensure scalability, reliability, and efficient deployment. Utilized Cloudflare for caching, improving website performance and reducing load times.",
      ],
    },
    {
      title: "Mobile",
      list: [
        "Integrated WebSocket into the React Native application for real-time balance updates.",
        "Optimized app performance, reducing size from 198 MB to 61 MB (68% reduction).",
        " Implemented code refactoring, image optimization, and network request reduction.",
      ],
    },
    {
      title: "Backend",
      list: [
        "Developed serverless event-driven API using AWS Lambda(Node Js), EventBridge, and API Gateway, providing scalable and efficient backend services.",
        "Participated in monitoring infrastructure using CloudWatch and AWS X-Ray, ensuring high availability and performance.",
      ],
    },
  ],
  Skills: [
    [SiTypescript, SiNodedotjs, SiReactquery],
    [TbBrandReactNative, SiNextdotjs],
    [FaAws, SiAwslambda, SiAwsamplify],
  ],
};

export const experience2 = {
  JobTitle: "Front End Developer(Intern)",
  Company: "Inphynous Technology Solutions",
  Duration: "Feb 2023 - April 2023",
  Location: "Aurangabad",
  Mode: "In-Office",
  Data: [
    {
      title: "Web",
      list: [
        "Developed responsive websites using React js and Tailwind CSS, ensuring optimal user experience across all devices.",
        "Hosted Website Static websites using Hostinger Webhosting, managing domain configuration and SSL certificates.",
        "Optimized website performance by implementing best practices such as lazy loading, code splitting, and image optimization.",
        "Worked on integrating third-party APIs for various functionalities like payment gateways, social media logins, and data retrieval.",
      ],
    },
  ],
  Skills: [
    [SiJavascript, SiReact],
    [SiHostinger, SiTailwindcss],
  ],
};

export const experience3 = {
  JobTitle: "Full Stack Developer(Intern)",
  Company: "HummingBird Web Solutions",
  Duration: "April 2023 - June 2023",
  Location: "Pune",
  Mode: "In-Office",
  Data: [
    {
      title: "Web",
      list: [
        "Developed responsive websites using React js and Tailwind CSS, ensuring optimal user experience across all devices.",
        "Hosted Website Static websites using Hostinger Webhosting, managing domain configuration and SSL certificates.",
        "Optimized website performance by implementing best practices such as lazy loading, code splitting, and image optimization.",
        "Worked on integrating third-party APIs for various functionalities like payment gateways, social media logins, and data retrieval.",
      ],
    },
  ],
  Skills: [
    [SiJavascript, SiReact],
    [SiHostinger, SiTailwindcss],
  ],
};
