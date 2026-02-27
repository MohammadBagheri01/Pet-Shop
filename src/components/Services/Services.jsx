import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { allServices } from "../../data/services";
import { CgEditBlackPoint } from "react-icons/cg";
import "swiper/css";
import "swiper/css/free-mode";
import "./Services.scss";

function Services() {
  return (
    <Swiper
      spaceBetween={20}
      freeMode={true}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={6000}
      modules={[FreeMode, Autoplay]}
      className="mySwiper"
      breakpoints={
        {
            320:{slidesPerView:1},
            480:{slidesPerView:3},
            768:{slidesPerView:4},
            1024:{slidesPerView:6},
        }
      }
    >
      {allServices.map((item, index) => (
        <SwiperSlide key={index}><CgEditBlackPoint />{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Services;
