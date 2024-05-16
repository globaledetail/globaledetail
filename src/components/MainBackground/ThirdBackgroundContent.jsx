

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
    background: linear-gradient(to right, #999999, transparent); /* 왼쪽 흐릿한 부분 */
    z-index: 8;
`;
const OverLayRight = styled.div`
    background-color: #ffffff;
    width: 38%; 
    height: 500px; 
    filter: blur(20px);
    opacity: 0.9;
    clip-path: inset(0 round 20px);
    background: linear-gradient(to left, #999999, transparent); /* 왼쪽 흐릿한 부분 */
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
        grid-template-columns: repeat(3, 1fr); 
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
// news awards 부분을 news로 변경, awards 이모티콘 제거 -> news 이모티콘으로 변경 

    return (
        <>
            <ContentWrapper>
                <TitleContainer>
                    <h2>News </h2>
                </TitleContainer>

                <ContentContainer >
                    <OverLayContainer>
                        <OverLayLeft></OverLayLeft>
                        <OverLayRight></OverLayRight>
                    </OverLayContainer>
                    <Swiper	  
                        initialSlide= "4"
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
                            {/* NEWS1 */}
                            <img className="icon" src={ process.env.PUBLIC_URL +"/img/icons/news.png" }></img>
                            <div className="slide-container">
                                <a href="https://n.news.naver.com/article/029/0002674819" target='_blank'> 
                                    <img src="/img/news/news1.jpg" alt="news"/> 
                                </a>
                            </div>
                            <a href="https://n.news.naver.com/article/029/0002674819" target='_blank'>  
                                ㈜지이디GED 찰스 주니어, 빅데이터 기반 스마트 충전 시대 연다.
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* NEWS2 */}
                            <img className="icon" src={process.env.PUBLIC_URL +"/img/icons/news.png" }></img>
                            <div className="slide-container">
                                <a href="https://n.news.naver.com/article/015/0004261919" target='_blank'> 
                                    <img src="/img/news/news2.jpg" alt="news"/> 
                                </a>
                            </div>
                            <a href="https://n.news.naver.com/article/015/0004261919" target='_blank'>  
                                중소상공인총연합회-지이디, ‘모바일광고 지원 프로젝트’ 협약 체결
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* NEWS3 */}
                            <img className="icon" src={process.env.PUBLIC_URL + "/img/icons/news.png"}></img>
                            <div className="slide-container">
                                <a href="https://n.news.naver.com/article/018/0004271926" target='_blank'> 
                                    <img src="/img/news/news3.png" alt="news"/> 
                                </a>
                            </div>
                            <a href="https://n.news.naver.com/article/018/0004271926" target='_blank'>  
                                지이디, 완전 무선 충전시대 대비한 특허 기술 취득
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* NEWS4 */}
                            <img className="icon" src={ process.env.PUBLIC_URL + "/img/icons/news.png"}></img>
                            <div className="slide-container">
                                <a href="https://www.news1.kr/articles/?5367331" target='_blank'> 
                                    <img src="/img/news/news4.png" alt="news"/> 
                                </a>
                            </div>
                            <a href="https://www.news1.kr/articles/?5367331" target='_blank'>  
                                지이디, 전극단자 모듈형 충전시스템 '찰리-Polar' 특허·출시 예고
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* AWARD2 */}
                            <img className="icon" src={process.env.PUBLIC_URL + "/img/icons/awards.png"}></img>
                            <div className="slide-container">
                                <a href="https://www.hankyung.com/article/2024031533555" target='_blank'> 
                                    <img src="/img/awards/award2.png" alt="news"/> 
                                </a>
                            </div>
                            <a href="https://www.hankyung.com/article/2024031533555" target='_blank'>  
                                지이디 찰리 기술, '2024 독일IF 어워드 최종 Winner' 본상 수상
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* AWARD1 */}
                            <img className="icon" src={process.env.PUBLIC_URL + "/img/icons/awards.png"}></img>
                            <div className="slide-container">
                                <a href="https://www.gukjenews.com/news/articleView.html?idxno=2599665" target='_blank'> 
                                    <img src="/img/awards/award1.png" alt="news"/> 
                                </a>
                            </div>
                            <a href="https://www.gukjenews.com/news/articleView.html?idxno=2599665" target='_blank'>  
                                23' 발명특허대전 찰리충전기술 "특허청장상 수상"
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* NEWS5 */}
                            <img className="icon" src={process.env.PUBLIC_URL + "/img/icons/news.png"}></img>
                            <div className="slide-container">
                                <a href="https://it.chosun.com/news/articleView.html?idxno=2019032201667" target='_blank'> 
                                    <img src="/img/news/news5.jpg" alt="news"/> 
                                </a>
                            </div>
                            <a href="https://it.chosun.com/news/articleView.html?idxno=2019032201667" target='_blank'>  
                                지이디 GED, 스마트차징 기술 및 서비스 해외시장 공급 가속화
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* NEWS6 */}
                            <img className="icon" src={ process.env.PUBLIC_URL + "/img/icons/news.png"}></img>
                            <div className="slide-container">
                                <a href="https://www.etnews.com/20191213000205" target='_blank'> 
                                    <img src="/img/news/news6.jpg" alt="news"/> 
                                </a>
                            </div>
                            <a href="https://www.etnews.com/20191213000205" target='_blank'>  
                                국내기술로 탄생한 ‘찰스 무선충전 특허기술’ 해외 진출
                            </a>
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
                        <img src={ process.env.PUBLIC_URL + "/img/logo/joongang.png"} alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src={ process.env.PUBLIC_URL + "/img/logo/nicePay.png"} alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src={ process.env.PUBLIC_URL + "/img/logo/galaxia.png"} alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src={ process.env.PUBLIC_URL +"/img/logo/iClick.png"} alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src={ process.env.PUBLIC_URL + "/img/logo/samsung.png"} alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src={process.env.PUBLIC_URL + "/img/logo/danal.png"} alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer">
                        <img src={ process.env.PUBLIC_URL + "/img/logo/hyosung.png"} alt="joongang-logo"></img>
                    </div>
                    <div className="logoContainer" >
                        <img src={ process.env.PUBLIC_URL + "/img/logo/KG.png"} alt="joongang-logo"></img>
                    </div>
                </PartnersContainer>
            </ContentWrapper>
        </>
    )
}
