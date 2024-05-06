
import React from "react";

import styled from "styled-components";



const CharLeBusinessWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  
`;



export const CharLeBusiness = () => {
  return (
    <>
      <CharLeBusinessWrapper>
        <h1>찰스 기술소개</h1>
        <CharLeContentsContainer>
          <h2>Active ( 레일형 )</h2>

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
              <img src="/img/business/activeCharle1.png" alt="charle"></img>
            </div>
          </CharLeActiveLeftContainer>

          <CharLeActiveRightContainer className="charLeActive-box">
            <div className="header-number">
              <span>02</span>
            </div>
            <div className="img-container">
              <img src="/img/business/activeCharle2.png" alt="charle"></img>
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
              <img src="/img/business/activeCharle3.png" alt="charle"></img>
            </div>
          </CharLeActiveLeftContainer>

          <CharLeActiveRightContainer className="charLeActive-box">
            <div className="header-number">
              <span>04</span>
            </div>
            <div className="img-container">
              <img src="/img/business/activeCharle4.png" alt="charle"></img>
            </div>
            <div className="content-container">
              <div className="line-box">
                {/* <div className="line"></div> */}
                <span>운전자 스마트폰을 활용한 완전 무인 운영 시스템 구현</span>
              </div>
            </div>
          </CharLeActiveRightContainer>
        </CharLeContentsContainer>
      </CharLeBusinessWrapper>

    </>
  )
}