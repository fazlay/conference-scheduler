import React, { ReactNode } from "react";

import BaseLayout from "@/layout/BaseLayout";
import HeroSection from "@/components/HeroSection";
import HighlightedSection from "@/components/HighlightedSection";
import HeaderText from "@/components/HeaderText/HeaderText";

const Services = () => {
  return (
    <div className="container_margin">
      <HeroSection heroTitle="Services" />
      <HeaderText text="Explore Our Services" className={"text-center"} />

      <HighlightedSection />
      <HighlightedSection />
      <HighlightedSection />
    </div>
  );
};

Services.getLayout = (page: ReactNode) => {
  return <BaseLayout className="">{page}</BaseLayout>;
};

export default Services;
