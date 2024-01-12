"use client";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useActiveSection from "@/hooks/useActiveSection";
import { useEffect } from "react";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.75 });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 ">
        I am a Software Developer with four years of experience in{" "}
        <span className="font-medium">Node.js, React, and TypeScript</span>,
        Passionate about
        <span className="font-medium"> technology and problem-solving</span>. I
        am consistently striving to enhance my skills and provide innovative
        solutions. I bring proven expertise in high-traffic projects, capable of
        developing{" "}
        <span className="underline">
          responsive, optimized, and high-performance applications.
        </span>{" "}
        My core stack is{" "}
        <span className="font-medium">TypeScript, React, and NodeJs</span>
        .I am also familiar with Ruby on Rails. I am always looking to learn new
        technologies. My currently position is{" "}
        <span className="font-medium">Front end </span>
        developer.
      </p>
      <p></p>
    </motion.section>
  );
}
