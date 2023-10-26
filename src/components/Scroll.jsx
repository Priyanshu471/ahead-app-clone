import React, { useEffect, useRef } from "react";
import { scrollData } from "@/data/data";

const Scroll = () => {
  const scroller = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    [...container.current.children].forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.style.opacity = 1;
      });
      item.addEventListener("mouseleave", () => {
        item.style.opacity = 0.25;
      });
    });
  }, []);
  return (
    <div className="flex flex-col h-[720px] my-4 ml-5">
      <div className="mx-10 flex flex-col gap-3">
        <h1 className="text-xl opacity-80">
          Wrong with self-improvement & how we're fixing it.
        </h1>
        <h1 className="font-bold text-5xl mb-5">Self-improvement. Ugh. </h1>
      </div>
      <div className="h-[90%] max-h-max overflow-y-scroll">
        <div className="ml-14 px-20" ref={container}>
          {scrollData.map((item, i) => {
            return (
              <Content
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

const Content = ({ heading, desc, scroller }) => {
  return (
    <div
      className="flex flex-col gap-4 mx-8 w-[100%] pr-[50%] text-xl my-10 opacity-25"
      ref={scroller}
    >
      <h1 className="font-bold ">{heading}</h1>
      <p className="opacity-80">{desc}</p>
    </div>
  );
};
export default Scroll;
