import React, { use, useEffect, useRef } from "react";
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
import HeaderText from "../HeaderText/HeaderText";
import { whyToChooseUsArray } from "@/constants/data.constants";
import { useScroll, useTransform } from "framer-motion";

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
      <div className="bg-white">
        <div className="line w-16 border-b-2 border-gray-500 pt-32 hidden md:block"></div>
        <div className="pb-8 container_margin !-mt-20">
          <HeaderText
            text="How We Can Help You"
            titleClassName="text-left"
            className="pb-6"
            subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          atque explicabo ea et modi tempore laborum facere corrupti eaque
          aliquid."
          />
        </div>
      </div>
      <div className="container_margin">
        <HighlightedSection />
        <OurClients />
        <HeaderText text="Our Services" className="text-center pb-2" />
        <div className="line w-full border-b-4 border-gray-500 "></div>
        <OurServices />
      </div>

      <div className="line w-16 border-b-2 border-gray-500 pt-[4.5rem] md:block hidden"></div>
      <div className="pb-8 container_margin md:!-mt-20 ">
        <HeaderText
          text="Why To Choose Us"
          titleClassName="text-left"
          className="pb-0"
        />
      </div>

      <div className="py-8">
        <div className="container_margin flex md:flex-row flex-col gap-x-16">
          {whyToChooseUsArray.map((item) => (
            <ChooseUsCard iconUrl={item.iconUrl} />
          ))}
        </div>
      </div>

      <div className="py-8">
        <HeaderText
          text="Our Featured Reviews"
          titleClassName="text-center "
          className="pb-6"
        />
        <div className="container_margin">
          <Slider />
        </div>
      </div>

      <div className="py-8">
        <div className="line w-16 border-b-2 border-gray-500 pt-12 md:block hidden"></div>
        <div className="pb-8 container_margin !-mt-5">
          <p className="text-2xl font-bold text-left text-black ">BLOG</p>

          <HeaderText
            text="Learning Center"
            titleClassName="text-left "
            className="pb-0 pt-4"
          />

          <BlogSlider />
        </div>
      </div>
    </>
  );
};

export default HomePage;
