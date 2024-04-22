

import React from "react";


import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



const FooterWrapper = styled.footer`

  height: 140px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  position : absolute;
  bottom : 0;
`;

const FooterContainer = styled.div`
    padding: 20px;
    flex:1;
    color: #222222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    span{
      margin-bottom: 5px;
    }
    h3{
      margin:0px;
      margin-bottom: 25px;
    }
    div{
      display: flex;
      flex-direction:column;
    }
    .icon{
      display: flex;
      flex-direction: row;
    }
`;

export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <div>
            <h3>서비스사업자 GED 대표 강동연</h3>
            <div className="icon">
              <FacebookIcon></FacebookIcon>
              <InstagramIcon></InstagramIcon>
            </div>
          </div>

        </FooterContainer>
        <FooterContainer>
          <div>
            <span>Address. 서울시 역삼동 708 - 28, 3층</span>
            <span>TEL. 070 8080 5480</span>
            <span>문의. ingers88@naver.com</span>
          </div>
        </FooterContainer>
      </FooterWrapper>
    </>
  )
}