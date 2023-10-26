import React from "react";

const Hero2 = () => {
  return (
    <div
      className="bg-[#FEF6F1] flex h-[720px] rounded-[2.2rem] overflow-hidden
    justify-between items-center px-[50px] my-4 pr-0 gap-10 relative"
    >
      <div className="flex flex-col w-[50%]">
        <p className="text-xl font-light opacity-75 mb-7">
          Built out of frustration
        </p>
        <h1 className="text-5xl font-bold mb-12">Meet the ahead app</h1>
        <img src="/Ghost.svg" alt="" className="w-80 mx-16" />
      </div>
      <div className="opacity-70 flex flex-col gap-5 text-2xl w-[40%] absolute right-16">
        <p>
          A personalized pocket coach that provides bite-sized, science-driven
          tools to boost emotional intelligence.
        </p>
        <p>
          Think of it as a pocket cheerleader towards a better, more fulfilling.
        </p>
      </div>
    </div>
  );
};

export default Hero2;
