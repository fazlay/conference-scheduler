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
        <p className={styles.text}>Hello World</p>
      </div>
      <div className={styles.container}>
        <img
          src="/assets/images/home_hero.jpg"
          alt="Avatar"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.container}>
        <img
          src="/assets/images/home_hero.jpg"
          alt="Avatar"
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
};

export default OurServices;
