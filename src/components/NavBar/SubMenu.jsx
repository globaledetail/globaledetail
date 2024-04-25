
import React, { useState } from "react";

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
    background-color: white;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MenusContainer = styled.div`
  flex: 1;
  background-color: bisque;
`;

const MenuImageContainer = styled.div`
  flex: 1;
  background-color: blueviolet;
`;


export const SubMenu = () => {
    const [isHovered, setIsHovered] = useState(false);

    // 호버 이벤트 핸들러
    const handleHover = () => {
      setIsHovered(!isHovered); // 호버 상태를 토글합니다.
    };
  
    return (
      <SubMenuWrapper className="navbar" >
          {isHovered && (
            <MenusContainer >
              <div className="sub-menu-item">Sub Menu Item 1</div>
              <div className="sub-menu-item">Sub Menu Item 2</div>
              <div className="sub-menu-item">Sub Menu Item 3</div>
            </MenusContainer>
          )}

          <MenuImageContainer >

          </MenuImageContainer>

      </SubMenuWrapper>
    );
}