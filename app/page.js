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
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme ='dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
    }
  },[isDarkMode])
  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    <Header isDarkMode={isDarkMode} />
    
    <Experience isDarkMode={isDarkMode} />
    <Skills isDarkMode={isDarkMode} />
    <Project isDarkMode={isDarkMode} />
    <Hackathon isDarkMode={isDarkMode} />
    <Education isDarkMode={isDarkMode} />
    
    </>
  );
}
