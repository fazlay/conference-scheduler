import Footer from "@/components/Footer";
import TopNavigation from "@/components/NavBar";

const BaseLayout: React.FC<
  React.PropsWithChildren & { className?: string }
> = ({ children, className = "" }) => {
  return (
    <div className={className}>
      {/* <TopNoticeBar /> */}
      <TopNavigation />
      <div className="my-20"></div>
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
