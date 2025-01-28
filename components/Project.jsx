import { motion } from "framer-motion";
import Image from "next/image";
import uh_logo from "../assets/UH_logo.png";

const Projects = () => {
  return (
    <motion.div
      id="projects"
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
        Projects
      </motion.h2>

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-4">
          ROS-Based Geofencing and Path Planning Optimization for UAVs (2021)
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-600 dark:text-white/80">
          <li>
            The project experimented with physical hardware implementation and
            software simulation in CoppeliaSim along with Robot Operating
            System (ROS). Triangle Width Characterization with Adjacency (TWCA)
            for optimizing the breach detection problem.
          </li>
          <li>
            My Role: Research on algorithms for effective breach detection. Ray
            Casting algorithm and TWCA were tested as they supported our
            dataset. TWCA showed better accuracy and was chosen. Similarly, I
            implemented Breadth First Search (BFS) for the shortest distance
            travel of the UAV.
          </li>
        </ul>
        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative w-full h-64">
            <Image
              src={uh_logo}
              alt="UAV Hardware"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/images/uav-project-2.jpg"
              alt="UAV Team"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </motion.div>

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-bold mb-4">
          ROS-Based Geofencing and Path Planning Optimization for UAVs (2021)
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-600 dark:text-white/80">
          <li>
            The project experimented with physical hardware implementation and
            software simulation in CoppeliaSim along with Robot Operating
            System (ROS). Triangle Width Characterization with Adjacency (TWCA)
            for optimizing the breach detection problem.
          </li>
          <li>
            My Role: Research on algorithms for effective breach detection. Ray
            Casting algorithm and TWCA were tested as they supported our
            dataset. TWCA showed better accuracy and was chosen. Similarly, I
            implemented Breadth First Search (BFS) for the shortest distance
            travel of the UAV.
          </li>
        </ul>
        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative w-full h-64">
            <Image
              src={uh_logo}
              alt="UAV Hardware"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/images/uav-project-2.jpg"
              alt="UAV Team"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Projects;
