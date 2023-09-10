import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="inner-container md:flex pl-6  text-black bg-slate-50 my-4">
      <div className="left-section flex flex-col justify-between md:w-1/2 pr-4">
        <div className="my-2 md:mt=2">
          <h2 className=" text-3xl font-bold pb-4 font-primary-heading">
            Lorem, ipsum dolor sit amet consectetur
          </h2>
          <p className="font-bold">Lorem ipsum</p>
          <p className="font-bold pb-4">August 20,2023</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
        </div>
        <div>
          <div className="my-4 md:mb-6 hover:text-primary cursor-pointer">
            <p className="underline underline-offset-8 font-semibold">
              {" "}
              Read More ....
            </p>
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
  );
};

export default BlogCard;
