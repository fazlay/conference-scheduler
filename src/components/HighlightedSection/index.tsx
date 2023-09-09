import Image from "next/image";
import React from "react";

const HighlightedSection = () => {
  return (
    <section>
      <div className="inner-container md:flex border-4 pl-6 pr-2 text-black bg-slate-200">
        <div className="left-section flex flex-col justify-between md:w-1/2 ">
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
