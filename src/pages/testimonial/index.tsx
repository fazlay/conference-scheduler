import HeaderText from "@/components/HeaderText/HeaderText";
import HeroSection from "@/components/HeroSection";
import HighlightedSection from "@/components/HighlightedSection";
import VideoCard from "@/components/VideoCard";
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
      <HeaderText
        text="Discover the Voice of Our Satisfied Clients"
        className="text-center"
      />
      <div className="flex flex-col md:flex-row md:gap-6">
        {[1, 2, 3].map((item) => (
          <VideoCard />
        ))}
      </div>
    </div>
  );
};

Testimonial.getLayout = (page: ReactNode) => {
  return <BaseLayout className="">{page}</BaseLayout>;
};
export default Testimonial;
