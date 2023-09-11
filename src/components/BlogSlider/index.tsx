import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import SingleBlog from "./SingleBlog";

const BlogSlider = () => {
  const swiperRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="">
      <div className="flex justify-end pt-4 gap-4 mr-8">
        <div
          ref={navigationPrevRef}
          className="cursor-pointer "
          onClick={handlePrevSlide}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div
          ref={navigationNextRef}
          className="cursor-pointer"
          onClick={handleNextSlide}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(navigationPrevRef.current)}
      >
        <SwiperSlide>
          <SingleBlog />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog />
        </SwiperSlide>
        <SwiperSlide>
          <SingleBlog />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BlogSlider;
