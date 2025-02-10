import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [kondisi, setKondisi] = useState(false);
  const [isDark, setDark] = useState(false)

  function setDarkMode(){
    document.documentElement.classList.toggle("dark");
    if(document.documentElement.className == "dark"){
      localStorage.setItem('theme','dark');
    }else{
      localStorage.setItem('theme','light');
    }
    setDark(!isDark);
  }
  
  useEffect(()=>{
    setKondisi(!kondisi);
  },[isDark])

  const handleToggle = () => {
    setKondisi(!kondisi);
  };

  return (
    <nav className="w-screen fixed top-0 z-50 bg-white dark:bg-slate-700 bg-opacity-80 flex items-center justify-between p-3 px-10 md:px-20">
      <h1 className="text-3xl text-sky-300 z-[99]">Ergia</h1>

      <button onClick={handleToggle} className="flex flex-col relative w-10 h-5 z-[99]">
        <div
          className={`w-full transition-all duration-300 bg-slate-600 dark:bg-slate-300 ${
            kondisi ? "rotate-0 top-0" : "rotate-45 bottom-0"
          } absolute h-[.10rem]`}
        ></div>
        <div
          className={`w-full transition-opacity duration-300 bg-slate-600 dark:bg-slate-300 ${
            kondisi ? "opacity-100 " : "opacity-0"
          } absolute h-[.10rem] top-1/2 -translate-y-1/2`}
        ></div>
        <div
          className={`w-full transition-all duration-300 bg-slate-600 dark:bg-slate-300 ${
            kondisi ? "rotate-0" : "-rotate-45 "
          } absolute h-[.10rem] bottom-0`}
        ></div>
      </button>

      <div
  className={`absolute transition-transform duration-700 ease-in-out ${
    kondisi ? "translate-y-[-100%] scale-0" : "translate-y-0 scale-[400]"
  } w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 bg-opacity-80 right-0 top-0 justify-center items-center z-40`}
></div>


      <div
        className={`absolute w-screen h-screen right-0 top-0 justify-center flex items-center z-50 transition-opacity duration-500 ${
          kondisi ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
      >
        <ul className="flex flex-col gap-4 justify-center items-center text-slate-600 dark:text-slate-100">
          <h1 className="text-5xl font-bold mb-4">Menu</h1>
          <li>
            <Link to="/" className="text-xl font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl font-medium">
              About
            </Link>
          </li>
          <li>
            <Link to="/project" className="text-xl font-medium">
              Project
            </Link>
          </li>
          <li>
            <Link to="/#contact" className="text-xl font-medium">
              Contact
            </Link>
          </li>
          <button onClick={setDarkMode} className="p-2  border-2 dark:border-white border-slate-600 rounded">
            {isDark ? (
              <div className="flex gap-2">
                <span className="material-symbols-outlined">dark_mode</span>
                <p>DarkMode</p>
              </div>
            ):(
              <div className="flex gap-2">
                  <span className="material-symbols-outlined">sunny</span>
                  <p>LightMode</p>
              </div>
            )}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
