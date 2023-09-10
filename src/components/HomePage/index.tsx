import React, { useEffect } from "react";
import HeroSection from "../HeroSection";
import FeaturedCompany from "./FeaturedCompany";
import HighlightedSection from "../HighlightedSection";
import OurClients from "./OurClients";
import ChooseUsCard from "./ChooseUsCard";
import Slider from "../Slider";
import BlogSlider from "@/components/BlogSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import OurServices from "../OurServices";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="container_margin">
        <HeroSection
          heroTitle={"BUTNEXT"}
          heroSubTitle={"B2b Lead Generation - Boost Your Business"}
          heroDescription={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          }
          homepage
        />
        <FeaturedCompany />
      </div>
      <div className="line w-16 border-b-2 border-gray-500 pt-12"></div>
      <div className="pb-8 container_margin !-mt-7">
        <h1 className="text-4xl font-bold font-primary-heading text-left text-black ">
          How We Can Help You
        </h1>
        <p className="text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          atque explicabo ea et modi tempore laborum facere corrupti eaque
          aliquid.
        </p>
      </div>
      <div className="container_margin">
        <HighlightedSection />
        <OurClients />
        {/* </div> */}
        <div className="py-8">
          <h1 className="text-4xl font-bold font-primary-heading text-center text-black mb-4 ">
            Our Services
          </h1>
          <div className="line w-full border-b-4 border-gray-500 pt-12"></div>
          {/* <div className="container_margin"> */}
          <OurServices />
        </div>
      </div>

      <div className="line w-16 border-b-2 border-gray-500 pt-12"></div>
      <div className="pb-8 container_margin !-mt-7">
        <h1 className="text-4xl font-bold font-primary-heading text-left text-black ">
          Why To Choose Us
        </h1>
      </div>

      <div className="py-8">
        <div className="container_margin flex flex-row gap-x-16">
          <ChooseUsCard />
          <ChooseUsCard />
          <ChooseUsCard />
        </div>
      </div>

      <div className="py-8">
        <h1 className="text-4xl font-bold font-primary-heading text-center text-black mb-4 ">
          Our Featured Reviews
        </h1>
        <div className="container_margin">
          <Slider />
        </div>
      </div>

      <div className="py-8">
        <div className="line w-16 border-b-2 border-gray-500 pt-12"></div>
        <div className="pb-8 container_margin !-mt-4">
          <p className="text-2xl font-bold font-primary-heading text-left text-black ">
            BLOG
          </p>
          <h1 className="text-4xl font-bold font-primary-heading text-center text-black mb-4 ">
            Learning Center
          </h1>
          <BlogSlider />
        </div>
      </div>
    </>
  );
};

export default HomePage;
