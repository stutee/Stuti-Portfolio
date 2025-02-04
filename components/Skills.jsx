import { motion } from "framer-motion";
import Image from "next/image";
import { skillsData } from "@/assets/assets";

const Skills = ({ isDarkMode }) => {
  return (
    <motion.div
      id="skills"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-5xl mx-auto my-10"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:shadow-xl transition-all duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
          >
            <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
              {skill.category}
            </h3>
            <div className="grid grid-cols-4 gap-8">
              {skill.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4">
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt={item.name}
                      className="w-15 h-15 object-contain"
                    />
                  ) : (
                    <p className="text-xs text-gray-600 dark:text-white/80 text-center">
                      {item.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
