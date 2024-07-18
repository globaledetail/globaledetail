
import React, { useContext } from "react";

import styled from "styled-components";

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { LanguageContext } from "../../context/languageContext";

const CharlesBusinessWrapper = styled.div`
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

const CharlesContentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    padding: 0 30px 0 30px;
    font-size: 25px;
  }
  .content-title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
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

const TablesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .sub-title{
    width: 70%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    h2{
      font-size: 30px;
      word-break: keep-all;
    }
    .sub-title-sentance{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      span{
      }
    } 
    span{
        margin: 0;
        font-size: 30px;
        font-weight: 800;
        word-break: keep-all;
    }
    @media (max-width: 450px) {
      width: 70%;
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 20px;
      h2{
        font-size: 25px !important;
        word-break: keep-all;
      }
      .sub-title-sentance{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        span{
        }
      } 
      span{
          margin: 0;
          font-size: 25px;
          font-weight: 800;
          word-break: keep-all;
      }
    }
  }
  .tables-wrapper{

  }
`;

const TableContent = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  .table{
    height: 270px;
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    .tableTitle{
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 3;
      border: 1px solid #c8c8c8;
      border-radius: 20px 20px 0 0;
      border-bottom: 1px solid #c8c8c8;
    }
    .tableContent{
      justify-content: center;
      align-items: center;
      flex:7;
      position: relative;
      overflow: hidden;
      padding: 0;
      border: 1px solid #c8c8c8;
      border-radius: 0 0 20px 20px;
      img{
        width: 100%;
        height: 100%;
        opacity: 0.5;
        object-fit: cover;
        overflow: hidden;
      }
      span{
        position: absolute;
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #222222;
        font-size: 20px;
        font-weight: 700;
        margin: 0;
      }
      /* background-color: #ae1f1f; */
    }
  }
`;

const AdsImageContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 60px;
  .imgContainer{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    padding: 0;
    img{
      object-fit: contain;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
`;

const ContentTitleContainer = styled.div`
  width: 100%;

`


export const CharsBusiness = () => {
  const {isLanguage, setIsLanguage} = useContext(LanguageContext);
  return (
    <>
      <CharlesBusinessWrapper>
        <h1>{isLanguage === 20 ? "찰스 기술소개": "CharS Technologies"}</h1>
        <CharlesContentsContainer>

          <div className="content-title">
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>{isLanguage === 20 ? "Chars BT 통신형" : "Chars BT Type"}</h2>
          </div>

          <TablesContainer>

            <div className="sub-title">
              <div className="sub-title-sentance">
                <span>Char<span style={{color: "red"}}>S</span>{isLanguage === 20 ? "는": " is"}&ensp;</span>
                <span> {isLanguage === 20 ? "하드웨어" : "combined Hardware"}</span>
                <span> &ensp;{isLanguage === 20 ? "+ 디바이스" : "+ Device"} </span>
                <span> &ensp;{isLanguage === 20 ? "+ 서버 패키지가 결합된" : "+ Server package and"}</span>
              </div>
              <span style={{color: "#3869db"}}>&ensp;{isLanguage === 20 ? "유일의 충전 특허 기술 !" : "is the only charging patent technology !"}</span>
            </div>

            <TableContent>
              <div className="table">
                <div className="tableTitle">
                  <h2>H/W</h2>
                </div>
                <div className="tableContent">
                  <img src={process.env.PUBLIC_URL + "/img/chars/pbc2.png"} alt="pbc"></img>
                  <span>Chars IoT Charger Core Chip</span>
                </div>
              </div>

              <div className="table">
                <div className="tableTitle">
                  <h2>S/W</h2>
                </div>
                <div className="tableContent">
                  <img src={process.env.PUBLIC_URL + "/img/chars/chars.png"} alt="pbc" style={{objectFit: "contain", opacity: "0.6"}}></img>
                  <span>Patent CharS Wireless Charging</span>
                </div>
              </div>

              <div className="table">
                <div className="tableTitle">
                <h2>Server</h2>
                </div>
                <div className="tableContent">
                  <img src={process.env.PUBLIC_URL + "/img/chars/server.png"} alt="pbc"></img>
                  <span>Client/ Agent BigData</span>
                </div>
              </div>
            </TableContent>
          </TablesContainer>

          <div className="content-title" style={{marginTop: "100px"}}>
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>{ isLanguage === 20 ? "초음파(UltraSound) 통신형":"Chars Ultra Sound Type"}</h2>
          </div>

          <TablesContainer>
            <div className="sub-title">
              <h2 className="second-sub-title" style={{fontSize: "25px"}}>
                {isLanguage === 20 ? 
                "무선 충전 ZONE의 CharS Control을 통한 초음파 통신 무선 충전 서비스제공"
                : 
                "Wireless Charging Provides Wireless Charging Service with CharS Control on ZONE"}
              </h2>
            </div>

            <AdsImageContainer>
              <div className="imgContainer">
                <img src={process.env.PUBLIC_URL + "/img/chars/charsControl.png"} alt="pbc"></img>

              </div>
            </AdsImageContainer>

            <AdsImageContainer>
              <div className="imgContainer">
                <img src={process.env.PUBLIC_URL + "/img/chars/ads.png"} alt="pbc"></img>

              </div>
            </AdsImageContainer>

          </TablesContainer>
        </CharlesContentsContainer>
      </CharlesBusinessWrapper>
    </>
  )
}