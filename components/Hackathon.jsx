import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import certificate_lerobot from "../assets/certificate_lerobot.png";
import lerobot_view from "../assets/lerobot_view.png";
import lerobot_team from "../assets/lerobot_team.png";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import womenai from "../assets/womenai.png";
import kscale from "../assets/kscale.png";
import huggingface_logo from "../assets/huggingface_logo.png";





const Hackathon = () => {
  return (
    <motion.div
      id="hackathon"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-Ovo mb-10"
      >
        Hackathons
      </motion.h2>

      {/* Women in AI RAG */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 shadow-lg p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black rounded-xl bg-white dark:bg-gray-900 dark:text-white/80 hover:shadow-xl transition-all dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
      >
        <div className="flex items-center space-x-3 mb-4">
        <Image src={womenai} alt="logo" width={100} height={20} />
        <h3 className="text-xl mb-4 font-semibold text-gray-600">
        Winner of Women in AI RAG Hackathon at Stanford University (Jan 2025)
        </h3>
        

        </div>
        <ul className="list-disc ml-6 mb-4 text-gray-600 dark:text-white/80">
          <li>
          We built Skinnify, an AI-powered skin identification and product recommender system that analyzes your face to provide personalized skincare recommendations in real-time. Building this in just one day was full of challenges, but it was also an amazing learning experience.
          </li>
        </ul>
        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 ">
          <div className="relative w-full">
            <Image
              src={a}
              alt="whole participants"
              className="rounded-md"
              style={{ objectFit: "contain", height: "300px" }}
            />
          </div>
          <div className="relative w-full ml-[10%] ">
            <Image
              src={b}
              alt="team work"
              style={{ objectFit: "contain", height: "300px" }}
            />
          </div>

          <div className="relative w-full ">
            <Image
              src={c}
              alt="The team"
              className="rounded-md"
              style={{ objectFit: "contain", height: "300px"}}
            />
          </div>
        </div>
      </motion.div>

      {/* LeRobot Hackathon */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 shadow-lg p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black rounded-xl bg-white dark:bg-gray-900 dark:text-white/80 hover:shadow-xl transition-all dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
      >
        <div className="flex items-center space-x-3 mb-4">
        <Image src={huggingface_logo} alt="logo" width={100} height={20} />
        <h3 className="text-xl mb-4 font-semibold text-gray-600">
        LeRobot Hackathon (Organized by Hugging Face LeRobot Team)	
        </h3>
        

        </div>
        <ul className="list-disc ml-6 mb-4 text-gray-600 dark:text-white/80">
          <li>
          Two day hackathon where I built robotic arms, configured them, tele-operated one robot arm using another, and recorded a dataset for imitation learning.
          </li>
        </ul>
        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 ">
          <div className="relative">
            <Image
              src={certificate_lerobot}
              alt="certificate"
              className="rounded-md"
              style={{ objectFit: "contain"}}
            />
          </div>
          <div className="relative">
            <Image
              src={lerobot_team}
              alt="team work"
              className="rounded-md"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className="relative ">
            <Image
              src={lerobot_view}
              alt="The team"
              className="rounded-md"
              style={{ objectFit: "contain"}}
            />
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Hackathon;
