'use client'
import Services from "@/components/Services";
import Education from "@/components/Education";

import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";
//import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { useEffect, useState } from "react";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Project from "@/components/Project";

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
    
    {/* <About isDarkMode={isDarkMode} /> */}
    <Experience isDarkMode={isDarkMode} />
    <Skills isDarkMode={isDarkMode} />
    {/* <Services isDarkMode={isDarkMode} /> */}
    {/* <Work isDarkMode={isDarkMode} /> */}
    <Project isDarkMode={isDarkMode} />
    {/* <Contact isDarkMode={isDarkMode} /> */}
    <Education isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    
    </>
  );
}
