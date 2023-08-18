import { NextPage } from "next";
import React from "react";

export const Header: NextPage = () => {
  "use client";
  return (
    <div className="navbar relative z-10 mt-8 w-full max-w-5xl justify-center rounded-2xl bg-base-200 shadow-xl">
      {/*   <div className="navbar-start">
        <a className="text-xl normal-case btn btn-ghost">VJ</a>
      </div> */}
      <div className="navbar-center z-20 flex">
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
      {/*  <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
      <div className="bg absolute inset-0 z-0 bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] bg-[length:161px] bg-repeat opacity-[0.02]" />
    </div>
  );
};
