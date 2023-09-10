import Image from "next/image";
import React from "react";
import styles from "./ourServices.module.css";

const OurServices = () => {
  const imageUrl = "/assets/images/home_hero.jpg"; // Replace with the actual URL of your image

  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // position: "relative",
  };

  return (
    <div className="flex flex-row mt-8 ">
      <div className={styles.container}>
        <img
          src="/assets/images/home_hero.jpg"
          alt="Avatar"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
        <div className={styles.titleText}>
          <h4 className="text-3xl font-bold font-primary-heading px-4 ">
            B2B Lead Generation
          </h4>
          <p className="px-4 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            provident quidem temporibus numquam consectetur aspernatur
            perferendis consequuntur odit assumenda{" "}
          </p>
        </div>

        <p className={styles.text}>
          More about social media marketing &#10230;
        </p>
      </div>
      <div className={styles.container}>
        <img
          src="/assets/images/home_hero.jpg"
          alt="Avatar"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
        <div className={styles.titleText}>
          <h4 className="text-3xl font-bold font-primary-heading px-4 ">
            B2B Lead Generation
          </h4>
          <p className="px-4 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            provident quidem temporibus numquam consectetur aspernatur
            perferendis consequuntur odit assumenda{" "}
          </p>
        </div>

        <p className={styles.text}>
          More about social media marketing &#10230;
        </p>
      </div>
      <div className={styles.container}>
        <img
          src="/assets/images/home_hero.jpg"
          alt="Avatar"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
        <div className={styles.titleText}>
          <h4 className="text-3xl font-bold font-primary-heading px-4 ">
            B2B Lead Generation
          </h4>
          <p className="px-4 pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            provident quidem temporibus numquam consectetur aspernatur
            perferendis consequuntur odit assumenda{" "}
          </p>
        </div>

        <p className={styles.text}>
          More about social media marketing &#10230;
        </p>
      </div>
    </div>
  );
};

export default OurServices;
