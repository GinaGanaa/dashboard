import React, { useState } from "react";

export const Pricing = ({ plan }) => {
  const { quality, pay, price, setup, button, freeTrial, features } = plan;

  // State to store the index of the selected feature
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(null);

  // Handle click on a feature
  const handleFeatureClick = (index) => {
    // Toggle the selection: if it's already selected, unselect it, otherwise select it
    setSelectedFeatureIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="w-[350px] h-[848px] bg-white rounded-[24px] text-center pt-[40px]">
      <p className="font-medium text-[22px]">{quality}</p>
      <p className="text-[16px] opacity-80">{pay}</p>
      <p className="text-[46px] font-semibold text-[#4880FF]">{price}</p>
      <hr className="w-[300px] h-[2px] border-none bg-black opacity-10 mt-[39px]" />
      <p>{setup}</p>

      {/* Features list with click functionality */}
      <ul>
        {features.map((feature, index) => {
          const isAvailable = feature.available; // Check availability
          const isSelected = index === selectedFeatureIndex; // Check if the current feature is selected

          return (
            <li
              key={index}
              className={`pt-[30px] ${isAvailable ? "" : "text-gray-500"} ${
                isSelected
                  ? "border-1 border-blue-500 px-[3px] py-[2px] cursor-pointer"
                  : ""
              }`}
              onClick={() => handleFeatureClick(index)} // Set feature as selected on click
            >
              {Object.values(feature)[0]}
            </li>
          );
        })}
      </ul>

      <hr className="w-[300px] h-[2px] border-none bg-black opacity-10 mt-[39px]" />

      <button className="w-[180px] h-[60px] border-[#4880FF] border-2 rounded-[30px] text-[#4880FF] mt-[40px]">
        {button}
      </button>

      <p className="underline underline-offset-2 text-lg pt-[24px]">
        {freeTrial}
      </p>
    </div>
  );
};
