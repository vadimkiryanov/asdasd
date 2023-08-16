import React from "react";

export const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card bg-base-200   shadow-xl z-10 w-full">
      {children}
      <div className="bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] absolute inset-0 opacity-[0.02] bg z-0 bg-[length:161px] bg-repeat" />
    </div>
  );
};
