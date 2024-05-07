
import React from "react";

import styled from "styled-components";

const PolarWrapper = styled.div`
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
  @media (min-width: 1536px) {
    padding: 0 30px 0 30px;
  }
`;


export const PolarBusiness = () => {

  return (
    <>
      <PolarWrapper>
        <h1>Polar 전극단자 기술 소개</h1>


      </PolarWrapper>
    
    </>
  )
}