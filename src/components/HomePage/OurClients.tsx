import React from "react";
import styles from "./style.module.css";

const OurClients = () => {
  return (
    <div className={styles.dotted_border}>
      <h1 className="text-4xl font-bold font-primary-heading text-center text-heading">
        Our Clients
      </h1>

      <div className=" py-8 flex justify-evenly px-4  company_image_container">
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
  );
};

export default OurClients;
