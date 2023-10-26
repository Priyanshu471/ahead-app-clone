import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { work } from "@/data/data";
const Hero5 = () => {
  const scroller = useRef(null);
  const container = useRef(null);

  return (
    <div
      className="bg-[#F3F1FF] flex h-[750px] rounded-[2.2rem] 
      justify-between items-center px-[50px] my-4 py-24 gap-16 relative overflow-hidden"
    >
      <div>
        <h1 className="font-bold text-5xl mb-10">Work with us</h1>
        <div className="bg-white  w-[550px] p-8 rounded-t-2xl shadow-xl">
          <img src="/ghost-icon.svg" alt="" className="w-8 mb-5" />
          <h1 className="font-bold text-2xl mb-3">About</h1>
          <p className="text-xl opacity-80">
            At ahead our goal is to make self-improvement fun and lasting. We
            know there's a way how to make it work. And that's what ahead is all
            about!
          </p>
        </div>
        <div className="bg-[#FEF6F1] rounded-2xl w-[550px] p-8 -mt-2 shadow-xl">
          <h1 className="font-bold text-2xl mb-3">Products</h1>
          <p className="text-xl opacity-80">
            At ahead our goal is to make self-improvement fun and lasting. We
            know there's a way how to make it work. And that's what ahead is all
            about!
          </p>
        </div>
      </div>
      <h1 className="font-bold text-indigo-600 text-5xl mb-10 mr-6 absolute top-16 right-10">
        ahead
      </h1>
      <div className="h-[550px] max-h-max overflow-y-scroll flex flex-col mt-36">
        <div className="ml-14 px-20" ref={container}>
          {work.map((item, i) => {
            return (
              <Card
                heading={item.heading}
                desc={item.desc}
                key={i}
                scroller={scroller}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Card = ({ heading, desc, scroller }) => {
  return (
    <div
      className=" card bg-white w-[460px] p-12 rounded-2xl shadow-md mb-8"
      ref={scroller}
    >
      <h1 className="font-bold mb-4 text-xl">{heading}</h1>
      <p className="opacity-80 text-lg">{desc}</p>
    </div>
  );
};

export default Hero5;
