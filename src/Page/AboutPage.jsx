// import React from 'react'
import Navbar from "../components/Layouts/Navbar/Navbar";
import Experience from '../components/Experience'
import Skill from "../components/Skill";
import me from "../assets/me/me3.png";

import html from "../assets/skill/html.png";
import css from "../assets/skill/css.png";
import js from "../assets/skill/js.png";
import php from "../assets/skill/php.png";
import bootstrap from "../assets/skill/bootstrap.png";
import tailwind from "../assets/skill/tailwind.png";
import react from "../assets/skill/react.png";
import laravel from "../assets/skill/laravel.png";
import dart from "../assets/skill/dart.png";
import flutter from "../assets/skill/flutter.png";
import git from "../assets/skill/git.png";
import github from "../assets/skill/github.png";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50 dark:bg-slate-800 overflow-x-hidden">
        {/* about */}
        <div className="flex md:flex-row flex-col justify-between min-h-screen w-full p-10 lg:px-24 md:px-5 gap-16 items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="md:w-1/3 w-full bg-slate-400 h-[400px]"
            style={{ backgroundImage: `url(${me})`, backgroundSize: "cover" }}
          >
            .
          </div>

          <div className="md:w-1/2 ">
            <h3
              data-aos="fade-left"
              className="md:text-4xl text-3xl font-semibold text-slate-600 dark:text-slate-100"
            >
              Hello👋 i am{" "}
              <span className="text-sky-300">Ergia Buccharelli</span>
            </h3>
            <h3
              data-aos="fade-left"
              className="mb-2 md:text-3xl text-2xl font-medium text-slate-600 dark:text-slate-100"
            >
              A Web Developer 🧑‍💻 in Indonesia🌏
            </h3>
            <p
              data-aos="fade-right"
              className="border-y-4 border-slate-300 py-2 mb-2"
            >
              Hello everyone! I am Ergia buccharelli, a fullstack website
              developer. I am a intermediate experienced and I hope with this I
              can always learning something new to be able to invent digital
              applications that can help many people in the future. Could work
              independently or in a team.
            </p>

            <div className="w-full flex md:flex-row flex-col flex-wrap justify-start">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="border-sky-300 border p-6 md:w-1/3 mt-2 rounded shadow-sm text-center"
              >
                <h3 className="text-4xl my-3 text-sky-300 font-semibold">2+</h3>
                <p className="text-slate-500 dark:text-slate-100">Years Of Experience</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="border-sky-300 border md:w-1/3 p-6 mt-2 rounded shadow-sm text-center"
              >
                <h3 className="text-4xl my-3 text-sky-300 font-semibold">
                  10+
                </h3>
                <p className="text-slate-500 dark:text-slate-100">Framework & Tech Stack Used</p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="border-sky-300 border md:w-1/3 p-6 mt-2 rounded shadow-sm text-center"
              >
                <h3 className="text-4xl my-3 text-sky-300 font-semibold">
                  10+
                </h3>
                <p className="text-slate-500 dark:text-slate-100">Successed Projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* experience */}
        <div className="flex md:flex-row flex-col justify-between w-full p-10  lg:px-24 md:px-5 gap-10 min-h-screen">
          <div
            data-aos="fade-right"
            className="md:w-1/3 text-slate-700 dark:text-slate-100  flex-col flex "
          >
            <h1 className=" text-4xl font-bold ">Educations🎓</h1>
            <h1 className="text-sky-300 mb-2 text-4xl font-bold">
              and Experience🏆
            </h1>
            <p>
              There are some tech stack and tools that ive learned and
              experienced
            </p>
          </div>

          <div className="md:w-2/3 bg-white dark:bg-slate-800 border-2 border-sky-400 shadow-xl rounded flex md:flex-row flex-col p-10 gap-8">
            {/* school */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <h1
                data-aos="fade-up"
                className="font-bold text-slate-100 px-5 -mb-2 p-2 bg-sky-300 rounded text-xl w-40 text-center"
              >
                School
              </h1>
              <Experience
                title="SMK BAKTINUSANTARA 666"
                description="program study Softeare Enginer"
                year="2023 - 2025"
              />
              <Experience
                title="Vice President of Coding Organization"
                description="Grid Coding Community"
                year="2024 - 2025"
              />
            </div>

            {/* bootcamp */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <h1
                data-aos="fade-up"
                className="font-bold text-white px-5 -mb-2 p-2 bg-sky-300 rounded text-xl w-40 text-center"
              >
                Experience
              </h1>
              <Experience
                title="Internship at PT. Qtasnim"
                description="Role: Junior Web Developer"
                year="2025"
              />
              <Experience
                title="Dicoding bootcamp"
                description="Build Web Applications"
                year="2024"
              />
              <Experience
                title="Telkom Digiup bootcamp"
                description="Content digital"
                year="2024"
              />
            </div>
          </div>
        </div>

        {/* skill */}
        <div className="flex md:flex-row flex-col-reverse justify-between  w-full mt-10 p-10 lg:px-24 md:px-5 gap-10 min-h-screen">
          <div className="md:w-2/3 h-max  bg-white dark:bg-slate-800 border-2 border-sky-400 rounded shadow-xl grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-8 py-12 items-start">
            <Skill img={html} title="HTML" status="advenced" />
            <Skill img={css} title="CSS" status="advenced" />
            <Skill img={js} title="javascrip" status="advenced" />
            <Skill img={php} title="PHP" status="advenced" />
            <Skill img={bootstrap} title="bootstrap" status="advenced" />
            <Skill img={tailwind} title="tailwind" status="advenced" />
            <Skill img={react} title="react" status="advenced" />
            <Skill img={laravel} title="laravel" status="advenced" />
            <Skill img={dart} title="dart" status="advenced" />
            <Skill img={flutter} title="flutter" status="advenced" />
            <Skill img={git} title="git" status="advenced" />
            <Skill img={github} title="github" status="advenced" />
          </div>

          <div
            data-aos="fade-left"
            className="md:w-1/3 text-slate-700 dark:text-slate-100 md:text-end text-start flex-col flex items-end"
          >
            <h1 className=" text-4xl font-bold">Tech Stack⚙️</h1>
            <h1 className="text-sky-300 mb-2 text-4xl font-bold">
              And Tools🛠️
            </h1>
            <p>
              There are some tech stack and tools that ive learned and
              experienced
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

