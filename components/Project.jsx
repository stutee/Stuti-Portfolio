import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import uh_logo from "../assets/UH_logo.png";
import drone from "../assets/drone.png";
import pulchowk_team from "../assets/pulchowk_team.png";
import elephant_intrusion from "../assets/elephant_intrusion.png";
import vrlab from "../assets/vrlab.png";
import movie_website from "../assets/movie_website.png";
import certificate_lerobot from "../assets/certificate_lerobot.png";
import lerobot_view from "../assets/lerobot_view.png";
import lerobot_team from "../assets/lerobot_team.png";
import foodie_chatbot from "../assets/foodie_chatbot.png";
import watering_system from "../assets/watering_system.png";
import poster_presentation from "../assets/poster_presentation.png";


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

      {/* Project Reinforcement Learning */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hover:shadow-xl transition-all mb-16 shadow-lg p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black rounded-xl bg-white dark:bg-gray-900 dark:text-white/80 hover:shadow-xl transition-all dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="md:w-1/2">
        <h3 className="text-xl mb-4 font-semibold text-gray-600 dark:text-white/80">
        Reinforcement Learning with Human Feedback for fine tuning Large Language Model (LLM) (2024)     
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-600 dark:text-white/80">
          <li>
            Fine-tuned OpenAI GPT-2 using Reinforcement Learning from Human Feedback (RLHF) with algorithms: Proximal Policy Optimization, Actor to critic, and Trust Region Policy Optimization, optimizing sentiment alignment on the IMDB dataset. Trained supervised reward model to give scores.

          </li>
          <li>
          Comparative analysis of the algorithms using training efficiency, computational complexity, and reward model scores.
          </li>
        </ul>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <Image
              src={poster_presentation}
              alt="Reinforcement Learning Poster"
              width={500}
              height={500}
              className="rounded-md"
          />
        </div> 

        </div>
        
      </motion.div>

        {/* AWS cloud computing */}
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 shadow-lg p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black rounded-xl bg-white dark:bg-gray-900 dark:text-white/80 hover:shadow-xl transition-all dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
      >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="md:w-1/2">
        <h3 className="text-xl mb-4 font-semibold text-gray-600 dark:text-white/80">
        AWS cloud based Movie Recommendation System (2024)     
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-600 dark:text-white/80">
          <li>
          Developed a real-time movie recommendation system leveraging AWS cloud services, SageMaker for machine learning, used K-nearest Neighbor algorithm and ECS (Fargate and EC2) for containerized microservices deployment. 

          </li>
          <li>
          Designed a user-friendly frontend with Next.js, integrated with secure authentication via Amazon Cognito, and implemented CI/CD pipelines using Docker and GitHub Actions.
          </li>
        </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <Image
              src={movie_website}
              alt="drone"
              width={500}
              height={500}
              className="rounded-md"
            />
        </div> 
        </div>

      </motion.div>

      {/* Foodie Chatbot */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 shadow-lg p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black rounded-xl bg-white dark:bg-gray-900 dark:text-white/80 hover:shadow-xl transition-all dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
      >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="md:w-1/2">
        <h3 className="text-xl mb-4 font-semibold text-gray-600 dark:text-white/80">
        Foodie Chatbot(2024)    
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-600 dark:text-white/80">
          <li>
          Created an AI chatbot using OpenAI's Assistant API that acts as a guide for choosing restaurants in Houston.
          </li>
          <li>
          Used PyQt to create a GUI for the chatbot.
          </li>
        </ul>
        </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={foodie_chatbot}
              alt="drone"
              width={400}
              height={300}
              className="rounded-md"
            />
          </div> 
          </div>
      </motion.div>

      {/* Energy modeling */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 shadow-lg p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black rounded-xl bg-white dark:bg-gray-900 dark:text-white/80 hover:shadow-xl transition-all dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
      >
        <h3 className="text-xl mb-4 font-semibold text-gray-600">
        Energy Prediction Modeling: Enhancing AdaBoost Regressor with GA-PSO Hybrid Optimization (2023)     
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-600 dark:text-white/80">
          <li>
          Employed the "Smart Home Dataset with Weather Information" from Kaggle, featuring minute-by-minute energy consumption Preprocessed data by removing empty rows, adding time indices, renaming columns for clarity, removing duplicates using pandas. 

          </li>
          <li>
          Chose AdaBoostRegressor for its ensemble learning capability, applied a hybrid approach combining GA for broad exploration and PSO for precise hyperparameter tuning, enhancing the model's predictive accuracy.
          </li>
          <li>
          Improved AdaBoost model’s performance significantly post-optimization, achieving lower Mean Squared Error (MSE) and higher R-squared value compared to the initial implementation.
          </li>
        </ul>
      </motion.div>


      {/* Project UAV */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 shadow-lg p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black rounded-xl bg-white dark:bg-gray-900 dark:text-white/80 hover:shadow-xl transition-all dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
      >
        <h3 className="text-xl mb-4 font-semibold text-gray-600">
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
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative w-full ml-[100px]">
            <Image
              src={drone}
              alt="drone"
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="relative w-full -ml-10">
            <Image
              src={pulchowk_team}
              alt="UAV Team"
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>
        </div>
      </motion.div>

        {/* Elephant Intrusion */}
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 shadow-lg p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black rounded-xl bg-white dark:bg-gray-900 dark:text-white/80 hover:shadow-xl transition-all dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="md:w-1/2">
        <h3 className="text-xl mb-4 font-semibold text-gray-600 dark:text-white/80">        Elephant Intrusion Detection and Alerting (2020)    
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-600 dark:text-white/80">
          <li>
          The isolation Forest algorithm for detecting the anomaly frequency of Elephants, IMU sensors, low pass filters, and energy thresholding to perform detection was used along with the STM32 microcontroller.

          </li>
          <li>
          My role: Research anomaly detection algorithm, implement it on our dataset, and provide the best algorithm. According to the dataset, Random Forest algorithm and Isolation Forest Algorithm performed best. However, the Isolation Forest Algorithm was chosen for its better F1 score, less variance of data, and less expensive in terms of time complexity.
          </li>
        </ul>
        </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={elephant_intrusion}
              alt="elephant"
              width={500}
              height={10}
              className="rounded-md"
              style={{ objectFit: "contain", height: "400px" }}
            />
          </div> 
          </div>

      </motion.div>
      


    </motion.div>
  );
};

export default Projects;



