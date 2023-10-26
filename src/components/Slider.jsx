import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { sliderCard } from "@/data/data";
// const heading = [
//   "You argue with a colleague",
//   "Heading 1",
//   "Heading 2",
//   "Heading 3",
//   "Heading 4",
//   "Heading 5",
// ];
// const desc = [
//   "You get angry and defencice, instead of staying open and working towards commmon ground",
//   "Desc 1",
//   "Desc 2",
//   "Desc 3",
//   "Desc 4",
//   "Desc 5",
// ];
// const bgcolor = [
//   "bg-cyan-100",
//   "bg-red-100",
//   "bg-indigo-400",
//   "bg-yellow-100",
//   "bg-blue-100",
//   "bg-purple-100",
// ];

const Slider = () => {
  return (
    <div className="p-2 relative">
      <h1 className="text-[56px] font-bold mb-4 mx-[40px]">
        Does this sound familiar...{" "}
      </h1>

      <div className="min-w-max max-w-max overflow-x-scroll">
        <div
          className="p-10 mb-2 flex gap-8"
          // ref={slider}
        >
          {sliderCard.map((item, i) => {
            return (
              <Card
                key={i}
                heading={item.heading}
                desc={item.desc}
                color={item.color}
                i={i}
                rotated={i == 4 || i == 2 ? true : false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Card = ({ heading, desc, color, i, rotated }) => {
  return (
    <div
      className={`card flex flex-col gap-4 w-[410px] h-[260px] ${color} rounded-3xl p-10 mb-10 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 ${
        rotated ? "-rotate-6 z-10" : ""
      } } `}
    >
      <img src={`/emoji${i + 1}.svg`} alt="" className="w-10 mb-3" />
      <div className="flex flex-col items-start gap-3">
        <h1 className="font-bold text-[18px]">{heading}</h1>
        <p className="font-light flex-wrap opacity-75">{desc}</p>
      </div>
    </div>
  );
};

export const SliderBg = () => {
  return (
    <div
      className=' flex h-[320px] rounded-[2.2rem] overflow-hidden
                justify-between items-center px-[50px]"'
    ></div>
  );
};

export default Slider;
