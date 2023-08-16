import React from "react";
import avatar from "../../assets/image/avatar.png";
import Image from "next/image";

export const Projects = () => {
  return (
    <div className="card bg-base-200  shadow-xl  z-10 w-full p-10">
      <h2 className="text-2xl text-orange-500 font-bold  z-20">Projects</h2>
      <div className="flex flex-col gap-4 z-20 mt-6">
        <Alert />
        <Alert />
        <Alert />
      </div>
      <hr className="mt-6 opacity-20 bg-base-100" />
      <div className="flex flex-wrap gap-4 mt-6 z-20 ">
        <span className="badge p-4 rounded-lg bg-base-100 text-lg ">
          Web Developer
        </span>
        <span className="badge p-4 rounded-lg bg-base-100 text-lg">
          UI Desginer
        </span>
        <span className="badge p-4 rounded-lg bg-base-100  text-lg">
          UX Desginer
        </span>
      </div>

      <div className="bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] absolute inset-0 opacity-[0.02] bg z-0 bg-[length:161px] bg-repeat" />
    </div>
  );
};

const Alert = () => {
  return (
    <div className="alert shadow-lg bg-base-100 cursor-pointer">
      <Image width={90} height={90} alt="Movie" src={avatar} />
      <div>
        <h3 className="font-bold text-xl text-white">Project</h3>
        <div className="text-base">Lorem ipsum dolor sit amet consectetur elit. </div>
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
          className="hover:stroke-orange-500 stroke-white transition-all"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};
