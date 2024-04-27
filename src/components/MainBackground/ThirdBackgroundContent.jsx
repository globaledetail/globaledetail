

import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './thirdBackgroundContent.css';

const ContentWrapper = styled.div`
    margin-top: 70px;
    flex: 1;
    @media (max-width: 400px) {
        height: 300px;
    }
`;
const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    h2{
        margin: 0;
        font-size: 45px;
        margin-top: 20px;
        @media (max-width: 400px) {
            margin: 0;
            font-size: 35px;
        }
    }
    @media (max-width: 400px) {
        margin-bottom: 10px;
    }
`;
const ContentContainer = styled.div`
    width: 100%; 
    height: 400px;
    position: relative;
`;

const OverLayContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;  
    position: absolute;
`;
const OverLayLeft = styled.div`
    /* background-color: #ffffff; */
    width: 38%; 
    height: 400px; 
    filter: blur(20px);
    opacity: 0.9;
    clip-path: inset(0 round 20px); 
    background: linear-gradient(to right, #b0b0b0, transparent); /* 왼쪽 흐릿한 부분 */
    z-index: 8;
`;
const OverLayRight = styled.div`
    background-color: #ffffff;
    width: 38%; 
    height: 500px; 
    filter: blur(20px);
    opacity: 0.9;
    clip-path: inset(0 round 20px);
    background: linear-gradient(to left, #b0b0b0, transparent); /* 왼쪽 흐릿한 부분 */
    z-index: 8;
`;

const PartnersContainer  = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4열 그리드 생성 */
    gap: 40px; /* 그리드 아이템 사이의 간격 설정 */
    .logoContainer {
        width: 200px;
        height: 85px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
    }
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr); 
    }
    @media (max-width: 400px) {
        width: 80%;
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 4열 그리드 생성 */
        gap: 30px; /* 그리드 아이템 사이의 간격 설정 */
        .logoContainer {
            width: 75px;
            height: 35px;
        }
    }
`;

const partnersName = [
    {name: "중앙일보"}, {name: "Nicepay"},
    {name: "Galaxia"}, {name: "Iclick"},
    {name: "Samsung"}, {name: "Danal"},
    {name: "HyoSung"}, {name: "KG이니시스"},
]

export const ThirdBackgroundContent = () =>{

    return (
        <>
            <ContentWrapper>
                <TitleContainer>
                    <h2>News /Awards</h2>
                </TitleContainer>

                <ContentContainer >
                    <OverLayContainer>
                        <OverLayLeft></OverLayLeft>
                        <OverLayRight></OverLayRight>
                    </OverLayContainer>
                    <Swiper	  
                        initialSlide= "5"
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
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
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
            <ContentWrapper>
                <TitleContainer>
                    <h2>Partners</h2>
                </TitleContainer>
                <PartnersContainer>
                    <div className="logoContainer">
                        <img src="/img/logo/joongang.png" alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src="/img/logo/nicePay.png" alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src="/img/logo/galaxia.png" alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src="/img/logo/iClick.png" alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src="/img/logo/samsung.png" alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src="/img/logo/danal.png" alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src="/img/logo/hyosung.png" alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer" >
                        <img src="/img/logo/KG.png" alt="joongang-logo"></img>
                    </div>
                </PartnersContainer>
            </ContentWrapper>
        </>
    )
}