

import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './thirdBackgroundContent.css';

const ContentWrapper = styled.div`

`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    h2{
        margin: 0;
        font-size: 50px;
    }
`;

const ContentContainer = styled.div`
    width: 100%; 
    height: 500px;
    opacity: 0.6;
`;

const Cover = styled.div`
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background-color: rgba(255, 255, 255, 0.8);
`;

export const ThirdBackgroundContent = () =>{
    return (
        <>
            <ContentWrapper>
                <Cover></Cover>
                <TitleContainer>
                    <h2>News /Awards</h2>

                </TitleContainer>

                <ContentContainer >
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <span>안녕하세요 </span>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
                </ContentContainer>

            </ContentWrapper>

        </>
    )
}