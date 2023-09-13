import React, { ReactNode } from "react";

import BaseLayout from "@/layout/BaseLayout";
import HeroSection from "@/components/HeroSection";
import HighlightedSection from "@/components/HighlightedSection";
import HeaderText from "@/components/HeaderText/HeaderText";

const IndividualService = () => {
  return (
    <div className="container_margin">
      <HeroSection
        heroSubTitle="Boost Your Business"
        heroTitle="B2B LEAD GENERATION"
        heroDescription="ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta sed
        ligula nec ultricies. Nullam in varius augue  "
        homepage
      />
      <p>
        rem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta sed
        ligula nec ultricies. Nullam in varius augue. Nam placerat arcu sed
        metus maximus, eu dapibus metus sollicitudin. Aenean justo erat,
        eleifend ut sapien et, semper porta ante. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
        tristique, nulla id egestas maximus, magna nibh eleifend nunc, id
        sagittis dui neque quis quam. Suspendisse tristique, nulla id egestas
        maximus, magna nibh eleifend nunc, id sagittis dui neque quis quam.
        Nulla efficitur sem ut rhoncus ullamcorper. Pellentesque vitae arcu a
        tortor blandit ultricies vel sed tellus. Sed quam dui, ornare a purus
        at, euismod dictum lectus. Donec feugiat egestas est sit amet laoreet.
        In iaculis suscipit ex, ut commodo erat. Phasellus dictum, elit nec
        semper cursus, augue diam accumsan nisl, vel tristique diam elit eu
        lorem. Nulla commodo enim lacus, et commodo velit vulputate sit amet.
      </p>
      <HeaderText
        text="Explore Our IndividualService"
        className={"py-2"}
        titleClassName={" text-left"}
      />
      <p>
        rem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta sed
        ligula nec ultricies. Nullam in varius augue. Nam placerat arcu sed
        metus maximus, eu dapibus metus sollicitudin. Aenean justo erat,
        eleifend ut sapien et, semper porta ante. Orci varius natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse
        tristique, nulla id egestas maximus, magna nibh eleifend nunc, id
        sagittis dui neque quis quam. Suspendisse tristique, nulla id egestas
        maximus, magna nibh eleifend nunc, id sagittis dui neque quis quam.
        Nulla efficitur sem ut rhoncus ullamcorper. Pellentesque vitae arcu a
        tortor blandit ultricies vel sed tellus. Sed quam dui, ornare a purus
        at, euismod dictum lectus. Donec feugiat egestas est sit amet laoreet.
        In iaculis suscipit ex, ut commodo erat. Phasellus dictum, elit nec
        semper cursus, augue diam accumsan nisl, vel tristique diam elit eu
        lorem. Nulla commodo enim lacus, et commodo velit vulputate sit amet.
      </p>
      {[1, 2, 3.4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <div className="py-4">
          <HighlightedSection index={index} />
        </div>
      ))}
    </div>
  );
};

IndividualService.getLayout = (page: ReactNode) => {
  return <BaseLayout className="">{page}</BaseLayout>;
};

export default IndividualService;
