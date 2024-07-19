
import React, { useRef, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { LanguageContext } from "../../context/languageContext";

const PolarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0px 0 0px;
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
  @media (min-width: 1536px) {
    padding: 0 30px 0 30px;
  }
`;

const RoofTitleVedioContainer = styled.div`
  width: 85%;
  display: flex;
  overflow: hidden;
  position: relative;
  margin-top: 40px;
  margin-bottom: 50px;
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

const PolarContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    padding: 0 30px 0 30px;
    font-size: 25px;
  }
  .polar-content-parent-flex{

  }
  .content-title{
    width: 100%;
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

const ContentContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 550px;
  display: flex;
  @media screen and (max-width: 1000px ){
    flex-direction: column ;
    height: 1350px;
  }
  @media screen and (max-width: 800px ){
    flex-direction: column ;
    height: 1250px;
  }
  @media screen and (max-width: 650px ){
    flex-direction: column ;
    height: 1050px;
  }
  .content{
    flex: 1;
    height: 550px;
    padding: 20px;
    .img-container{
      flex: 1;
      img{
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    .text-container{
      height: auto;
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 0 20px 20px 20px;
      span{
        height: 200px;
        margin-top: 20px;
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 0;
        line-height: 35px;
        word-break: keep-all;
      }
    }
  }
  @media screen and (max-width: 450px ){    
    height: 850px;
    flex-direction: column ;
    .content{
      height: 350px;
      .text-container{
        span{
          font-size: 20px;
        }
      }
    }
  }

`;

const PtagStyle = styled.p`
  margin-bottom: 10px;
  margin-top: 5px;
  font-size: 25px;
  font-weight: 600;
  word-break: keep-all;
  @media screen and (max-width: 1000px ){

  }
`

export const CharLeRoof = () => {
  const { isLanguage, setIsLanguage } = useContext(LanguageContext);
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
      <PolarWrapper>
        <h1>{isLanguage === 20 ? "찰리 루프" : "CharLe Roof"}</h1>
        <PolarContentWrapper>

          <div className="content-title">
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>{isLanguage === 20 ? "찰리 루프" : "CharLe Roof"}</h2>
          </div>

          <RoofTitleVedioContainer>
            <ReactPlayer
              ref={videoState}
              url={process.env.PUBLIC_URL + "/videos/charLeRoof1.mp4"}
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
          </RoofTitleVedioContainer>
          <h2 style={{ marginBottom: "70px",wordBreak: "keep-all", marginTop: "0px" }}>
            
            {isLanguage === 20 ?
            "비상시 사용 가능한 비상탈출 구조가 가능한 세계 최초로 전기차 비상문 찰리루프"
            :
            "CharLe Roof, the world's first electric vehicle emergency door that can be used in an emergency"
            }
          </h2>
          
          <div className="content-title">
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>{isLanguage === 20 ? "찰리 루프 메커니즘" : "CharLe Roof Mechanism"}</h2>
          </div>

          <ContentContainer style={{ height: "auto", marginBottom: "100px"}}>
            <div style={{flex: 6, padding: "20px"}}>
              <img style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "20px" }} 
                src={process.env.PUBLIC_URL + "/img/charLeRoof/CharLeRoof1.png"} 
                alt="bot">
              </img>
            </div>
            <div style={{flex: 4, padding: "50px", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
              <PtagStyle>{isLanguage === 20 ?  "⦁ 상시 비전기식 구조":"⦁ Non-Electrical Structure at All Time" }</PtagStyle>
              <PtagStyle>{isLanguage === 20 ?  "⦁ 일정한 충격 값에서 작동":"⦁ Open at constant impact value" }</PtagStyle>
              <PtagStyle>{isLanguage === 20 ?  "⦁ 상시 수동으로 개/폐 가능":"⦁ Manual Open at all times"}</PtagStyle>
              <PtagStyle>{isLanguage === 20 ?  "⦁ 구조자 반자동 개방 기능":"⦁ Helpers Semi-Automatic Open Features"}</PtagStyle>
              <PtagStyle>{isLanguage === 20 ?  "⦁ 문닫힘 현상 대비 가능":"⦁ Can be prepared for closing the door"}</PtagStyle>
              <PtagStyle>{isLanguage  === 20 ?  "⦁ 개폐 방향 설정 간편":"⦁ Easy to set opening and closing directions"}</PtagStyle>
            </div>
          </ContentContainer>

          <ContentContainer>
            <div className="content">
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + "/img/charLeRoof/frontOpen.png"} alt="bot"></img>
              </div>
              <div className="text-container">
                <span>{isLanguage === 20 ? "전면 개폐식" : "Front opening/closing type"} </span>
              </div>
            </div>

            <div className="content">
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + "/img/charLeRoof/sideOpen.png"} alt="bot"></img>
              </div>
              <div className="text-container">
                <span>{isLanguage === 20 ?  "좌우 개폐식" : "Left and right opening/closing type"}</span>
              </div>
            </div>
          </ContentContainer>

          <ContentContainer>
            <div className="content">
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + "/img/charLeRoof/emergency.png"} alt="bot"></img>
              </div>
              <div className="text-container">
                <span>{isLanguage === 20 ? "비상시 사용 가능한 비상탈출" : "An emergency roof"}</span>
              </div>
            </div>
            <div className="content">
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + "/img/charLeRoof/sunRoof.png"} alt="bot"></img>
              </div>
              <div className="text-container">
                <span>{isLanguage === 20 ? "썬루프 타입의 비상문" : "Sun roof Integrated Emergency Door"}</span>
              </div>
            </div>
          </ContentContainer>

          <div className="content-title" style={{marginTop: "50px"}}>
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>{isLanguage === 20 ? "4EverS 시스템" : "4EverS System"}</h2>
          </div>
          <RoofTitleVedioContainer>
            <ReactPlayer
              ref={videoState}
              url={process.env.PUBLIC_URL + "/videos/charLeRoof2.mp4"}
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
          </RoofTitleVedioContainer>

        </PolarContentWrapper>
      </PolarWrapper>
    
    </>
  )
}