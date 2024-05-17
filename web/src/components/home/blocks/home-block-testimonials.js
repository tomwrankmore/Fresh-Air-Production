import React from "react";
import * as styles from "./home-block-testimonials.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SoundwaveGraphic from "../../../assets/testimonials-bg.inline.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper";

const HomeBlockTestimonials = ({ data }) => {

  const testimonials = data.homePageTestimonials;

  const pagination = {
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + "</span>";
    }
  };

  return (
    <div className={styles.testimonialsWrapper}>
      <SoundwaveGraphic className={styles.soundwaveGraphic} />
      <div style={{ height: "500px" }}>
        <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
          {testimonials &&
            testimonials.map((testimonial, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <h1 className="text-white mb-12 max-w-[75%] font-bold text-xl md:text-2xl lg:text-4xl">{testimonial.testimonial}</h1>
                  <p>{testimonial.client}</p>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBlockTestimonials;
