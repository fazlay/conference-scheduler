import React from "react";

import HeroSection from "../HeroSection";
import TimelineView from "../TimelineView";

import "aos/dist/aos.css";

const HomePage = ({ conferences }) => {
  return (
    <>
      <div className="container_margin">
        <HeroSection />

        <TimelineView conferences={conferences} />
      </div>
    </>
  );
};

export default HomePage;
