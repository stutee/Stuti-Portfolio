import { assets, experiences } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Experience = ({ isDarkMode }) => {
  return (
    <motion.div
      id="experience"
      className="w-full px-[12%] py-5 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Work Experience
      </motion.h4> */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Work Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-12 max-w-5xl mx-auto my-12"
      >
        {experiences.map(({ icon, iconDark, title, company, duration, points }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image src={isDarkMode ? iconDark:icon} alt={title} className='w-11 mt-1' />
              <div>
                <h3 className="text-lg font-bold text-gray-700 dark:text-white">
                  {company}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {duration}
                </p>
              </div>
            </div>

            <h4 className="mb-4 font-semibold text-gray-700 dark:text-white">
              {title}
            </h4>
            <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-white/80">
              {points.map((point, i) => (
                <li key={i} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
