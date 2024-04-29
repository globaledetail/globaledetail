


import React from "react";

import styled from "styled-components";

const IntroWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
`;

const IntroImgContainer = styled.div`
  height: 400px;
  width: 100%;
  background-color: blue;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  img{
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`;

const IntroContentContainer = styled.div`
  
`;

const TabContainer = styled.div`

`;

export const Introduce = () => {

  return (
      <>
        <IntroWrapper>
          <IntroImgContainer>
            <img src="/img/companies.png" alt="companies"></img>
          </IntroImgContainer>
            <></>
          <IntroContentContainer>

          </IntroContentContainer>
        </IntroWrapper>
      </>
  )
}