import HeroSection from "@/components/HeroSection";
import HighlightedSection from "@/components/HighlightedSection";
import React, { ReactNode } from "react";
import OurValues from "./OurValues";
import StatementMessage from "@/components/Statement";
import ItemCard from "@/components/ItemCard";
import Slider from "@/components/Slider";
import BaseLayout from "@/layout/BaseLayout";

const AboutUs = () => {
  return (
    <div className="container_margin">
      <HeroSection heroTitle="About Us" />
      <div className="py-12"></div>
      <HighlightedSection />
      <OurValues />
      <StatementMessage />

      <div className="py-12 flex gap-16 ">
        {[1, 2, 3].map((item) => (
          <ItemCard
            cardIcon={"/assets/images/on_Time_Delivery.png"}
            cardTitle={"Lead-to-Revenue Focus"}
            cardDescription={
              "Lorem 20 years of experience in B2B lead generation, we know what it takes to drive revenue for your business. We focus on the metrics that matter most to your bottom line, including opportunities and revenue generated."
            }
          />
        ))}
      </div>
      <div className="py-12">
        <h1 className="text-4xl font-bold font-primary-heading text-center text-black mb-4 ">
          Our Featured Reviews
        </h1>
        <Slider />
      </div>
    </div>
  );
};
AboutUs.getLayout = (page: ReactNode) => {
  return <BaseLayout className="">{page}</BaseLayout>;
};
export default AboutUs;
