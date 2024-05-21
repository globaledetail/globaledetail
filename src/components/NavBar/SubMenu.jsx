
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";


const SubMenuWrapper = styled.div`
    background-color: #fcfcfc;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    transition: opacity 1ms ease; /* 투명도 변화를 천천히 처리*/
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    opacity: 0.8;
    animation: draw 1s ease forwards;
    @keyframes draw {
      /* 0%: 숨겨진 상태 */
    0% {
      opacity: 0;
      transform: translateY(-15%);
    }
    /* 100%: 완전히 나타난 상태 */
    100% {
      opacity: 0.8;
      transform: translateY(0);
    }
}
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


export const SubMenu = ({ activatedHoverData, handleSubMenuEnter, handleSubMenuLeave }) => {
    console.log(activatedHoverData)
    return (
      <SubMenuWrapper 
        className="navbar" 
        onMouseEnter={()=>handleSubMenuEnter(activatedHoverData.stateName)}
        onMouseLeave={()=>handleSubMenuLeave(activatedHoverData.stateName)} 
      >
          <MenusContainer >
            {activatedHoverData?.subMenus?.map((data,idx)=>{
              return(
                <Link key={data.id} to={data.route} id={data.id}>
                  <span 
                    className="sub-menu-item"
                  >{data.title}</span>
                </Link>
              )
            })}
          </MenusContainer>

          <MenuImageContainer >
            <ImageContent>
              <img src={ process.env.PUBLIC_URL + "/img/company.jpg"} alt="side"></img>
            </ImageContent>
          </MenuImageContainer>
      </SubMenuWrapper>
    );
}