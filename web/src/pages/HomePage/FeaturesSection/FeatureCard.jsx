import React from "react";

const FeatureCard = ({Icon, title}) => {
  return (
    <div className="flex flex-col min-w-[250px] justify-center items-center bg-white rounded-3xl p-6 gap-4">
      <Icon className="h-[50px] w-[50px] fill-black" />
      <span className="text-black">{title}</span>
    </div>
  );
};

export default FeatureCard;
