import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

const HighlightedSection = () => {
  return (
    <section className="py-12">
      <div className=" md:flex  text-black">
        <div className="left-section flex flex-col justify-between md:w-1/2 pr-4">
          <Image
            src="/assets/images/stock_01.jpg"
            alt="Picture of the author"
            width={600}
            height={600}
          />
        </div>
        <div className="right-section md:w-1/2  bg-slate-50">
          {/* <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=h9vETeRiulY"
            width="100%"
            height="100%"
          /> */}
          <div className="my-2 md:mt=2 p-4">
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
        </div>
      </div>
    </section>
  );
};

export default HighlightedSection;
