// import React from 'react'
import Navbar from "../components/Layouts/Navbar/Navbar";
// import Project from "../components/project"
import Projec from "../components/Projec";
import Suit from "../assets/portofolio/batu.png";
import Company from "../assets/portofolio/compaany.png";
import Khodam from "../assets/portofolio/khodam.png";
import Space from "../assets/portofolio/space.png";
import Yandev from "../assets/portofolio/yandev.png";
import coffe from "../assets/portofolio/coffe.png";
import Wowitem from "../assets/portofolio/wowitem.png";
import porto from "../assets/portofolio/porto.png";
import Todoapp from "../assets/portofolio/todo.png";
import apt from "../assets/portofolio/apt.png";
import Wizard from "../assets/portofolio/wizard.png";

// tech

function Project() {
  return (
    <>
      <main className="bg-slate-50 dark:bg-slate-800">
        <Navbar />
        <div className="grid   md:grid-cols-2 grid-cols-1 gap-6 p-5 pt-20 lg:p-20  min-h-screen items-start">
          <Projec
            img1={Todoapp}
            title="Wztask"
            description="Website for manage todo or task"
          />
          <Projec
            img1={Wowitem}
            title="Wowitem"
            description="Website for borrowing item "
          />
          <Projec
            img1={porto}
            title="Portofolio"
            description="Portofolio website with admin page"
          />
          <Projec
            img1={apt}
            title="APT portofolio"
            description="Portofolio website "
          />
          <Projec img1={Wizard} title="WizardWake" description="Game webiste" />
          <Projec
            img1={Space}
            title="Space Around"
            description="Game Website"
          />
          <Projec
            img1={coffe}
            title="CoffeIN"
            description="myfirst project website"
          />
          <Projec img1={Yandev} title="Yandev" description="Company profile" />
          <Projec img1={Company} title="GIZOO" description="Company profile" />
          <Projec img1={Suit} title="Suit Game" description="Game website" />
          <Projec img1={Khodam} title="Cek Khodam" description="Game webiste" />
        </div>
      </main>
    </>
  );
}

export default Project;
