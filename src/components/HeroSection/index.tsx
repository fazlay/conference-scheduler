import React from "react";
import styles from "./style.module.css";
interface HeroSectionProps {
  heroTitle?: string;
  heroSubTitle?: string;
  heroDescription?: string;
  homepage?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  heroTitle,
  heroSubTitle,
  heroDescription,
  homepage = false,
}) => {
  return (
    <div className={styles.hero_container}>
      {heroTitle && (
        <h1 className=" text-5xl font-bold font-primary-heading">
          {/* BUTNEXT */}
          {heroTitle.toLocaleUpperCase()}
        </h1>
      )}
      {heroSubTitle && (
        <h2 className="text-3xl font-bold font-primary-heading">
          {heroSubTitle}
          {/* B2b Lead Generation - Boost Your Business */}
        </h2>
      )}
      {heroDescription && (
        <p className="p-3 mb-2">
          {heroDescription}
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. */}
        </p>
      )}
      {homepage ? (
        <button className={styles.hero_button}>Get Started</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeroSection;
