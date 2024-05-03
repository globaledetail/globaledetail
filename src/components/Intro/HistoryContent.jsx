import React from "react";

import styled from "styled-components";




const CompanyHistoryWapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px 0 80px;

  @media (max-width: 450px) {
    padding: 0 0px 0 0px;
    margin-bottom: 30px;
  }
`;

const CompanyHistoryTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;

    object-fit: cover; 
    overflow: hidden;
    filter: opacity(0.2) drop-shadow(0 0 0 #f5f5f5);
    background-image: linear-gradient(to bottom, #bcbcbc, rgba(255, 255, 255, 0));
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
    bottom bottom,
    top,
    bottom;
  }
  h1{
    position: absolute;
    font-size: 35px;
    margin-bottom: 60px;
    padding: 30px 0 30px 0;
    color: rgba(0, 0, 0, 0.9); 
  }
`;

const HistoryContentContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 60px;
  &::before{
    content: ' ';
    background-color: #ffb700;
    position: absolute;
    opacity: 0.4;
    left: 36%;
    margin-left: -px;
    width: 2px;
    top: 90px;
    bottom: 150px;
    z-index: -1;
  }
  .history-item{
    margin: 40px 0;
    display: flex;
    align-items: flex-start;
  }
  /* .history-item + .history-item{
    margin: 60px 0px;
    display: flex;
  } */
  .history-item h2{
    /* margin: 0 -6 0 0; */
    flex-basis: 35%;
    min-height: 60px;
    box-sizing: border-box;
    flex-shrink: 0;
    font-size: 35px;
    display: flex;
    gap: 20px;
    align-items: center;
    margin-right: -6px;
    justify-content: flex-end;
    &::after{
      content: ' ';
      display: block;
      background-color: #ffb700;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
  
  .history-item-contents{
    flex-grow: 1;
    padding: 20px 40px 24px;
  }
  .lists{

    h3{
      color: #ff4d00;
      flex-basis: 2em;
      flex-shrink: 0;
    }
    .lists-item{
      margin-top: 5px;
      gap: 20px;
      display: flex;
      p {
        font-size: 18px;
      }
    }
  }
  @media ( max-width: 768px ) {
    .history-item{
      display: block;
    }
    .history-item h2{
    /* margin: 0 -6 0 0; */
      font-size: 25px;
      flex-direction: row-reverse;
      p{
        font-size: 13px;;
      }
    }
    &::before{
      left: 49px;
      top: 60px;
      bottom: 250px;
      
  }
  }
`;



export const HistoryContent = () => {
    return (
      <>
        <CompanyHistoryWapper>
          <CompanyHistoryTitleContainer >
            <img src="/img/worldMap.png" alt="map"></img>
            <h1 style={{color: "black"}}>회사연혁</h1>
          </CompanyHistoryTitleContainer>

          
          <HistoryContentContainer>
            <ol>
              <li className="history-item">
                <h2>2024</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p> 독일IF 어워드 차량부문 Winner본상 수상 </p>
                    </li>
                    <li className="lists-item">
                      <h3>02</h3><p> 태국국제발명전시회 은상수상 </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2023</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p> 세계최초FOD제거기술브루솔특허기획 </p>
                    </li>
                    <li className="lists-item">
                      <h3>02</h3><p> 찰리2세대개발/ Bot 구동검수용제작 </p>
                    </li>
                    <li className="lists-item">
                      <h3>03</h3><p> 찰리EV무선충전지자체/대학교MOU </p>
                    </li>
                    <li className="lists-item">
                      <h3>03</h3><p> 찰리EV무선충전지자체/대학교MOU </p>
                    </li>
                    <li className="lists-item">
                      <h3>03</h3><p> 찰리EV무선충전지자체/대학교MOU </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2022</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p> 보건부정책공모전 2위 수상 </p>
                    </li>
                    <li className="lists-item">
                      <h3>02</h3><p> 대한민국발명특허대전수상 </p>
                    </li>
                    <li className="lists-item">
                      <h3>03</h3><p> 한국콘텐츠진흥원론치패드선정 </p>
                    </li>
                    <li className="lists-item">
                      <h3>03</h3><p> DB손해보험교통챌린지선정 </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2019</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p> KOTRASelect USA 버지니아주정부계약 </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2018</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p> 서울경찰청사회적기업수상 </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2016</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p> 미래창조부장관상 </p>
                    </li>
                    <li className="lists-item">
                      <h3>01</h3><p> 대한민국멀티미디어대상3위 </p>
                    </li>
                    <li className="lists-item">
                      <h3>01</h3><p> 찰리1세대개발 </p>
                    </li>
                    <li className="lists-item">
                      <h3>01</h3><p> 2016년6월회사설립 </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2010</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p> 라스베가스CES 최고혁신상수상 </p>
                    </li>
                    <li className="lists-item">
                      <h3>01</h3><p> 제44회발명의날특허청장상수상</p>
                    </li>
                  </ol>
                </div>
              </li>
            </ol> 

          </HistoryContentContainer>
          <div>

          </div>

        </CompanyHistoryWapper>
      </>
    )
}
