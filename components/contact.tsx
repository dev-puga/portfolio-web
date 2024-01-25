"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-white/75 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:wpuga.dev@gmail.com">
          wpuga.dev@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email address here."
          className="h-14 px-4 rounded-lg border border-black/10 text-gray-900"
        />
        <textarea
          required
          name="message"
          maxLength={2000}
          placeholder="Your message"
          className="h-52 my-3 rounded-lg border border-black/10 p-4 text-gray-900"
        />
        <button
          type="submit"
          className=" group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-white/10 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-white/5"
        >
          Submit{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 text-xs opacity-70 transition-all " />
        </button>
      </form>
    </motion.section>
  );
}
