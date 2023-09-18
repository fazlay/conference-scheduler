import Image from "next/image";
import React from "react";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="flex md:flex-row max-w-screen-2xl mx-auto">
      <div className="left_section ">
        <h1 className="text-9xl font-bold text-blue_dark text-right leading-none">
          React
        </h1>
        <h1 className="text-9xl font-bold text-blue_dark text-right leading-none">
          Conference
        </h1>
        <div className="flex flex-row pt-16">
          <div>
            <Image
              src="/assets/images/hero/side_image.png"
              alt="Picture of the author"
              width={600}
              height={600}
            />
          </div>
          <div>
            <p className=" text-lg">
              Lorem uis diam turpis quam id fermentum.In quis diam turpis quam
              id fermentum..id fermentum.In quis diam turpis quam id fermentum.
            </p>
            <button className=" py-4 px-28 bg-yellow-primary rounded-full text-lg font-semibold">
              Buy Tickets
            </button>
          </div>
        </div>
      </div>
      <div className="right_section flex items-end">
        <Image
          src="/assets/images/hero/hero_image.png"
          alt="Picture of the author"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};

export default HeroSection;
