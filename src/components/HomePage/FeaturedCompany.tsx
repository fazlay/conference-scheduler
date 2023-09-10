import React from "react";

const FeaturedCompany = () => {
  return (
    <div className="py-4 mt-4">
      <h1 className="text-4xl font-bold font-primary-heading text-center text-heading">
        Featured
      </h1>
      <div className=" bg-background-primary py-8  px-4 ">
        <div
          className=" flex justify-evenly company_image_container"
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
