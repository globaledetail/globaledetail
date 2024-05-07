
import React from "react";

import styled from "styled-components";


const ReboozeBusinessWrapper = styled.div`
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

export const ReboozBusiness = () => {
  return (
    <>
      <ReboozeBusinessWrapper>
        <h1>리부즈 소개</h1>
      </ReboozeBusinessWrapper>
    </>
  )
}