'use client'

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Hackathon from "@/components/Hackathon";

export default function Home() {

  return (
    <>
    <Navbar />
    <Header />
    <Hackathon />
    <Experience />
    <Skills />
    <Project />
    <Education />
    
    </>
  );
}
