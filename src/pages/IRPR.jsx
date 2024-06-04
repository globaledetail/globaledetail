import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";




const IRPRWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const IRPRImgContainer = styled.div`
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

const IRPRContentContainer = styled.div`
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



export const IRPR = () => {
  const [ currentPage, setCurrentPage ] = useState([{ page:'공고정보', index: 0}]);
  const navigate = useNavigate('');
  const currentURL = useLocation('');

  useEffect(()=>{
    if(currentURL?.pathname === '/irpr/announcements'){
      setCurrentPage([{ page:'공고정보', index: 0}]);
    };
    if(currentURL?.pathname === '/irpr/media'){
      setCurrentPage([{ page:'언론보도', index: 1}]);
    };
    if(currentURL?.pathname === '/irpr/ir'){
      setCurrentPage([{ page:'IR 자료', index: 2}]);
    };
  },[currentURL])

  const currentPageHandler = (pageName, index) => {
    setCurrentPage(() => {
      return [{ page: pageName, index: index }]
    });
  };

    return (
      <>
        <IRPRWrapper>
            <IRPRImgContainer>
              {/* 임시 이미지 경로 */}
              <img src={ process.env.PUBLIC_URL + "/img/irpr.png" } alt="companies"></img>
              <TabContainer>
                <div 
                  onClick={()=>{
                    currentPageHandler('공고정보');
                    navigate('/irpr/announcements');
                  }}
                  style={{
                    backgroundColor: `${ currentPage[0].page === "공고정보" ? "#4975db" : "#e5e5e5" }`,
                    fontWeight: "800"
                  }}
                >
                  <span style={{
                    color: `${ currentPage[0].page === "공고정보" ? "white" : "#6f6f6f" }`,
                    fontWeight: `${ currentPage[0].page === "공고정보" ? "800" : "600" }`,
                    minWidth:"135px",
                  }}>공고정보</span>
                </div>

                <div 
                  onClick={()=>{
                    currentPageHandler('언론보도');
                    navigate('/irpr/media');
                  }}
                  style={{
                    backgroundColor: `${ currentPage[0].page === "언론보도" ? "#4975db" : "#e5e5e5" }`,
                    fontWeight: "800"
                  }}
                >
                  <span style={{
                    color: `${ currentPage[0].page === "언론보도" ? "white" : "#6f6f6f" }`,
                    fontWeight: `${ currentPage[0].page === "언론보도" ? "800" : "600" }`,
                  }}>언론보도</span>
                </div>

                <div 
                  onClick={()=>{
                    currentPageHandler('IR 자료');
                    navigate('/irpr/ir');
                  }}
                  style={{
                    backgroundColor: `${ currentPage[0].page === "IR 자료" ? "#4975db" : "#e5e5e5" }`,
                    fontWeight: "800"
                  }}
                >
                  <span style={{
                    color: `${ currentPage[0].page === "IR 자료" ? "white" : "#6f6f6f" }`,
                    fontWeight: `${ currentPage[0].page === "IR 자료" ? "800" : "600" }`,
                  }}>IR 자료</span>
                </div>
              </TabContainer>  
            </IRPRImgContainer>


            <IRPRContentContainer>
              <Outlet/>
              <Footer/>
            </IRPRContentContainer>

        </IRPRWrapper>
          
      </>
    )
}

