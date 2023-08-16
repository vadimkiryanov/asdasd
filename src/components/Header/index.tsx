import { NextPage } from "next"
import React from "react"

export const Header: NextPage = () => {
  "use client"
  return (
    <div className="z-10 justify-center w-full max-w-5xl mt-8 shadow-xl navbar bg-base-200 rounded-2xl relative">
      {/*   <div className="navbar-start">
        <a className="text-xl normal-case btn btn-ghost">VJ</a>
      </div> */}
      <div className="z-20 flex navbar-center">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      {/*  <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
      <div className="bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] absolute inset-0 opacity-[0.02] bg z-0 bg-[length:161px] bg-repeat" />
    </div>
  )
}
