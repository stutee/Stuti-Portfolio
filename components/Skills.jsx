import { motion } from "framer-motion";
import Image from "next/image";
import { assets, skillsData } from "@/assets/assets";



const Skills = () => {
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
        className="text-center text-5xl font-bold mb-10"
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 dark:border-white dark:hover:shadow-white"
          >
            <h3 className="text-lg font-bold text-center mb-4">
              {skill.category}
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {skill.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 w-20"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm text-gray-600 dark:text-white/80 text-center">
                    {item.name}
                  </p>
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
