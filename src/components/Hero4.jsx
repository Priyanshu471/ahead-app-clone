import React from "react";

const Hero4 = () => {
  return (
    <div
      className=" flex flex-col h-[720px] rounded-[2.2rem] overflow-hidden
    justify-center items-center px-[50px] my-4 py-10 relative "
    >
      <div className="text-center flex flex-col gap-5 w-[50%] px-8 items-center">
        <h2 className="text-xl font-light opacity-90">
          We take privacy seriously
        </h2>
        <h1 className="text-5xl font-bold">Before you get started</h1>
        <h3 className="text-2xl opacity-80">
          "We won't share your answers with anyone (and won't ever tell you
          which friends said what about you)"
        </h3>
        <div className="flex text-center">
          <h2 className="text-xl my-3">with love,</h2>
          <img src="/Sign.svg" className=" w-36 opacity-80 " />
        </div>
        <button className="rounded-full bg-black text-white p-4 w-36">
          Start a test
        </button>
        <span>Take only 5 minutes</span>
      </div>
    </div>
  );
};

export default Hero4;
