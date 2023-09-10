import BlogCard from "@/components/BlogCard";
import HeaderText from "@/components/HeaderText/HeaderText";
import HighlightedSection from "@/components/HighlightedSection";
import BaseLayout from "@/layout/BaseLayout";
import React, { ReactNode } from "react";

const BlogListPage = () => {
  return (
    <div className="container_margin">
      <HeaderText text="The ButNext Blog" className={"text-center py-0"} />

      <p className="font-bold text-sm text-center">
        Our official blog with news, technology advice,
      </p>
      <p className="font-bold text-sm text-center pb-6 ">
        and business culture
      </p>
      <HighlightedSection />

      {[1, 2, 3, 4, 5].map((item) => (
        <BlogCard />
      ))}
    </div>
  );
};

BlogListPage.getLayout = (page: ReactNode) => {
  return <BaseLayout className="">{page}</BaseLayout>;
};
export default BlogListPage;
