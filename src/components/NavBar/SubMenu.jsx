
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";


const submenuData = [
  { 
    menu: "Company",
    submenu: ["회사소개","회사연혁","회사비전","수상 및 특허"]
  },
  {
    menu: "Business",
    submenu: ["찰리기술소개", "찰스기술소개","리부즈"]
  },
  {
    menu: "PR/IR",
    submenu: ["공시정보","언론보도","IR자료"]
  },
  {
    menu: "CONTACTS",
    submenu: [],
  }
];

// ② Business 
// -찰리기술 소개 
//      1-1) Active (레일형)
//      1-2) Passive (배터리내장형)
//      1-3) Polar (전극단자형)
// -찰스기술 소개
//      2-1) BT통신형
//      2-2) 초음파(UltraSound)통신형
// -리부즈 : 배너필요 : 리부즈 사이트 이동
//      3-1) Rebooz
//      3-2) vida


const SubMenuWrapper = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    transition: opacity 1ms ease; /* 투명도 변화를 천천히 처리*/
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const MenusContainer = styled.div`
  flex: 1;
  height: 92%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    text-decoration: none;
    color: #222222;
    font-size: 15px;
    font-weight: 700;
    height: 20%;
  }
`;

const MenuImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

`;

const ImageContent = styled.div`
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    opacity: 0.9;
    clip-path: inset(0 round 0px);
    background: linear-gradient(to left, #999999, transparent); /* 왼쪽 흐릿한 부분 */
  }
`;


export const SubMenu = ({isHovered, navBarIndex, handleSubMenuEnter, handleSubMenuLeave}) => {

    return (
      <SubMenuWrapper 
        className="navbar" 
        onMouseEnter={()=>handleSubMenuEnter(navBarIndex)}
        onMouseLeave={()=>handleSubMenuLeave(navBarIndex)} 
      >
          <MenusContainer >
            {submenuData[navBarIndex]?.submenu?.map((menu,idx)=>{
              return(
                <Link to={"/temp"}>
                  <span 
                    key={idx} 
                    className="sub-menu-item"
                  >{menu}</span>
                </Link>
              )
            })}
          </MenusContainer>

          <MenuImageContainer >
            <ImageContent>
              <img src="/img/company.jpg"></img>
            </ImageContent>
          </MenuImageContainer>
      </SubMenuWrapper>
    );
}