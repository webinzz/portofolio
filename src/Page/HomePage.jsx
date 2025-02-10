// import React from 'react'
import Navbar from "../components/Layouts/Navbar/Navbar";
import Header from "../components/Layouts/Header/Header";
import About from "../components/About";
import Project from "../components/Project";
import Contact from "../components/Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <Header />
      <main className="bg-white dark:bg-slate-800 rounded-t-[5rem]">
        <About />
        <Project />
        <Contact />
      </main>
    </>
  );
}

export default Home;
