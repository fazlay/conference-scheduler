import React from "react";
import HeroSection from "../HeroSection";
import FeaturedCompany from "./FeaturedCompany";
import HighlightedSection from "../HighlightedSection";
import OurClients from "./OurClients";
import ChooseUsCard from "./ChooseUsCard";
import Slider from "../Slider";
import BlogSlider from "@/components/BlogSlider";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCompany />
      <div className="py-8">
        <h1 className="text-4xl font-bold font-primary-heading text-left text-black ">
          How We Can Help You
        </h1>
        <p className="text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          atque explicabo ea et modi tempore laborum facere corrupti eaque
          aliquid.
        </p>
      </div>
      <HighlightedSection />
      <OurClients />
      <div className="py-8">
        <h1 className="text-4xl font-bold font-primary-heading text-left text-black ">
          Why Choose Us
        </h1>
        <div className="flex flex-row gap-x-16">
          <ChooseUsCard />
          <ChooseUsCard />
          <ChooseUsCard />
        </div>
      </div>

      <div className="py-8">
        <h1 className="text-4xl font-bold font-primary-heading text-center text-black mb-4 ">
          Our Featured Reviews
        </h1>
        <Slider />
      </div>

      <div className="py-8">
        <img
          src="/assets/images/line.png"
          height="10px"
          width={"80px"}
          alt=""
          className="-ml-4 block"
        />

        <h1 className="text-4xl font-bold font-primary-heading text-center text-black mb-4 ">
          Learning Center
        </h1>
        <BlogSlider />
      </div>
    </>
  );
};

export default HomePage;
