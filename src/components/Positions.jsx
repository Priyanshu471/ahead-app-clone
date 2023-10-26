import React from "react";
import { jobDetails } from "@/data/data";

const Open = () => {
  return (
    <div className="flex flex-col mx-6 my-10 border-b-2 pb-[120px]">
      <h1 className="text-5xl font-bold mb-8">Open vacancies</h1>
      <div className="flex  gap-12 mx-10 ">
        {jobDetails.map((item, i) => {
          return <Card key={i} {...item} />;
        })}
      </div>
    </div>
  );
};
const Card = ({ name, type, location, compensation }) => {
  return (
    <div className="flex flex-col items-start gap-3 bg-[#faf6e2] p-8 rounded-2xl shadow-md cursor-pointer transition-all duration-300 ease-in">
      <h1 className="text-[24px] ">{name}</h1>
      <li className="text-[16px] pl-2">{location}</li>
      <li className="text-[16px] pl-2">{type}</li>
      <li className="text-[16px] pl-2">{compensation}</li>
    </div>
  );
};

export default Open;
