import React from "react";
import styles from "./style.module.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className={`relative border-2 border-transparent  -mt-28`} ref={ref}>
      <div
        className=" relative z-10 h-[400px] mt-20    flex flex-col justify-center items-center "
        style={{ color: "#fff", border: "none" }}
      >
        {heroTitle && (
          <h1 className="text-5xl font-bold font-primary-heading">
            {heroTitle.toLocaleUpperCase()}
          </h1>
        )}
        {heroSubTitle && (
          <h2 className="text-3xl font-bold font-primary-heading">
            {heroSubTitle}
          </h2>
        )}
        {heroDescription && <p className="p-3 mb-2">{heroDescription}</p>}
        {homepage ? (
          <button className={styles.hero_button}>Get Started</button>
        ) : (
          ""
        )}
      </div>

      <motion.div
        style={{
          backgroundImage: `url('/assets/images/home_hero.jpg')`,
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: -1,
          bottom: 0,
          top: 0,
          y: backgroundY,

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default HeroSection;
