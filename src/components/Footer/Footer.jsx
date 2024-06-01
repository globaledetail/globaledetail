

import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";



const FooterWrapper = styled.footer`
  margin-top: 30px;
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  position: relative;
`;

const ContentConainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: auto;
`;

const MenuContainer = styled.div`
  flex: 7;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    margin: 0 20px 0 20px;
    font-weight: 600;
    color: #a3a3a3;
    &:hover{
      color: #4b4b4b;
      cursor: pointer;
    }
  }
  @media (max-width: 587px) {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr); /* 2개의 열을 생성합니다. */
    grid-template-rows: repeat(2, 1fr); /* 2개의 행을 생성합니다. */
    grid-gap: 20px; /* 그리드 아이템 사이의 간격 설정 */
    span {
      margin: 0 20px 0 20px;
      text-align: center;
    }
}
  
`;

const CompanyNameContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  min-width: 170px;
  flex: 3;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span{
    display: block;
    color: #a3a3a3;
    word-break: keep-all;
  }
`;

const TopDiviedLineContainer = styled.div`
  width: 100%;
  border: 1px solid #ececec;
  position: absolute;
  top: 0;
`;


export const Footer = () => {
  const navigate = useNavigate('');
  return (
    <>
      <FooterWrapper>
        <TopDiviedLineContainer/>

        <ContentConainer>
          <MenuContainer>
            <span onClick={()=>{navigate('/intro/company')}}>COMPANY</span>
            <span onClick={()=>{navigate('/business/polar')}}>BUSINESS</span>
            <span onClick={()=>{navigate('/irpr/announcements')}}>PR/IR</span>
            <span onClick={()=>{navigate('/contacts')}}>CONTACT</span>

          </MenuContainer>

          <CompanyNameContainer>
            <span>GED © COMPANY</span>
            <span> ALL RIGHTS RESERVED.</span>

          </CompanyNameContainer>

        </ContentConainer>

      
      </FooterWrapper>
    </>
  )
}