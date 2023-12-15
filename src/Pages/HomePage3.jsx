import React from "react";
import backgroundMainImage from "../assests/backgroud4.jpg";
import Navbar from "../Components/Navbar";

//homepage for mittiland website

const HomePage3 = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="absolute w-full h-full -z-10">
        <img src={backgroundMainImage} alt="" className="w-full h-full object-cover  " />
      </div>
      <div className="">
        <Navbar/>
      </div>

      <div className="mt-[8%] px-[8%] text-left ">
        <div className=" text-[60px] font-bold text-white">
        <p className="gap-0">Experience <br/> the <span className="text-green-500">Future</span> <br /> of Reality</p>
         <p className="text-[17px] font-normal tracking-tight">Discover a new Dimension of <br />Entertainment and Education</p>
        </div>

        <div className="flex gap-5 mt-6">
          <button className="w-[150px] py-3 font-semibold text-white rounded-md bg-green-500">Shop</button>
          <button className="w-[150px] py-3 font-semibold text-white rounded-md bg-gray-500">Explore</button>

        </div>
      </div>
    </div>
  );
};

export default HomePage3;
