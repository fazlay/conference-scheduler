import BaseLayout from "@/layout/BaseLayout";
import { ReactNode } from "react";
import HomePage from "@/components/HomePage";

const Index = () => <HomePage />;

Index.getLayout = (page: ReactNode) => {
  return <BaseLayout className="">{page}</BaseLayout>;
};

export default Index;
