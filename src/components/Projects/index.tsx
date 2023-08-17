import React, { FC } from "react"
import projectSalt from "../../assets/image/project-salt.png"
import projectPizza from "../../assets/image/project-pizza.png"
import projectNotab from "../../assets/image/project-notab.png"
import Image, { StaticImageData } from "next/image"

export const Projects = () => {
  return (
    <div className="card bg-base-200  shadow-xl  z-10 w-full p-10">
      <h2 className="text-2xl text-orange-500 font-bold  z-20">Projects</h2>
      <div className="flex flex-col gap-4 z-20 mt-6">
        <ProjectItem
          img={projectSalt}
          title="Salt"
          description="A simple project."
          link="https://vadimkiryanov.github.io/Salt-page/"
        />
        <ProjectItem
          img={projectPizza}
          title="Pizza"
          description="A simple project."
          link="https://react-market-ashen.vercel.app/"
        />
        <ProjectItem
          img={projectNotab}
          title="Notab"
          description="A simple project."
          link="https://vadimkiryanov.github.io/NoTab-Page/"
        />
      </div>
      <hr className="mt-6 opacity-20 bg-base-100" />
      <div className="flex flex-wrap gap-4 mt-6 z-20 ">
        <span className="badge p-4 rounded-lg bg-base-100 text-lg ">Web Developer</span>
        <span className="badge p-4 rounded-lg bg-base-100 text-lg">UI Desginer</span>
        <span className="badge p-4 rounded-lg bg-base-100  text-lg">UX Desginer</span>
      </div>

      <div className="bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] absolute inset-0 opacity-[0.02] bg z-0 bg-[length:161px] bg-repeat" />
    </div>
  )
}

type TProjectItem = {
  img: StaticImageData
  title: string
  description: string
  link: string
}
const ProjectItem: FC<TProjectItem> = ({ img, description, title, link }) => {
  return (
    <a href={link} target="_blank" className="alert group shadow-lg bg-base-100 cursor-pointer">
      <div className="z-20 overflow-hidden rounded-md ">
        <Image width={90} height={90} alt="Movie" src={img} className="drop-shadow-md group-hover:scale-110 transition-all duration-700" />
      </div>
      <div>
        <h3 className="font-bold text-xl text-white">{title}</h3>
        <div className="text-base">{description}</div>
      </div>
      <button className="btn btn-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:stroke-orange-500 stroke-white transition-all"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </a>
  )
}
