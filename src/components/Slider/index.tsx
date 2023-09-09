import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import HighlightedSection from "../HighlightedSection";
import "swiper/css/navigation";
import { useRef } from "react";

const Slider = () => {
  const navigationPrevRef = useRef("");
  const navigationNextRef = useRef("");
  return (
    <Swiper
      spaceBetween={50}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      modules={[Navigation]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <HighlightedSection />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightedSection />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightedSection />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightedSection />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightedSection />
      </SwiperSlide>
      <SwiperSlide>
        <HighlightedSection />
      </SwiperSlide>
      <div ref={navigationPrevRef} className="cursor-pointer">
        p
      </div>
      <div ref={navigationNextRef} className="cursor-pointer">
        N
      </div>
    </Swiper>
  );
};

export default Slider;
