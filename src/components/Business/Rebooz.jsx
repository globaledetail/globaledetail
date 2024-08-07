
import React, { useContext } from "react";

import styled from "styled-components";
import { LanguageContext } from "../../context/languageContext";


const ReboozeBusinessWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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

const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  .iamge-and-intro{
    width: 70%;
    height: auto;
    padding: 20px;  
    display: flex;
    flex-direction: column;
    gap:20px;
    .image{
      width: 100%;
      height: auto;
      flex: 8;
      position: "relative";
      img{
        width: 100%;
        height: auto;
        object-fit: cover;
        opacity: 0.6;
      }
      a{
          position: absolute;
          bottom: 30rem; /* 이미지 상단에서 수직으로 중앙으로 위치 */
          left: 50%; /* 이미지 왼쪽에서 수평으로 중앙으로 위치 */
          transform: translate(-50%, -50%); /* 버튼을 정확한 중앙으로 이동 */
          padding: 12px 22px;
          color: white;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          border: 2px solid #ffffff;
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
          font-weight: 700;
          z-index: 1;
          cursor: pointer;
          &:hover{
            opacity:0.6;
          }
        }
        @media (max-width: 530px) {
          a {
            position: absolute;
            bottom: 34rem; /* 이미지 상단에서 수직으로 중앙으로 위치 */
            left: 50%; /* 이미지 왼쪽에서 수평으로 중앙으로 위치 */
            transform: translate(-50%, -50%); /* 버튼을 정확한 중앙으로 이동 */
            padding: 5px 10px;
            color: white;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            border: 2px solid #ffffff;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            font-weight: 700;
            cursor: pointer;
            &:hover{
              opacity:0.6;
            }
          }
        }
        @media (max-width: 439px) {
          a {
            position: absolute;
            bottom: 38rem; /* 이미지 상단에서 수직으로 중앙으로 위치 */
            left: 50%; /* 이미지 왼쪽에서 수평으로 중앙으로 위치 */
            transform: translate(-50%, -50%); /* 버튼을 정확한 중앙으로 이동 */
            padding: 5px 10px;
            color: white;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            border: 2px solid #ffffff;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            font-weight: 700;
            cursor: pointer;
            &:hover{
              opacity:0.6;
            }
          }
        }
        @media (max-width: 310px) {
          a {
            position: absolute;
            bottom: 42rem; /* 이미지 상단에서 수직으로 중앙으로 위치 */
            left: 50%; /* 이미지 왼쪽에서 수평으로 중앙으로 위치 */
            transform: translate(-50%, -50%); /* 버튼을 정확한 중앙으로 이동 */
            padding: 5px 10px;
            color: white;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            border: 2px solid #ffffff;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            font-weight: 700;
            cursor: pointer;
            &:hover{
              opacity:0.6;
            }
          }
        }
    }
    .intro{
      flex: 2;
      h2{
        display: flex;
        justify-content: center;
        align-items: center;
        word-break: keep-all;
        font-size: 18px;
      }
    }
  }
`;
   


export const ReboozBusiness = () => {
  const {isLanguage, setIsLanguage} = useContext(LanguageContext);
  return (
    <>
      <ReboozeBusinessWrapper>
        <h1>{isLanguage === 20 ? "리부즈 소개": "REBOOZ"}</h1>

        <ContentContainer>
          <div className="iamge-and-intro">
            <div className="image">
                <img src={ process.env.PUBLIC_URL + "/img/chars/rebooz.png"} alt="rebooz"></img>
                <a href={'http://rebooz.co.kr'}>{isLanguage === 20 ? "리부즈 사이트로 이동": "See More"}</a>
            </div>

            <div className="intro">
              <h2> {isLanguage === 20 ? 
              "리부즈는 클리닝 기술로써 100% 청정 에너지 수소 및 수성 공정입니다."
              :
              "REBOOZ is a cleaning technology that is 100% clean energy hydrogen and water-based process."}
              </h2>
              <h2> {isLanguage === 20 ? 
              "엔진의 어느 부분도 분해하지 않고 전체 클리닝을 할수 있어 엔진이 손상되지 않습니다."
              : 
              "Full cleaning can be done without disassembling any part of the engine so that the engin is not damaged."}
              </h2>
            </div>
          </div>
        </ContentContainer>
      </ReboozeBusinessWrapper>
    </>
  )
}