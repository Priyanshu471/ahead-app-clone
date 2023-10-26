import React from "react";

const Hero1 = () => {
  return (
    <div
      className="bg-[#e9e6fc] flex h-[720px] rounded-[2.2rem] overflow-hidden
    justify-between items-center px-[50px]"
    >
      <div className="flex flex-col">
        <h1 className="font-light">Ahead app</h1>
        <p className="font-bold text-[60px] w-[50%] flex-wrap">
          Master your life by mastering emotions
        </p>
        <div className="flex">
          <img src="/app.png" alt="" className="h-16" />
          <div className="flex flex-col justify-start">
            <img src="/rating.png" alt="" className="h-10" />
            <h1 className="text-md text-slate-600">100+ AppStore review</h1>
          </div>
        </div>
      </div>
      <div className="circle relative">
        <div className="bg-[#d9d0ff] inner-circle" />
        <img src="/Frame.svg" alt="Icon" className="phone" />
      </div>
    </div>
  );
};

export default Hero1;
