function projec(props) {
  return (
    <div
    data-aos="fade-up"
      className="col-span-1 hover:scale-110  h-72 rounded dark:border-slate-500 border-2  relative p-5    text-slate-500 overflow-hidden flex justify-end"
    > 
    <div className="w-2/3 flex flex-col">
      <p data-aos="fade-right" className="text-4xl font-extrabold text-slate-600 dark:text-slate-100">{props.title}</p>
      <p data-aos="fade-right" className="text-xl dark:text-slate-100 ">{props.description}</p>
    </div>

      <img data-aos="zoom-in" src={props.img1} className="object-contain self-end z-10   w-2/3 h-2/3 " alt="" />

      <div className="absolute right-0 bottom-0 w-1/2 h-2/3 bg-gradient-to-b from-transparent blur-2xl to-sky-300 opacity-30"></div>

      {/* tect use */}
    
      {/* <div className="absolute top-0 right-0 p-2 flex  gap-2">
       
      </div> */}

      {/* hover */}
      {/* <div className="absolute z-20 h-full w-full top-0 left-0 bg-[rgba(241,245,249,.9)]">
      <div className=" text-slate-500">
        <h1 className="font-bold text-xl">{props.title}</h1>
        <h1 className="">{props.description}</h1>
      </div>
      </div> */}
    </div>
  );
}

export default projec;
