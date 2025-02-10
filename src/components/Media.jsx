function media(props) {
  return (
    <div  className="lg:w-14 lg:h-14 sm:w-12 sm:h-12 w-14 h-14  bg-slate-600  rounded-full hover:scale-110 shadow transition-all duration-100 flex justify-center items-center text-sky-400">
        <img src={props.img} alt="" className="object-contain w-1/2" />
    </div>
  )
}

export default media
