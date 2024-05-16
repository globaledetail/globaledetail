import React from "react";

import styled from "styled-components";

import BuildIcon from '@mui/icons-material/Build';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';

const VisionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px 0 80px;
  h1{
    font-size: 35px;
    margin-bottom: 40px;
    padding: 30px 0 30px 0;
  }
  @media (max-width: 450px) {
    padding: 0 0 0 0;
  }

`;

const VisionContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo-container{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    overflow: hidden;
  }
  .text-container{
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span{
      margin-top: 20px;
      font-size: 20px;
      min-width: 280px;
      line-height : 2;
      word-wrap: break-word;
      margin-bottom: 50px;
    }
    .president-name{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      font-weight: 700;
      min-width: 280px;
      margin-bottom: 60px;
    }
  }
`;

const CompanyVelueContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1{
    margin-top: 50px;
    margin-bottom: 5px;
  }
  img{
    width: 100%;
    height: 250px;
    border-radius: 20px;
    object-fit: cover;
  }
  .core-value-container{
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    place-items: center; /* 그리드 아이템을 중앙에 배치 */
    gap: 20px; /* 요소 사이의 간격 */
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 20px;
    .value{
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 130px;
      flex: 1;
      border: 0.5px solid gray;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
      span{
        font-size: 25px;
        font-weight: 800;
      }

    }
  }
`;

const ResultValueContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 300px;
  img{
    margin: 20px 0 60px 0;
    width: 100px;
    height: 100px;
    object-fit: contain;
    opacity: 0.7;
  }
  .result{
    width: 250px;
    height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    flex: 1;
    border: 5px solid #1eca6c;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    span{
      font-size: 20px;
      font-weight: 800;
      color: #1eca6c;
    }
  }
`;


export const VisionContent = () => {
  return (
    <>
      <VisionWrapper>
        <h1>회사 비전</h1>
        <VisionContentContainer>
          <div className="logo-container">
            <img src={ process.env.PUBLIC_URL + "/img/fullLogo.png"} alt="logo"></img>
          </div>
          <div className="text-container">
            <span>
            다가올 기술들에 앞서 새로운 패러다임아래,시장을 선도하는 차별화된 
            혁신 기술력을 바탕으로 사회와 기업이 함께 성장 할 수 있는 끊임없는 
            노력과 R&D 중심의 기술력으로 더 나은 삶의 가치를 만들어 가도록 하겠습니다.
            </span>
            <p className="president-name">
              ㈜지이디 대표이사 강동연
            </p>
          </div>
        </VisionContentContainer>

        <CompanyVelueContainer>
          <img src={ process.env.PUBLIC_URL + "/img/charle.png"} alt="charle"></img>
          <h1>핵심가치</h1>
          <h2>글로벌 기업으로 나아기가기 위한 핵심가치 </h2>
          <div className="core-value-container">
            <div className="value">
              <AssignmentIcon sx={{ fontSize: '60px', color: "#a4a4a4" }}></AssignmentIcon>
              <span>노력</span>         
            </div>
            <div className="value">
              <BuildIcon sx={{ fontSize: '60px', color: "#a4a4a4" }}></BuildIcon>
              <span>기술력</span>         
            </div>
            <div className="value">
              <PeopleIcon sx={{ fontSize: '60px', color: "#a4a4a4" }}></PeopleIcon>
              <span>소통</span>         
            </div>
          </div>
        </CompanyVelueContainer>

        <ResultValueContainer>
          <img src={ process.env.PUBLIC_URL + "/img/arrow.png"} alt="arrow"></img>
          <div className="result">
            <PublicIcon sx={{ fontSize: '60px', color: "#1eca6c" }}></PublicIcon>
            <span>더 나은 삶의 가치</span>  
          </div>
        </ResultValueContainer>

      </VisionWrapper>
        
    </>
  )
}