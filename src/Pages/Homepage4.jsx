import React from "react";
import Navbar from "../Components/Navbar";  

const Homepage4 = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute grid grid-cols-2 -z-10 inset-0 -space-x-10 opacity-40">
        <div class="border blur-[106px] h-56 bg-gradient-to-r from-[#9333EA] to-purple-400 dark:from-blue-700 mr-10">
          hello
        </div>
        <div class="border blur-[106px] h-56 bg-gradient-to-r from-cyan-400 to-sky-300 dark:from-blue-700 mr-10">
          hello
        </div>
      </div>

      {/* mainsectionn */}
      <Navbar />

      {/* heading section */}

      <div className="flex justify-evenly  sm:my-12  ">
        {/* first heading section */}
        <div className="px-20 ">
          <p className="sm:font-bold sm:text-[51px]  text-[17px]">
            Shaping a world with
            <br />{" "}
            <span className="text-purple-600">infinite possibilities</span>
          </p>
          {/* description section */}
          <p className="mt-5 text-[17px]  sm:max-w-[850px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            incidunt nam itaque sed eius modi error totam voluptatem, quas
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
          </p>

          {/* buttom navigation section */}
          <div className="flex gap-3 justify-center mt-10">
            <button className="sm:w-[150px] rounded-3xl py-3 border bg-purple-700 text-white font-semibold">Explore</button>
            <button className="sm:w-[150px] rounded-3xl py-3 border bg-[#F4EAFD] text-purple-700 font-semibold">learn more</button>
          </div>

        </div>
      </div>


      <div className="sm:w-full border border-gray-200 px-[20] "></div>

      {/* additional section  */}
      <div className="flex justify-around mt-12">
          <div className="flex flex-col gap-3 text-left">
            <p className="text-xl text-gray-500 font-semibold">Lowest Price in market</p>
            <p>some text here</p>
          </div>

          <div className="flex flex-col gap-3 text-left">
            <p className="text-xl text-gray-500 font-semibold">The fastest on the market</p>
            <p>some text here</p>
          </div>

          <div className="flex flex-col gap-3 text-left">
            <p className="text-xl text-gray-500 font-semibold">The most loved</p>
            <p>some text here</p>
          </div>
      </div>
    </div>
  );
};

export default Homepage4;
