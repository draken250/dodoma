import React from "react";

function HeroBox({text, img, position}) {
  return (
    <div className="w-full h-full flex rounded-3xl overflow-hidden relative">
      <img src={img} className="w-full h-full object-cover object-bottom" />
      <div className={`absolute top-0 left-0 z-10 w-full h-full ${position === 'top' ? 'bg-gradient-to-br' : 'bg-gradient-to-tr'} to-transparent from-black/65 p-8 space-y-2 flex flex-col items-start ${position === 'top' ? 'justify-start' : 'justify-end'}`}>
        <h1 className="mb-0 text-3xl font-medium text-white max-w-[180px]">
           {text}
        </h1>
      </div>
    </div>
  );
}

export default HeroBox;
