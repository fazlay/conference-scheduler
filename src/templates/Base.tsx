import Footer from "@/components/Footer";
import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import HighlightedSection from "@/components/HighlightedSection";
import Slider from "@/components/Slider";

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {/* <Hero /> */}
    <HighlightedSection />
    {/* <VerticalFeatures />
    <Banner /> */}
    <Slider />
    <Footer />
  </div>
);

export { Base };
