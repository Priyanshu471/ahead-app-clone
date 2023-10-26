import React from "react";
import { text } from "@/data/data";

const Text = ({ i }) => {
  return (
    <div className=" flex flex-row justify-between gap-5 my-[100px] mx-[50px]">
      <div className="w-[33%]">
        <h1 className="text-4xl font-bold">{text[i].heading}</h1>
      </div>
      <div className="w-[33%]">
        <p className="opacity-70 font-normal text-2xl w-[90%]">
          {text[i].desc1}
        </p>
      </div>
      <div className="w-[33%]">
        <p className="opacity-70 font-normal text-2xl w-[90%]">
          {text[i].desc2}
        </p>
      </div>
    </div>
  );
};

export default Text;
