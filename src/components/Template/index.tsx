import React from "react";

export const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="card z-10 w-full bg-base-200 shadow-xl">
      {children}
      <div className="bg absolute inset-0 z-0 bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] bg-[length:161px] bg-repeat opacity-[0.02]" />
    </div>
  );
};
