import React from "react";
import {BsBuilding, BsClock, BsWifi} from "react-icons/bs";
import {GiFlowerPot, GiDesk} from "react-icons/gi";
import {RiParkingBoxLine} from "react-icons/ri";
import {MdPool, MdOutlineFoodBank} from "react-icons/md";
import {v4} from "uuid";

const features = [
  {Icon: GiFlowerPot, name: "Garden View"},
  {Icon: BsWifi, name: "Free Wifi"},
  {Icon: RiParkingBoxLine, name: "Free Parking"},
  {Icon: MdOutlineFoodBank, name: "Kitchen"},
  {Icon: GiDesk, name: "Dedicated Workspace"},
  {Icon: MdPool, name: "Private Pool"},
];

const AboutPart = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* top part */}
      <div>
        <h2 className="text-textPrimary font-bold text-2xl mb-2 lg:max-w-[30ch]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </h2>
        <div className="flex flex-row items-center text-sm text-textPrimary gap-1">
          <span>6 Guests</span>
          <span className="block h-1 w-1 rounded-full bg-textSecondary" />
          <span>4 Bedrooms</span>
          <span className="block h-1 w-1 rounded-full bg-textSecondary" />
          <span>6 Beds</span>
          <span className="block h-1 w-1 rounded-full bg-textSecondary" />
          <span>4.5 Baths</span>
        </div>
      </div>

      <div className="w-full h-px bg-gray-400" />

      {/* Ambition part */}
      <div>
        <span className="block mb-4 text-4xl font-bold text-textPrimary">
          Our <span className="text-primary-400">ambition</span>
        </span>
        <p className="text-sm leading-[1.7]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          congue justo, elementum ut quisque velit aenean viverra. Accumsan eu,
          augue porttitor eleifend sagittis. Sed augue tincidunt leo porta
          malesuada vitae, tellus. Vitae lacinia vulputate interdum auctor cras
          imperdiet vitae lacus, sem. Vitae eget aliquam non venenatis turpis
          placerat et cursus feugiat. Morbi amet in faucibus ac ultricies
          facilisis ultrices.
        </p>
      </div>

      <div className="w-full h-px bg-gray-400" />

      {/* Established part */}
      <div className="">
        <h6 className="font-bold text-sm text-textPrimary flex flex-row items-center gap-2 mb-1">
          <BsBuilding className="text-lg" />
          <span>Established in</span>
        </h6>
        <p className="text-sm">25 November 2019</p>
        <h6 className="font-bold text-sm text-textPrimary mt-4 flex flex-row items-center gap-2">
          <BsClock className="text-lg" />
          <span>Free cancellation for 48 hours</span>
        </h6>
      </div>

      <div className="w-full h-px bg-gray-400" />

      {/* Features */}
      <div className="flex flex-col">
        <h5 className="font-bold text-textPrimary mb-4">
          What this place offers
        </h5>
        <div className="grid grid-cols-2 gap-2">
          {features.map(({Icon, name}) => (
            <span
              key={v4()}
              className="text-sm text-textPrimary flex flex-row items-center gap-2"
            >
              <Icon className="text-lg" /> {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPart;
