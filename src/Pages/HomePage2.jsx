import React from "react";
import Thread3d from "../Components/Thread3d";

const HomePage2 = () => {
  return (
    <div className="bg-[#050308] w-full h-screen">
      <Thread3d />
      <div className="absolute w-[50%] h-screen top-0 backdrop-filter backdrop-blur-sm bg-opacity-10  flex px-10   items-center  bg-[#050308]">
        <div className="text-white border">
          <p className="md:text-[45px] sm:xl text-[27px] font-semibold text-left pl-4">
            Expirence The Meataverse
          </p>
          <p className="mt-5 text-xl pl-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis
            in error repellat voluptatibus ad.
          </p>
          <button className="bg-indigo-500 mt-5 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
            Explore here
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
