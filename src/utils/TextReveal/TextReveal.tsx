"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "./TextReveal.module.scss";

interface TextRevealProps {
  className?: string;
  children: React.ReactNode;
}

const TextReveal: React.FC<TextRevealProps> = ({ className, children }) => {
  return (
    <motion.div
      className={className}
      initial={{ translateY: 50, opacity: 0 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default TextReveal;
