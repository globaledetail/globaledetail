
import React from "react";

import styled from "styled-components";

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

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
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: "20px";
    img{
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


export const CharLeBusiness = () => {
  return (
    <>
      <CharLeBusinessWrapper>
        <h1>찰리 기술소개</h1>
        <CharLeContentsContainer>
          <div className="content-title">
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>Polar 전극단자기술 기반의 Active ( 레일형 )</h2>
          </div>

          <CharLeActiveLeftContainer className="charLeActive-box">
            <div className="header-number">
              <span>01</span>
            </div>
            <div className="content-container">
              <div className="line-box">
                {/* <div className="line"></div> */}
                <span>표준 자가 유도 충전 기술 확장한 IoT기반 무선 충전 시스템 </span>
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
                <span>지하 주차장용 AI무인 무선 충전 로봇 개발</span>
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
                <span>최적 효율 충전을 위한 전기차 무선 충전 최적 좌표 검출</span>
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
                <span>운전자 스마트폰을 활용한 완전 무인 운영 시스템 구현</span>
              </div>
            </div>
          </CharLeActiveRightContainer>
        </CharLeContentsContainer>

        <ActiveProsConstainer>
          <div className="activeProps-title">
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>찰리 무선 충전 기술 Active 장점</h2>
          </div>
          <div className="ActivePropsImg-container">
            <img src={ process.env.PUBLIC_URL + "/img/business/charleActive.png"} alt="pros"></img>
            <img src={ process.env.PUBLIC_URL + "/img/business/hyundaiActive.png"} alt="pros" style={{marginTop:"20px"}}></img>
          </div>
        </ActiveProsConstainer>
      </CharLeBusinessWrapper>

    </>
  )
}