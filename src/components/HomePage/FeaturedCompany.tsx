import React from "react";
import HeaderText from "../HeaderText/HeaderText";

const FeaturedCompany = () => {
  return (
    <div className=" bg-white mt-8">
      <HeaderText text="Featured" className="text-center" />
      <div className=" bg-background-primary py-8  px-4 ">
        <div
          className=" flex md:flex-row flex-col md:justify-evenly gap-4 items-center company_image_container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <img
              className="company_image"
              src="/assets/images/i01_partners_1.png"
              alt="partnered company"
              height="100px"
              width="120px"
            />
          </div>
          <div>
            <img
              className="company_image"
              src="/assets/images/i02_partners_3.png"
              alt="partnered company"
              height="100px"
              width="120px"
            />
          </div>
          <div>
            <img
              className="company_image"
              src="/assets/images/i03_partners_4.png"
              alt="partnered company"
              height="100px"
              width="120px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompany;
