


import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { IntroCompanyContent } from "../components/Intro/IntroCompanyContent";
import { HistoryContent } from "../components/Intro/HistoryContent";
import { VisionContent } from "../components/Intro/VisionContent";
import { AwardsContent } from "../components/Intro/AwardsContent";



const IntroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
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
  /* border: 1px solid #cecece; */
  background-color: #ffffff;
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
  @media (max-width: 450px) {
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
  const [ currentPage, setCurrentPage ] = useState([{ page:'회사소개', index: 0}]);
  const targetPageName = useNavigate();

  useEffect(() => {
    //파라미터를 받아서 currentPage를 바로 셋팅 해줘야한다.
  }, [])

  const currentPageHandler = (pageName, index) => {
    setCurrentPage(() => {
      return [{ page: pageName, index: index }]
    });
  };

  return (
      <>
        <IntroWrapper>
          <IntroImgContainer>
            {/*  임시 이미지 경로  */}
            <img src={ process.env.PUBLIC_URL + "/img/companies.png"} alt="companies"></img>
            <TabContainer>
              <div 
                onClick={()=>{currentPageHandler('회사소개')}}
                style={{
                  backgroundColor: `${ currentPage[0].page === "회사소개" ? "#4975db" : "#e5e5e5" }`,
                  fontWeight: "800"
                }}
              >
                <span style={{
                  color: `${ currentPage[0].page === "회사소개" ? "white" : "#6f6f6f" }`,
                  fontWeight: `${ currentPage[0].page === "회사소개" ? "800" : "600" }`,
                }}>회사소개</span>
              </div>

              <div 
                onClick={()=>{currentPageHandler('회사연혁')}}
                style={{
                  backgroundColor: `${ currentPage[0].page === "회사연혁" ? "#4975db" : "#e5e5e5" }`,
                  fontWeight: "800"
                }}
              >
                <span style={{
                  color: `${ currentPage[0].page === "회사연혁" ? "white" : "#6f6f6f" }`,
                  fontWeight: `${ currentPage[0].page === "회사연혁" ? "800" : "600" }`,
                }}>회사연혁</span>
              </div>

              <div 
                onClick={()=>{currentPageHandler('회사비전')}}
                style={{
                  backgroundColor: `${ currentPage[0].page === "회사비전" ? "#4975db" : "#e5e5e5" }`,
                  fontWeight: "800"
                }}
              >
                <span style={{
                  color: `${ currentPage[0].page === "회사비전" ? "white" : "#6f6f6f" }`,
                  fontWeight: `${ currentPage[0].page === "회사비전" ? "800" : "600" }`,
                }}>회사비전</span>
              </div>

              <div 
                onClick={()=>{currentPageHandler('수상&특허')}}
                style={{
                  backgroundColor: `${ currentPage[0].page === "수상&특허" ? "#4975db" : "#e5e5e5" }`,
                  fontWeight: "800"
                }}
              >
                <span style={{
                  color: `${ currentPage[0].page === "수상&특허" ? "white" : "#6f6f6f" }`,
                  fontWeight: `${ currentPage[0].page === "수상&특허" ? "800" : "600" }`,
                }}>수상&특허</span>
              </div>
            </TabContainer>
          </IntroImgContainer>

          <IntroContentContainer>

            {currentPage?.map((page, idx) => {
              if( '회사소개' === page.page ){
                return(
                  <IntroCompanyContent key={idx + 1} />
                )
              };
              if( '회사연혁' === page.page ){
                return (
                  <HistoryContent key={idx + 2}/>
                )
              };
              if( '회사비전' === page.page ){
                return (
                  <VisionContent key={idx + 3}/>
                )
              };
              if( '수상&특허' === page.page ){
                return (
                  <AwardsContent key={idx + 4}/>
                )
              };
            })}
          </IntroContentContainer>
        </IntroWrapper>
      </>
  )
}