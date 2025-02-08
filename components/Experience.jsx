import { assets, experiences } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="w-full px-[12%] scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Work Experience
      </motion.h2>

      {/* Timeline Container with Controlled Overlap */}
      <div className="relative w-full max-w-6xl mx-auto mt-12">
        {experiences.map(({ icon, title, company, duration, points }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            style={{ marginBottom: "40px" }} // Adjust this value for spacing
          >
            {/* Timeline Dot & Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-gray-300 "></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

            {/* Experience Card with More Width & Less Overlap */}
            <div
              className={`relative w-[80%] bg-white p-6 rounded-lg shadow-lg border border-gray-400 hover:shadow-xl transition-all mb-16 shadow-lg p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black rounded-xl bg-white hover:shadow-xl transition-all${
                index % 2 === 0 ? "ml-16" : "mr-16"
              }`}
              style={{ marginBottom: "20px", zIndex: `${10 - index}` }} // Adjust overlap and stacking
            >
              {/* Header with Logo */}
              <div className="flex items-center gap-4 mb-4">
                <Image src={icon} alt={title} className="w-11 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-700">{company}</h3>
                  <p className="text-sm text-gray-500">{duration}</p>
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="mb-4 font-semibold text-gray-700">{title}</h4>
              <ul className="list-disc pl-6 text-sm text-gray-600">
                {points.map((point, i) => (
                  <li key={i} className="mb-2">{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
