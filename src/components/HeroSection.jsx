import React from "react";
import HeroBox from "./HeroBox";
import { LuArrowBigRight, LuArrowRightCircle } from "react-icons/lu";

function HeroSection() {
  return (
    <div className="space-y-3 py-4 max-w-[1500px] mx-auto">
      <div className="w-full flex h-[500px] px-6 gap-3">
        <div className="w-auto flex-1 min-h-full flex flex-col rounded-3xl overflow-hidden relative">
          <img
            src="./assets/mother.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-tr to-transparent from-black/45 p-10 space-y-2 flex flex-col items-start justify-end">
            <h1 className="mb-0 text-5xl font-semibold text-white">
              Dream Comfort, <br /> Unbeatable Prices!
            </h1>
            <p className="mb-0 text-lg max-w-[500px] font-normal text-white">
              Sleep better every night with comfy, quality mattresses designed
              to keep you cozy and well-rested.
            </p>
            <button className="w-fit px-5 py-2.5 bg-white rounded-full text-black font-medium text-sm">
              Explore Products
            </button>
          </div>
        </div>
        <div className="w-[400px] full flex flex-col gap-3">
          <HeroBox text="Sleek Design" img="./assets/bed2.jpg" position="top" />
          <HeroBox
            text="Comfort That Lasts"
            img="./assets/bed3.jpg"
            position="top"
          />
        </div>
      </div>
      <div className="w-full flex h-60 px-6 space-x-3">
        <div className="w-3/4 h-full flex flex-col p-4 rounded-2xl overflow-hidden relative">
          <h1 className="text-3xl font-medium max-w-[400px]">
            Don’t Wait, Sleep Better Tonight!
          </h1>
          <p className="pt-2 mb-5 max-w-[400px]">
            Shop now and enjoy unbeatable comfort, delivered straight to your
            door
          </p>
          <button className="w-fit text-main-color font-medium text-base flex items-center justify-start gap-2">
            Explore Products
            <LuArrowRightCircle />
          </button>
        </div>
        <div className="w-3/4 h-full relative">
          <HeroBox
            text="Sleek Design"
            img="./assets/bed4.jpg"
            position="bottom"
          />
        </div>
        <div className="w-3/4 h-full relative">
          <HeroBox
            text="Sleek Design"
            img="./assets/bed5.jpg"
            position="bottom"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
