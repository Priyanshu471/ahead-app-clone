import React, { useState, useEffect } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 16) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <div className="py-4"></div>
      <div
        className={` navbar bg-white h-16 w-[100vw] flex items-center justify-between ${
          scroll ? "sticky top-0" : "relative"
        }`}
      >
        <div className="flex items-start justify-center">
          <img
            src="/logo.jpg"
            alt="Icon"
            className="m-4 rounded-xl"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-row items-center gap-10">
          <a href="#" rel="noopener noreferrer">
            Emotions
          </a>
          <a href="#" rel="noopener noreferrer">
            Manifesto
          </a>
          <a href="#" rel="noopener noreferrer">
            Self-awareness test
          </a>
          <a href="#" rel="noopener noreferrer">
            Work with us
          </a>
        </div>
        <div>
          <button className="rounded-full bg-black text-white p-4 pl-8 pr-8 mr-10">
            Download app
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
