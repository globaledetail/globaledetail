
import React from "react";

import styled from "styled-components";



const CharLeBusinessWrapper = styled.div`
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
`;

const CharLeContentsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

`;



export const CharLeBusiness = () => {
  return (
    <>
      <CharLeBusinessWrapper>
        <h1>찰스 기술소개</h1>
        <CharLeContentsContainer>
          <h2>CharleIntro</h2>
        </CharLeContentsContainer>
      </CharLeBusinessWrapper>

    </>
  )
}