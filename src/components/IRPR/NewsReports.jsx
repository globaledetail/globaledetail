import React from "react";

import styled from "styled-components";





const NewsReportsWrapper = styled.div`
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



export const NewsReports = () => {

  return (
    <>
      <NewsReportsWrapper>
        <h1>언론보도</h1>

      </NewsReportsWrapper>
    </>
  )
};