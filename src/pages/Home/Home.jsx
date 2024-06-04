import React,{ useEffect, useRef, useState } from "react";

import styled from "styled-components";

import { SecondeBackgroundContent } from "../../components/MainBackground/SecondBackgroundContent";
import { ThirdBackgroundContent } from "../../components/MainBackground/ThirdBackgroundContent";

const Outer = styled.div`
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Inner1 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
const Inner2 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

const Inner3 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

const BackgroundVideo = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  h4{
    width: 60%;
    height: 80px;
    background-color: rgba(160, 160, 160, 0.5); /* 투명도 적용할 색상 (검은색의 50% 투명도) */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: absolute;
    font-size: 3vw;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 900;
    word-break: keep-all;
    span{
      
      color: #d91d1d
    }
    @media screen and (max-width: 900px) {
      font-size: 4vw;
    }
    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FirstBackground = styled(Inner1)`
  
`;

const SecondBackground = styled(Inner2)`
  background-color: #111111;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThirdBackground = styled(Inner3)`
  background-color: #f9f9f9;
  display:flex;
  flex-direction: column;
  overflow: hidden;
`;

const Driver = styled.div`
    width: 100%;
    height: 5px;
    background-color: gray;
`;

export const Home = () => {
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(3);
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(1);
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <Outer ref={outerDivRef}>
      {/* <Dots currentPage={currentPage} 
        styled={{
        }}
      /> */}
      <FirstBackground >
        <BackgroundVideo className="background-video">
          <VideoElement playsInline autoPlay loop muted>
            <source src={process.env.PUBLIC_URL + "/videos/homeVideo.mp4"} type="video/mp4" />
          </VideoElement>

          {/* <h4>Char<span>L</span>e 유선 / 무선 충전 제어</h4> */}
        </BackgroundVideo>
      </FirstBackground>

      <Driver className="divider"></Driver>
      <SecondBackground className="inner bg-blue">
        <SecondeBackgroundContent/>
      </SecondBackground>

      <Driver className="divider"></Driver>
      <ThirdBackground className="inner bg-pink">
        <ThirdBackgroundContent></ThirdBackgroundContent>
      </ThirdBackground>

      <Driver className="divider"></Driver>

    </Outer>
  );
}

export default Home;



