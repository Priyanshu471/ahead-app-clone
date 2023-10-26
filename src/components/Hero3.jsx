import React from "react";

const Hero3 = () => {
  return (
    <div
      className="bg-[#EDF8FE] flex flex-col h-[720px] rounded-[2.2rem] overflow-hidden
    justify-center items-center px-[50px] my-4 py-24 gap-16 relative "
    >
      <div className="text-center">
        <p className="text-xl font-light opacity-90 mb-4">
          Let your friends, family, and co-workers (anonymously) rate your
          skills.
        </p>
        <h1 className="font-bold text-5xl">
          Ever wondered what others think of you?
        </h1>
      </div>
      <img src="/Steps.svg" alt="" className="my-5" />
      <img src="/Anonymous.svg" alt="" className="w-[650px] drop-shadow-lg" />
    </div>
  );
};

export default Hero3;
