
import React from "react";

import styled from "styled-components";

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

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
  padding: 30px;
  display: flex;
  flex-direction: column;
  .sub-title{
    h2{
      display: flex;
      justify-content: center;
      word-break: keep-all;
    }
  }
  .tables-wrapper{

  }
`;

const TableContent = styled.div`
  width: 100%;
  height: 500px;
  background-color: gray;
  display: flex;
  gap: 20px;
  .table{
    display: flex;
    flex-direction: column;
    flex: 1;
    .tableTitle{
      flex: 3;
      background-color: #907676;
    }
    .tableContent{
      flex:7;
      background-color: #ae1f1f;
    }
  }
`;


export const CharsBusiness = () => {
  return (
    <>
      <CharlesBusinessWrapper>
        <h1>찰리 기술소개</h1>
        <CharlesContentsContainer>

          <div className="content-title">
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>Chars BT 통신형</h2>
          </div>

          <TablesContainer>
            <div className="sub-title">
              <h2>Char<span style={{color: "red"}}>S</span>는 하드웨어 + 디바이스 + 서버 패키지가 결합된 <span style={{color: "#3869db"}}> 유일의 충전 특허 기술 !</span></h2>
            </div>

            <TableContent>
              <div className="table">
                <div className="tableTitle"></div>
                <div className="tableContent"></div>
              </div>

              <div className="table">
                <div className="tableTitle"></div>
                <div className="tableContent"></div>
              </div>

              <div className="table">
                <div className="tableTitle"></div>
                <div className="tableContent"></div>
              </div>

            </TableContent>
          </TablesContainer>

        </CharlesContentsContainer>
      </CharlesBusinessWrapper>
    </>
  )
}