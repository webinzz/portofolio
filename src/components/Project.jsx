// import React from 'react'
import { Link } from "react-router-dom";
import hero from "../assets/portofolio/heroproject.png";

function project() {
  return (
    <section
      id="project"
      className=" z-10 mx-auto min-h-screen w-full md:flex xl:gap-16 justify-between items-center md:px-10 lg:px-20 py-32 md:py-0"
    >
      <div className="md:w-1/2 md:p-6 h-40 lg:px-10 md:text-start text-center mb-10 ">
        <h3 data-aos="fade-right" className="text-6xl text-slate-600 dark:text-slate-100 font-bold">
          My <span className="text-sky-300">Project</span>
        </h3>

        <p data-aos="fade-left" className="mb-5 mt-2 text-lg text-slate-600 dark:text-slate-100">
          Explore the projects I’ve completed and the technologies I use
        </p>
        <Link
          to={"/project"}
          className="px-5 p-2 bg-slate-600 text-white rounded-lg"
        >
          VIew Project
        </Link>
      </div>


      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="md:w-3/5 lg:w-1/2 w-full relative bg-slate-50 border-2  group md:p-6  overflow-hidden rounded-md cursor-pointer   h-[34rem] brightness-75 "
        style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover" }}
      >
        .
    

      </div>
    </section>
  );
}

export default project;
