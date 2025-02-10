/* eslint-disable react/prop-types */

function Experience(props) {
  return (
    <div data-aos="fade-right" className="w-full p-6  border-2 border-sky-300 rounded-lg  text-slate-600 dark:text-slate-100">
                    <h1 className="font-bold">{props.title}</h1>
                    <h1>{props.description}</h1>
                    <h1>{props.year}</h1>
    </div>
  )
}

export default Experience
