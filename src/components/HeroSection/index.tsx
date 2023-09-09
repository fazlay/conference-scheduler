import React from "react";
import styles from "./style.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero_container}>
      <h1 className=" text-5xl font-bold font-primary-heading">BUTNEXT</h1>
      <h2 className="text-3xl font-bold font-primary-heading">
        B2b Lead Generation - Boost Your Business
      </h2>
      <p className="p-3 mb-2">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <button className={styles.hero_button}>Get Started</button>
    </div>
  );
};

export default HeroSection;
