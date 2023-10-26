import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-12 mb-20">
      <div className="flex flex-col justify-center items-center">
        <img
          src="/logo.jpg"
          alt="Icon"
          className="m-4 rounded-xl"
          width={80}
          height={80}
        />
        <h1 className="font-bold text-indigo-600 text-4xl">ahead</h1>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center justify-center">
          <img src="/location.svg" alt="" />
          <span>Auguststraße 26, 10117 Berlin</span>
        </div>
        <div className="flex items-center justify-center">
          <img src="/mail.svg" alt="" />
          <span>hi@ahead-app.com</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <img src="/app.png" alt="" className="h-16" />
        <span className="opacity-80">
          © 2022 Ahead app, all rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
