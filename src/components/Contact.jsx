// import React from 'react'
import Media from "./Media";
import wa from "../assets/mediasocial/wa.png";
import mail from "../assets/mediasocial/mail.png";
import tiktok from "../assets/mediasocial/tiktok1.png";
import github from "../assets/mediasocial/github1.png";
import bg from "../assets/contact.jpeg";


function contect() {
  return (
    <section
      id="contact"
      className=" z-10 mx-auto min-h-screen w-full md:flex xl:gap-16 justify-between items-center px-10  lg:px-20 py-32 md:py-0"
    >
      <div className="md:w-1/2 md:p-6 h-40 lg:px-10 md:text-start text-center mb-36">
        <h3 data-aos="fade-right" className="text-6xl text-slate-600 dark:text-slate-100 font-bold">
          Contact <span className="text-sky-300">Me</span>
        </h3>

        <p data-aos="fade-left" className="mb-5 mt-2 text-lg text-slate-600 dark:text-slate-100">
          Get in touch for collaboration or inquiries.
        </p>

        <div data-aos="fade-up" data-aos-duration="2000"  className="  z-40 w-full  text-left flex md:justify-start justify-center  gap-4 text-white rounded-full ">
          <Media  img={wa} />
          <Media img={mail} />
          <Media img={tiktok} />
          <Media img={github} />
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="md:w-3/5 lg:w-1/2 relative bg-slate-400  group md:p-6   overflow-hidden rounded-md cursor-pointer   h-[34rem] brightness-75"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      ></div>
    </section>
  );
}

export default contect;
