import React from "react";
import AboutPart from "./AboutPart";
import RoomsView from "./RoomsView";

const Description = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-[1.3fr_1fr] mb-8 gap-10">
      <AboutPart />
      <RoomsView />
    </section>
  );
};

export default Description;
