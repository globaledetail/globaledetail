import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import styled from "styled-components";
import { Footer } from "../components/Footer/Footer";
import { LanguageContext } from "../context/languageContext";


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
  const { isLanguage, setIsLanguage } = useContext(LanguageContext);
  const [ currentPage, setCurrentPage ] = useState([{ page:'Polar 전극단자 기술', index: 0}]);
  const navigate = useNavigate('');
  const currentURL = useLocation();
  
  useEffect(()=>{
    if(currentURL?.pathname === '/business/roof'){
        setCurrentPage([{ page:'찰리 루프', index: 0}]);
    };
    if(currentURL?.pathname === '/business/charle'){
      setCurrentPage([{ page:'찰리 기술소개', index: 1}]);
    };
    if(currentURL?.pathname === '/business/chars'){
      setCurrentPage([{ page:'찰스 기술소개', index: 2}]);
    };
    if(currentURL?.pathname === '/business/rebooz'){
      setCurrentPage([{ page:'리부즈', index: 3}]);
    };
  },[currentURL])

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
              onClick={()=>{
                currentPageHandler('찰리 루프');
                navigate('/business/roof');
              }}
              style={{
                backgroundColor: `${ currentPage[0].page === "찰리 루프" ? "#4975db" : "#e5e5e5" }`,
                fontWeight: "800"
              }}
            >
              <span style={{
                color: `${ currentPage[0].page === "찰리 루프" ? "white" : "#6f6f6f" }`,
                fontWeight: `${ currentPage[0].page === "찰리 루프" ? "800" : "600" }`,
                minWidth:"135px",
              }}>{isLanguage === 20 ? "찰리 루프":"CharLe Roof"}</span>
            </div>

            <div 
              onClick={()=>{
                currentPageHandler('찰리 기술소개');
                navigate('/business/charle');
              }}
              style={{
                backgroundColor: `${ currentPage[0].page === "찰리 기술소개" ? "#4975db" : "#e5e5e5" }`,
                fontWeight: "800"
              }}
            >
              <span style={{
                color: `${ currentPage[0].page === "찰리 기술소개" ? "white" : "#6f6f6f" }`,
                fontWeight: `${ currentPage[0].page === "찰리 기술소개" ? "800" : "600" }`,
              }}>{isLanguage === 20 ? "찰리 기술소개":"CharLe Tech"}</span>
            </div>

            <div 
              onClick={()=>{
                currentPageHandler('찰스 기술소개');
                navigate('/business/chars');
              }}
              style={{
                backgroundColor: `${ currentPage[0].page === "찰스 기술소개" ? "#4975db" : "#e5e5e5" }`,
                fontWeight: "800"
              }}
            >
              <span style={{
                color: `${ currentPage[0].page === "찰스 기술소개" ? "white" : "#6f6f6f" }`,
                fontWeight: `${ currentPage[0].page === "찰스 기술소개" ? "800" : "600" }`,
              }}>{isLanguage === 20 ? "찰스 기술소개" : "Chars Tech"  }</span>
            </div>

            <div 
              onClick={()=>{
                currentPageHandler('리부즈');
                navigate('/business/rebooz');
              }}
              style={{
                backgroundColor: `${ currentPage[0].page === "리부즈" ? "#4975db" : "#e5e5e5" }`,
                fontWeight: "800"
              }}
            >
              <span style={{
                color: `${ currentPage[0].page === "리부즈" ? "white" : "#6f6f6f" }`,
                fontWeight: `${ currentPage[0].page === "리부즈" ? "800" : "600" }`,
              }}>{isLanguage === 20 ?"리부즈":"Rebooz"}</span>
            </div>
          </TabContainer>
        </BusinessImgContainer>

        <BusinessContentContainer>
          <Outlet/>
          <Footer/>
        </BusinessContentContainer>
      </BusinessWrapper>
    </>
  )
}