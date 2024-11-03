"use client";

import Image from "next/image";

const HeroCard = ({ hero, onViewClick }) => {
  return (
    <div className="bg-[#2A2A2A] rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden mx-auto w-full">
      <div className="flex items-center p-4">
        <div className="relative">
          <Image
            src={hero.image_thumb_male}
            alt={hero.name}
            width={120}
            height={120}
            className="rounded-lg shadow-md"
          />
          <span className="absolute top-1 left-1 bg-[#2A2A2A] text-white text-xs font-semibold py-1 px-2 rounded-full">
            #{hero.id}
          </span>
        </div>
        <div className="ml-4 flex-1">
          <h2 className="text-xl font-semibold text-[#FFFFFF] mb-1">
            {hero.name}
          </h2>
          <div className="bg-[#353535] rounded-md p-2 mb-2">
            <p className="text-sm text-bold text-[#FFFFFF] text-center">
              {hero.type}
            </p>
          </div>
          <div className="bg-[#353535] rounded-md p-2 mb-2">
            <p className="text-sm text-[#FFFFFF] text-center">
              {hero.genre}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => onViewClick(hero.id)}
          className="bg-[#08A170] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#0BBF7A] transition duration-200 w-5/6"
        >
          View
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
