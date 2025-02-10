
function skill(props) {
  return (
  <div className="col-span-1 mb-8 flex-col flex items-center ">
    <div data-aos="zoom-in" className="h-20 w-20 bg-[#f7f7f7] dark:bg-slate-800 rounded-full border border-sky-300 flex justify-center items-center">
      <img src={`${props.img}`} className=" w-2/3 h-2/3" alt="" />
    </div>

    <h1 data-aos="fade-down" className="font-bold">{props.title}</h1>
    <h1 data-aos="fade-down" className="">{props.status}</h1>
    
</div>
  )
}

export default skill
