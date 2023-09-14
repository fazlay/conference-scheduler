import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import dynamic from "next/dynamic";
import "aos/dist/aos.css";

interface HighlightedSectionProps {
  index?: number;
}

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
const HighlightedSection: React.FC<HighlightedSectionProps> = ({
  index = 1,
}) => {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
  return (
    <section>
      <div className="inner-container min-h-96 my-6 block md:flex border-4  pr-2 text-black bg-slate-200">
        <div
          className={`left-section flex flex-col justify-between md:w-1/2 pr-4 md:order-${
            index % 2 == 0 ? 2 : 1
          }`}
        >
          <div className="pt-12 pb-6 px-6 md:pt-6 ">
            <h2 className="text-3xl font-bold font-primary-heading uppercase text-left">
              TREMENDOUS SERVICE
            </h2>
            <p className="text-left py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </div>
          <div className=" pb-6 px-6 ">
            <div className="my-4 md:mb-6">
              <button className="outer-button">Button</button>
            </div>
          </div>
        </div>
        <div
          className={`right-section md:w-1/2 flex  md:order-${
            index % 2 == 0 ? 1 : 2
          }`}
        >
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=h9vETeRiulY"
            width="100%"
            height="100%"
          />

          {/* <Image
          src="/assets/images/stock_01.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
        </div>
      </div>
    </section>
  );
};

export default HighlightedSection;
