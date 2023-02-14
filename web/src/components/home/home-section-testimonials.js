import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SoundwaveGraphic from '../../assets/testimonials-bg.inline.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper";

const TestimonialsWrapper = styled.div`
    width: 100%;
    background: ${colors.FAGrey};
    position: relative;
    height: 100%;
    overflow: hidden;
    margin-bottom: 3rem;

    .soundwaveGraphic {
        position: absolute;
        width: 200%;
        height: 100%;
    }
`

const Testimonials = ({testimonials}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + "</span>";
        },
      };

    return (
        <TestimonialsWrapper>
            <SoundwaveGraphic className="soundwaveGraphic" />
            <div style={{height: '500px'}}>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                  {testimonials && testimonials.map((testimonial, idx) => {
                    return (
                      <SwiperSlide key={idx}>
                        <h1>{testimonial.testimonial}</h1>
                        <p>{testimonial.client}</p>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
            </div>
        </TestimonialsWrapper>
    )
}

export default Testimonials