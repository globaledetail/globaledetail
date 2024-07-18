import React, { useContext } from "react";

import styled from "styled-components";
import { LanguageContext } from "../../context/languageContext";




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
    left: 36.3%;
    margin-left: -6px;
    width: 4px;
    top: 90px;
    bottom: 150px;
    z-index: 3;
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
      left: 54px;
      top: 60px;
      bottom: 250px;
    }
  }
  @media (min-width: 769px) and (max-width: 1450px) {
    &::before{
      left: 36.8%;
;
    }
  }
`;



export const HistoryContent = () => {
  const {isLanguage, setIsLanguage} = useContext(LanguageContext);
    return (
      <>
        <CompanyHistoryWapper>
          <CompanyHistoryTitleContainer >
            <img src={ process.env.PUBLIC_URL + "/img/worldMap.png" }alt="map"></img>
            <h1 style={{color: "black"}}>{isLanguage === 20 ? "회사연혁": "History"}</h1>
          </CompanyHistoryTitleContainer>

          
          <HistoryContentContainer>
            <ol>
              <li className="history-item">
                <h2>2024</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p> {isLanguage === 20 ? "독일IF 어워드 차량부문 Winner본상 수상":"German IF Awards Main Prize"} </p>
                    </li>
                    <li className="lists-item">
                      <h3>02</h3><p> {isLanguage === 20 ? "태국국제발명전시회 은상수상":"Thailand's International Invention Exhibition Silver Prize"}</p>
                    </li>
                    <li className="lists-item">
                      <h3>03</h3><p> {isLanguage === 20 ? "제59회 발명의날 대통령 포장":`59th Invention Day "medal of Presidential"`} </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2023</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p>{isLanguage === 20 ? "세계 최초 FOD 제거 기술 브루솔 특허기획":`The world's first FOD removal technology "Brusol" patent`} </p>
                    </li>
                    <li className="lists-item">
                      <h3>02</h3><p>{isLanguage === 20 ? "찰리2세대개발/ Bot 구동검수용제작":"Charle 2nd Generation Development / Production for Bot Drive Inspection "} </p>
                    </li>
                    <li className="lists-item">
                      <h3>03</h3><p> {isLanguage === 20 ? "찰리 EV무선 충전지자체 / 대학교 MOU":"CharLe EV wireless charging local government and university MOU"}</p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2022</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p> {isLanguage === 20 ? "보건부정책공모전 2위 수상":"2nd place in the Ministry of Health and Welfare Policy Contest"} </p>
                    </li>
                    <li className="lists-item">
                      <h3>02</h3><p>{isLanguage === 20 ? "대한민국발명특허대전수상":"Korea's Invention and Patent Exhibition Award"} </p>
                    </li>
                    <li className="lists-item">
                      <h3>03</h3><p>{isLanguage === 20 ? "한국콘텐츠진흥원론치패드선정 ":"Selected a lanunch pad by Korean content Agency"} </p>
                    </li>
                    <li className="lists-item">
                      <h3>04</h3><p>{isLanguage === 20 ? "DB손해보험교통챌린지선정":"Direct DB Transport Challenge Awarded"} </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2019</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p>{isLanguage === 20 ? "KOTRASelect USA 버지니아주정부계약":"KOTRA Slect USA Virginia contract"} </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2018</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p>{isLanguage === 20 ? "서울경찰청사회적기업수상":"Seoul Metropolitan Police Agency Wins Social Enterprise Award"}</p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2016</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p>{isLanguage === 20 ? "미래창조부장관상":"Minister of Science, ICT and Future Planning Award"} </p>
                    </li>
                    <li className="lists-item">
                      <h3>02</h3><p>{isLanguage === 20 ? "대한민국멀티미디어대상3위":"3rd place for Multimedia Awards"} </p>
                    </li>
                    <li className="lists-item">
                      <h3>03</h3><p>{isLanguage === 20 ? "찰리1세대개발":"CharLe 1st Generation Development"} </p>
                    </li>
                    <li className="lists-item">
                      <h3>04</h3><p>{isLanguage === 20 ? "2016년6월회사설립":"Established in June 2016"} </p>
                    </li>
                  </ol>
                </div>
              </li>
              <li className="history-item">
                <h2>2010</h2>
                <div className="history-item-contents">
                  <ol className="lists">
                    <li className="lists-item">
                      <h3>01</h3><p>{isLanguage === 20 ? "라스베가스CES 최고혁신상수상":"CES Best innovation"} </p>
                    </li>
                    <li className="lists-item">
                      <h3>02</h3><p>{isLanguage === 20 ? "제44회 발명의날 특허청장상 수상":"44th the Commissioner of the Korean Intellectual Property Office Award"}</p>
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
