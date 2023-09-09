import Footer from "@/components/Footer";
import TopNavigation from "@/components/NavBar";
import TopNoticeBar from "@/components/TopNoticeBar";

const BaseLayout: React.FC<
  React.PropsWithChildren & { className?: string }
> = ({ children, className = "" }) => {
  return (
    <div className={className}>
      <div className="container_margin">
        {/* <TopNoticeBar />
        <TopNavigation /> */}
      </div>

      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
