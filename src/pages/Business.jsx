import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";
import { CharLeBusiness } from "../components/Business/CharLeBusiness"
import { CharsBusiness } from "../components/Business/CharsBusiness";
import { ReboozBusiness } from "../components/Business/Rebooz";
import { PolarBusiness } from "../components/Business/PolarBusiness";



const BusinessWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const BusinessImgContainer = styled.div`
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

const BusinessContentContainer = styled.div`
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
        width: 50px;
        min-width: 0px;
        font-size: 3.5vw;
        font-weight: 600;
        color: #6f6f6f;
        display: flex;
        justify-content: center;
        word-break: keep-all;
      }
    }
  }
  @media screen and (min-width: 580px) and (max-width: 960px) {
    div{
      min-width: 130px;
      span{

      }
    }
  }
  @media screen and (min-width: 450px) and (max-width: 579px) {
    div{
      span{
        font-size: 14px;
      }
    }
  }
`;




export const Business = () => {
  const [ currentPage, setCurrentPage ] = useState([{ page:'Polar 전극단자 기술', index: 0}]);
  const currentURL = useLocation();


  useEffect(()=>{
    console.log(currentURL)
    if(currentURL?.state){
      setCurrentPage([currentURL?.state])
    }
  },[])

  const currentPageHandler = (pageName, index) => {
    setCurrentPage(() => {
      return [{ page: pageName, index: index }]
    });
  };


  return (
    <>
      <BusinessWrapper>
        <BusinessImgContainer>
          {/* 임시 이미지 경로 */}
          <img src={ process.env.PUBLIC_URL + "/img/business.png" } alt="companies"></img>
          <TabContainer>
            <div 
              onClick={()=>{currentPageHandler('Polar 전극단자 기술')}}
              style={{
                backgroundColor: `${ currentPage[0].page === "Polar 전극단자 기술" ? "#4975db" : "#e5e5e5" }`,
                fontWeight: "800"
              }}
            >
              <span style={{
                color: `${ currentPage[0].page === "Polar 전극단자 기술" ? "white" : "#6f6f6f" }`,
                fontWeight: `${ currentPage[0].page === "Polar 전극단자 기술" ? "800" : "600" }`,
                minWidth:"135px",
              }}>Polar 전극단자 기술</span>
            </div>

            <div 
              onClick={()=>{currentPageHandler('찰리 기술소개')}}
              style={{
                backgroundColor: `${ currentPage[0].page === "찰리 기술소개" ? "#4975db" : "#e5e5e5" }`,
                fontWeight: "800"
              }}
            >
              <span style={{
                color: `${ currentPage[0].page === "찰리 기술소개" ? "white" : "#6f6f6f" }`,
                fontWeight: `${ currentPage[0].page === "찰리 기술소개" ? "800" : "600" }`,
              }}>찰리 기술소개</span>
            </div>

            <div 
              onClick={()=>{currentPageHandler('찰스 기술소개')}}
              style={{
                backgroundColor: `${ currentPage[0].page === "찰스 기술소개" ? "#4975db" : "#e5e5e5" }`,
                fontWeight: "800"
              }}
            >
              <span style={{
                color: `${ currentPage[0].page === "찰스 기술소개" ? "white" : "#6f6f6f" }`,
                fontWeight: `${ currentPage[0].page === "찰스 기술소개" ? "800" : "600" }`,
              }}>찰스 기술소개</span>
            </div>

            <div 
              onClick={()=>{currentPageHandler('리부즈')}}
              style={{
                backgroundColor: `${ currentPage[0].page === "리부즈" ? "#4975db" : "#e5e5e5" }`,
                fontWeight: "800"
              }}
            >
              <span style={{
                color: `${ currentPage[0].page === "리부즈" ? "white" : "#6f6f6f" }`,
                fontWeight: `${ currentPage[0].page === "리부즈" ? "800" : "600" }`,
              }}>리부즈</span>
            </div>
          </TabContainer>
        </BusinessImgContainer>

        <BusinessContentContainer>
        {currentPage?.map((page, idx) => {
              if( 'Polar 전극단자 기술' === page.page ){
                return(
                  <PolarBusiness key={idx + 1}></PolarBusiness>
                )
              };
              if( '찰리 기술소개' === page.page ){
                return(
                  <CharLeBusiness key={idx + 2}></CharLeBusiness>
                )
              };
              if( '찰스 기술소개' === page.page ){
                return (
                  <CharsBusiness key={idx + 3}></CharsBusiness>
                )
              };
              if( '리부즈' === page.page ){
                return (
                  <ReboozBusiness key={idx + 4}></ReboozBusiness>
                )
              };
            })}

        </BusinessContentContainer>
      </BusinessWrapper>
    </>
  )
}