// Cards.tsx
import React from "react";
import { IconType } from "react-icons";

interface CardsProps {
  text: string;
  icon: React.ComponentType;
  count: number;
}

const Cards: React.FC<CardsProps> = ({ text, icon: IconComponent, count }) => {
  return (
    <div className="max-w-xs border rounded overflow-hidden shadow-sm bg-white mx-auto mt-6">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="bg-gray-800 text-white rounded-full p-3   ">
            <IconComponent  />
          </div>
          <div className="ml-4">
            <div className="font-bold text-md">{text}</div>
          </div>
        </div>
        <div className="text-gray-700 text-base mt-2">
          <p className="text-3xl font-bold text-gray-800">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
