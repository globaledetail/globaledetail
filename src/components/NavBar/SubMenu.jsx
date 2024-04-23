
import React, { useState } from "react";

import styled from "styled-components";





const SubMenuContainer = styled.div`
    background-color: white;
    width: 100%;
    height: 200px;
`





export const SubMenu = () => {
    const [isHovered, setIsHovered] = useState(false);

    // 호버 이벤트 핸들러
    const handleHover = () => {
      setIsHovered(!isHovered); // 호버 상태를 토글합니다.
    };
  
    return (
      <SubMenuContainer className="navbar" >
        <div className="menu-item">
          Main Menu
          {isHovered && (
            <div className="sub-menu">
              <div className="sub-menu-item">Sub Menu Item 1</div>
              <div className="sub-menu-item">Sub Menu Item 2</div>
              <div className="sub-menu-item">Sub Menu Item 3</div>
            </div>
          )}
        </div>
      </SubMenuContainer>
    );
}