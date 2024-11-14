import React from "react";

function HeroSection() {
  return (
    <div className="space-y-4 bg-white" >
      <div className="w-full flex h-fit px-6 space-x-4 bg-blue-400">
        <div className="w-2/3 h-full flex">
          <img
            src="./assets/mother.jpg"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="w-1/3 min-h-full flex flex-col bg-green-300 space-y-4">
          <div className="w-full h-1/2 flex bg-red-300 p-3"></div>
          <div className="w-full h-1/2 flex bg-red-300 p-3"></div>
        </div>
      </div>
      <div className="w-full flex h-60 px-6 space-x-3 bg-yellow-300">
        <div className="w-3/4 h-full flex bg-green-300 p-4"></div>
        <div className="w-full h-full flex bg-red-300 p-3"></div>
        <div className="w-full h-full flex bg-red-300 p-3"></div>
      </div>
    </div>
  );
}

export default HeroSection;
