import React from "react"

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
      <div className="flex flex-wrap gap-4 mt-6 z-20">
        <span className="badge p-4 rounded-lg bg-base-100  ">UI Desginer</span>
        <span className="badge p-4 rounded-lg bg-base-100  ">UX Desginer</span>
        <span className="badge p-4 rounded-lg bg-base-100  ">Web Developer</span>
        <span className="badge p-4 rounded-lg bg-base-100  ">Product Manager</span>
        <span className="badge p-4 rounded-lg bg-base-100  ">labore numquam dicta</span>
      </div>

     

      <div className="bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] absolute inset-0 opacity-[0.02] bg z-0 bg-[length:161px] bg-repeat" />
    </div>
  )
}

const Alert = () => {
  return (
    <div className="alert shadow-lg bg-base-100 ">
      <img alt="Movie" src="https://framerusercontent.com/images/b5HcLGiq8nXy29HRuyCjLcs90.svg" />
      <div>
        <h3 className="font-bold">Project</h3>
        <div className="text-xs">Description</div>
      </div>
      <button className="btn btn-sm">See</button>
    </div>
  )
}
