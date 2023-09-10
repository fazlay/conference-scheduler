import Image from "next/image";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import AOS from "aos";
import "aos/dist/aos.css";
const HighlightedSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section>
      <div className="inner-container md:flex border-4 pl-6 pr-2 text-black bg-slate-200">
        <div
          className="left-section flex flex-col justify-between md:w-1/2 pr-4 "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="my-2 md:mt=2">
            <h2 className=" text-4xl font-bold font-primary-heading">
              Heading
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, voluptatum.
            </p>
          </div>
          <div>
            <div className="my-4 md:mb-6">
              <button className="outer-button">Button</button>
            </div>
          </div>
        </div>
        <div className="right-section md:w-1/2">
          {/* <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=h9vETeRiulY"
            width="100%"
            height="100%"
          /> */}

          <Image
            src="/assets/images/stock_01.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HighlightedSection;
