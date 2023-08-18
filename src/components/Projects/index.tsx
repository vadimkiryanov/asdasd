import React, { FC } from "react";
import projectSalt from "../../assets/image/project-salt.png";
import projectPizza from "../../assets/image/project-pizza.png";
import projectNotab from "../../assets/image/project-notab.png";
import Image, { StaticImageData } from "next/image";
import dog from "../../assets/gif/dog.gif";

export const Projects = () => {
  return (
    <div className="card z-10 w-full  overflow-hidden bg-base-200 p-10 shadow-xl">
      <Image src={dog} alt="Dog" className="absolute -right-11 -top-6  scale-[.65] brightness-[80%]" />
      <h2 className="z-20 text-2xl font-bold  text-orange-500">Projects</h2>
      <div className="z-20 mt-6 flex flex-col gap-4">
        <ProjectItem img={projectSalt} title="Salt" description="A simple project." link="https://vadimkiryanov.github.io/Salt-page/" />
        <ProjectItem img={projectPizza} title="Pizza" description="A simple project." link="https://react-market-ashen.vercel.app/" />
        <ProjectItem img={projectNotab} title="Notab" description="A simple project." link="https://vadimkiryanov.github.io/NoTab-Page/" />
      </div>
      <hr className="mt-6 bg-base-100 opacity-20" />
      <div className="z-20 mt-6 flex flex-wrap gap-4 ">
        <span className="badge rounded-lg bg-base-100 p-4 text-lg ">Web Developer</span>
        <span className="badge rounded-lg bg-base-100 p-4 text-lg">UI Desginer</span>
        <span className="badge rounded-lg bg-base-100 p-4  text-lg">UX Desginer</span>
      </div>

      <div className="bg absolute inset-0 z-0 bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] bg-[length:161px] bg-repeat opacity-[0.02]" />
    </div>
  );
};

type TProjectItem = {
  img: StaticImageData;
  title: string;
  description: string;
  link: string;
};
const ProjectItem: FC<TProjectItem> = ({ img, description, title, link }) => {
  return (
    <a href={link} target="_blank" className="group alert cursor-pointer bg-base-100 shadow-lg">
      <div className="z-20 overflow-hidden rounded-md ">
        <Image width={90} height={90} alt="Movie" src={img} className="drop-shadow-md transition-all duration-700 group-hover:scale-110" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
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
          className="stroke-white transition-all group-hover:stroke-orange-500"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </a>
  );
};
