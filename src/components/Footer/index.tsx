import React from "react";

export const Footer = () => {
  return (
    <footer className="card z-10 w-full rounded-b-none bg-base-200 p-10 shadow-xl">
      <h4 className="z-20 text-center text-2xl text-orange-500">VJ</h4>
      <div className="navbar-center  z-20 flex justify-center">
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
      <hr className="bg-base-100 opacity-10" />
      <span className="mt-4 text-center text-sm">Copyright © Vados Jenkins</span>

      <div className="bg absolute inset-0 z-0 bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] bg-[length:161px] bg-repeat opacity-[0.02]" />
    </footer>
  );
};
