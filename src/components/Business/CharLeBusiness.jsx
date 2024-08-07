
import React, { useContext, useRef, useState } from "react";

import styled from "styled-components";

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import ReactPlayer from 'react-player';
import { PolarBusiness } from "./PolarBusiness";
import { CharLeEvi } from "./CharLeEvi";
import { LanguageContext } from "../../context/languageContext";

const CharLeBusinessWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 35px;
    margin-bottom: 10px;
    padding: 30px 0 30px 0;
  }
  @media (max-width: 450px) {
    padding: 0 0px 0 0px;
    margin-bottom: 30px;
  }
  span{
    margin-bottom: 60px;
  }
`;

const CharLeContentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  h2{
    padding: 0 30px 0 30px;
    font-size: 25px;
  }
  .content-title{
    display: flex;
    align-items: center;
    h2{
    padding: 0 30px 0 10px;
    font-size: 25px;
    }
  }
  @media (max-width: 450px) {
    .content-title{
      display: flex;
      align-items: center;
      justify-content: center;
      h2{
        padding: 0 30px 0 10px;
        font-size: 25px;
      }
    }
  }
`;

const CharLeActiveLeftContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
  position: relative;
  .header-number{
    position: absolute;
    top: 0;
    left: 15px;
    span{
      color: #cacaca;
      font-size: 140px;
      font-weight: 800;
      opacity: 0.4;
    }
  }
  .content-container{
    height: 400px;
    margin-left: 30px;
    flex: 1;
  }
  .line-box{
    display: flex;
    margin-top: 120px;
    margin-right: 20px;
    flex: 1;
    .line{
      width: 30px;
      height: 4px;
      background-color: #222222;
      margin-right: 20px;
    }
    span{
      font-weight: 700;
      font-size: 30px;
      color: #222222;
      word-break: normal;
      z-index: 9;
    }
  }
  .img-container{
    height: 400px;
    flex: 1;
    margin-right: 30px;
    img{
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  @media (max-width: 950px) {
    .line-box{
      span{
        font-weight: 700;
        font-size: 25px;
        color: #222222;
        word-break: normal;
        z-index: 9;
      }
    }
  }
  
`;

const CharLeActiveRightContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
  position: relative;
  .header-number{
    position: absolute;
    top: 0;
    right: 15px;
    span{
      color: #cacaca;
      font-size: 140px;
      font-weight: 800;
      opacity: 0.4;
    }
  }
  .content-container{
    height: 400px;
    margin-right: 30px;
    flex: 1;
  }
  .line-box{
    display: flex;
    margin-top: 120px;
    margin-left: 20px;
    justify-content: end;
    flex: 1;
    .line{
      width: 30px;
      height: 4px;
      background-color: #222222;
      margin-right: 20px;
    }
    span{
      font-weight: 700;
      font-size: 30px;
      color: #222222;
      word-break: normal;
      z-index: 9;
    }
  }
  .img-container{
    height: 400px;
    flex: 1;
    margin-left: 30px;
    img{
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  @media (max-width: 950px) {
    .line-box{
      span{
        font-weight: 700;
        font-size: 25px;
        color: #222222;
        word-break: normal;
        z-index: 9;
      }
    }
  }
  
`;

const ActiveProsConstainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin-bottom: 60px;
  h2{
    padding: 0 30px 0 30px;
    font-size: 25px;
  }
  .activeProps-title{
    display: flex;
    align-items: center;
    h2{
      padding: 0 30px 0 30px;
      font-size: 25px;
    }
  }
  .ActivePropsImg-container{
    width: 100%;
 
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: "20px";
    img{
      max-width: 460px;
      margin: 10px;
      width: 45%;
      height: 500px;
      object-fit: cover;
      min-width: 415px;
    }
    @media (max-width: 540px) {
      flex-direction: column;
      img{
        margin: 10px;
        width: 90%;
        height: auto;
        object-fit: cover;
        min-width: 0px;
      }
    }
  }
`;


const CharLeTitleVedioContainer = styled.div`
  width: 90%;
  display: flex;
  overflow: hidden;
  position: relative;
  margin-top: 40px;
  margin-bottom: 100px;
  .play-btn{
    transform: translate( -50%, -50% );
    opacity: .7;
    width: 80px;
    height: 80px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    border-radius: 90px;
    border-style: solid;
    border-width: 2px;
    border-color: #FFFFFF;
    font-size: 3rem;
    text-align: center;
    line-height: 75px;
  }
`;

const VideoTextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  .text-box{
    display: flex;
    align-items: center;
    h2{
      font-size: 25px;
      padding: 0 30px 0 30px;
    }
  }

`;

const ContentTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  h2{
    font-size: 35px;
    color: #7f7f7f;
    margin-bottom: 10px;
  }
`;

const DividerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Line = styled.hr`
  width: 40%;
  height: 5px;
  background-color: #d3d3d3;
  border: none;
  margin: 20px 0;
  border-radius: 5px;

`


export const CharLeBusiness = () => {
  const {isLanguage, setIsLanguage} = useContext(LanguageContext);
  const [ playing, setPlaying ] = useState(false);
  const videoState = useRef(null);
  const [ ready, setReady ] = useState(false);
  const [ curr, setCurr ] = useState(
    'https://youtu.be/sqgxcCjD04s?si=ePXJiYzUtjTZ7g_e',
  );

  const onEnded = () => {
    setCurr('https://youtu.be/ZXmoJu81e6A?si=cqMWOLxy-4PF0dxg');
    setPlaying(true);
  };

  const playVideo = () =>{
    setPlaying((prev)=>!prev)
  };


  return (
    <>
      <CharLeBusinessWrapper>
        <h1>{isLanguage === 20 ? "찰리 기술소개" : "CharLe Technologies"}</h1>

        <ContentTitleContainer>
          <h2>{isLanguage === 20 ? "찰리 봇 2" : "CharLe Bot 2"}</h2>
        </ContentTitleContainer>
        <DividerContainer>
            <Line/>
          </DividerContainer>
        <CharLeContentsContainer>
          <div className="content-title">
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>
              {isLanguage === 20 ? 
              "Polar 전극단자기술 기반의 Active ( 레일형 )" 
              :
              "Charle Polar Precision AI Docking System"}
            </h2>
          </div>

          <CharLeActiveLeftContainer className="charLeActive-box">
            <div className="header-number">
              <span>01</span>
            </div>
            <div className="content-container">
              <div className="line-box">
                {/* <div className="line"></div> */}
                <span>
                  {isLanguage === 20 ?  
                  "표준 자가 유도 충전 기술 확장한 IoT기반 무선 충전 시스템" 
                  : 
                  "LoT based wireless charging system with expanded standard magnetic induction charging technology"} 
                </span>
              </div>
            </div>
            <div className="img-container">
              <img src={ process.env.PUBLIC_URL + "/img/business/activeCharle1.png"} alt="charle"></img>
            </div>
          </CharLeActiveLeftContainer>

          <CharLeActiveRightContainer className="charLeActive-box">
            <div className="header-number">
              <span>02</span>
            </div>
            <div className="img-container">
              <img src={ process.env.PUBLIC_URL + "/img/business/activeCharle2.png"} alt="charle"></img>
            </div>
            <div className="content-container">
              <div className="line-box">
                {/* <div className="line"></div> */}
                <span>
                  {isLanguage === 20 ? 
                  "지하 주차장용 AI무인 무선 충전 로봇 개발" 
                  :
                  "Development of AI Unmanned Wireless Charging Robot for Underground Parking Lot"}
                </span>
              </div>
            </div>
          </CharLeActiveRightContainer>

          <CharLeActiveLeftContainer className="charLeActive-box">
            <div className="header-number">
              <span>03</span>
            </div>
            <div className="content-container">
              <div className="line-box">
                {/* <div className="line"></div> */}
                <span>
                {isLanguage === 20 ? 
                "최적 효율 충전을 위한 전기차 무선 충전 최적 좌표 검출"
                : 
                "Detecting optimal coordinates for wireless charging of electric vehicles for optimal efficiency charging"}
                </span>
              </div>
            </div>
            <div className="img-container">
              <img src={ process.env.PUBLIC_URL + "/img/business/activeCharle3.png"} alt="charle"></img>
            </div>
          </CharLeActiveLeftContainer>

          <CharLeActiveRightContainer className="charLeActive-box">
            <div className="header-number">
              <span>04</span>
            </div>
            <div className="img-container">
              <img src={ process.env.PUBLIC_URL + "/img/business/activeCharle4.png"} alt="charle"></img>
            </div>
            <div className="content-container">
              <div className="line-box">
                {/* <div className="line"></div> */}
                <span>
                {isLanguage === 20 ?
                  "운전자 스마트폰을 활용한 완전 무인 운영 시스템 구현"
                  :
                  " Implementation of a fully unmanned operating system using smartphones"}          
                </span>
              </div>
            </div>
          </CharLeActiveRightContainer>
        </CharLeContentsContainer>

        <ActiveProsConstainer>
          <div className="activeProps-title">
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>{isLanguage === 20 ? 
            "찰리 무선 충전 기술 Active 장점"
            : 
            "CharLe Wireless Charging Technology Active Advantage"}
            </h2>
          </div>
          <div className="ActivePropsImg-container">
            <img src={ process.env.PUBLIC_URL + "/img/business/charleActive.png"} alt="pros"></img>
            <img src={ process.env.PUBLIC_URL + "/img/business/HyundaiActive.png"} alt="pros" style={{marginTop:"20px"}}></img>
          </div>
        </ActiveProsConstainer>

        <VideoTextContainer >
          <div className="text-box">
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>
            {isLanguage === 20 ? 
            "찰리 무선 충전 기술" 
            : 
            "CharLe Wireless Charging Technology"} 
            </h2>
          </div>
        </VideoTextContainer>
        <CharLeTitleVedioContainer>
            <ReactPlayer
              ref={videoState}
              url={process.env.PUBLIC_URL + "/videos/CharLeBot2.mp4"}
              className='player' // 클래스 이름 지정하여 스타일 적용
              playing={playing} // 재생 상태, true = 재생중 / false = 일시 정지
              controls={true} // 유튜브 재생 컨트롤바 노출 여부
              onEnded={onEnded} // 현재 재생 중인 영상 종료 시 호출
              onReady={() => setReady(true)} // 영상이 로드되어 준비된 상태
              width="100%" 
              height="auto" 
              muted={true}
              playIcon={<button>Play</button>}
              style={{ objectFit: "cover", borderRadius:" 20px", position: "relative" }}
            >
            </ReactPlayer>
        </CharLeTitleVedioContainer>

        <CharLeContentsContainer>
          <ContentTitleContainer>
            <h2>
              {isLanguage === 20 ? 
              "찰리 폴라" 
              : 
              "CharLe Polar"}
            </h2>
          </ContentTitleContainer>
          <DividerContainer>
            <Line/>
          </DividerContainer>
            <PolarBusiness/>
        </CharLeContentsContainer>

        <CharLeContentsContainer>
          <ContentTitleContainer>
            <h2>
            {isLanguage === 20 ? 
              "찰리 Evi"
              :
              "CharLe Evi"}
            </h2>
          </ContentTitleContainer>

          <DividerContainer>
            <Line/>
          </DividerContainer>

            <CharLeEvi/>
        </CharLeContentsContainer>

      </CharLeBusinessWrapper>

    </>
  )
}