


import React from "react";

import styled from "styled-components";
import { IntroCompanyContent } from "../components/Intro/IntroCompanyContent";

const IntroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const IntroImgContainer = styled.div`
  height: 400px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  position: relative;
  img{
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`;

const IntroContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #cecece;

  @media (min-width: 1536px) {
    max-width: 1536px;
    margin: 0 auto; /* 가로 중앙 정렬 */
  }
`;

const TabContainer = styled.div`
  width: 50%;
  height: 50px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  
  div{
    background-color: #e5e5e5;
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    border-right: 0.5px solid #c4c4c4;
    padding: 10px;
    cursor: pointer;
    span{
      min-width: 80px;
      font-size: 16px;
      font-weight: 600;
      color: #6f6f6f;
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 400px) {
    margin-left: 0px;
    width: 100%;
    height: 30px;
    bottom: 0px;
    position: absolute;
    justify-content: center;
    align-items: center;
    div {
      height: 30px;
      span{
        min-width: 0px;
        font-size: 16px;
        font-weight: 600;
        color: #6f6f6f;
        display: flex;
        justify-content: center;
      }
    }
  }
`;



export const Introduce = () => {

  return (
      <>
        <IntroWrapper>
          <div></div>
          <IntroImgContainer>
            <img src="/img/companies.png" alt="companies"></img>
            <TabContainer>
              <div style={{backgroundColor:"#4975db", color:"white", fontWeight:"800"}}>
                <span style={{color:"white", fontWeight:"800"}}>회사소개</span>
              </div>
              <div>
                <span>회사연혁</span>
              </div>
              <div>
                <span>회사비전</span>
              </div>
              <div>
                <span>수상&특허</span>
              </div>
            </TabContainer>
          </IntroImgContainer>

          <IntroContentContainer>
            <IntroCompanyContent/>
          </IntroContentContainer>
        </IntroWrapper>
      </>
  )
}