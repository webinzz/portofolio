// import React from 'react'
import { Link } from "react-router-dom";
import me1 from "../assets/me/me3.png";
import me2 from "../assets/me/me4.png";

function about() {
  return (
    <section
      id="about"
      className="z-10 mx-auto min-h-screen w-full md:flex justify-between items-center  md:px-10 lg:px-20 py-32 md:py-0"
    >
      <div className=" lg:w-1/2 lg:p-6  h-40 xl:px-10 md:text-start text-center">
        <h3 data-aos="fade-right" className="text-6xl text-slate-600 dark:text-slate-100 font-bold">
          About <span className="text-sky-300">Me</span>
        </h3>

        <p data-aos="fade-left" className="mb-5 mt-2 text-lg text-slate-600 dark:text-slate-100">
          Learn more about me, my background and my skill.
        </p>
        <Link
          data-aos="fade-left"
          to={"/about"}
          className="px-5 p-2 bg-slate-600 text-white rounded-lg"
        >
          learn more
        </Link>
      </div>

      <div className="sm:w-3/5 w-4/5 mx-auto md:mx-0  relative  group p-6  overflow-hidden rounded-md cursor-pointer flex justify-center  sm:h-[34rem] h-96">
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="bg-slate-400 absolute md:w-64 w-48 h-72  md:h-96 left-0 top-6 lg:left-20 hover:scale-105 transition-all brightness-75 z-10"
          style={{
            backgroundImage: `url(${me1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="bg-slate-400 absolute md:w-64 w-48 h-72 md:h-96  bottom-6 right-0 hover:scale-105 transition-all  brightness-75 z-10"
          style={{ backgroundImage: `url(${me2})`, backgroundSize: "cover" }}
        ></div>

        {/* <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-slate-300 w-[400px] h-[400px] opacity-50  border-8 rounded-full"></div> */}
        {/* <h1 className='absolute top-20 lg:right-28 right-10 font-semibold text-xl text-slate-600 animate-bounce'>MySkill</h1>
        <h1 className='absolute bottom-16 lg:left-20 left-8 font-semibold text-xl text-slate-600 animate-bounce'>MyExperience</h1> */}
      </div>
    </section>
  );
}

export default about;
