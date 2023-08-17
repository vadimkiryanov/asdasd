import React from "react"

export const Footer = () => {
  return (
    <footer className="card bg-base-200 rounded-b-none shadow-xl  z-10 w-full p-10">
      <h4 className="text-2xl text-orange-500 text-center z-20">VJ</h4>
      <div className="navbar-center  flex justify-center z-20">
        <ul className="menu menu-horizontal px-1">
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
      <hr className="opacity-10 bg-base-100" />
      <span className="text-center mt-4 text-sm">Copyright © Vados Jenkins</span>

      <div className="bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] absolute inset-0 opacity-[0.02] bg z-0 bg-[length:161px] bg-repeat" />
    </footer>
  )
}
