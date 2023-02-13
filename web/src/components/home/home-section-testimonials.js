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

const Testimonials = (props) => {

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
                  <SwiperSlide>
                    <h1>"Fresh Air makes bloomin' brilliant podcasts! Seriously, that's all we wanted and the team has delivered"</h1>
                    <p>Kate Atkinson, IRESS.</p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h1>“Fresh Air really helped us understand best to connect with our customers through storytelling”</h1>
                    <p>The Energy Podcast - Shell</p>
                  </SwiperSlide>
                </Swiper>
            </div>
        </TestimonialsWrapper>
    )
}

export default Testimonials