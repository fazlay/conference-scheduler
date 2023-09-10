import HeaderText from "@/components/HeaderText/HeaderText";
import HeroSection from "@/components/HeroSection";
import HighlightedSection from "@/components/HighlightedSection";
import BaseLayout from "@/layout/BaseLayout";
import React, { ReactNode } from "react";

const Testimonial = () => {
  return (
    <div className="container_margin">
      <HeroSection heroTitle="Words of Trust" />
      <HeaderText
        text="Clients Share Their Working Experience With Us"
        className={"text-center"}
      />
      <HighlightedSection />
    </div>
  );
};

Testimonial.getLayout = (page: ReactNode) => {
  return <BaseLayout className="">{page}</BaseLayout>;
};
export default Testimonial;
