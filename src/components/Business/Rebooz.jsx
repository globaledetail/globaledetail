
import React from "react";

import styled from "styled-components";


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
          bottom: 21rem; /* 이미지 상단에서 수직으로 중앙으로 위치 */
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
        @media (max-width: 424px) {
          a {
            position: absolute;
            bottom: 24rem; /* 이미지 상단에서 수직으로 중앙으로 위치 */
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
        @media (max-width: 302px) {
          a {
            position: absolute;
            bottom: 26rem; /* 이미지 상단에서 수직으로 중앙으로 위치 */
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
      }
    }
  }
`;
   


export const ReboozBusiness = () => {
  return (
    <>
      <ReboozeBusinessWrapper>
        <h1>리부즈 소개</h1>

        <ContentContainer>
          <div className="iamge-and-intro">
            <div className="image">
                <img src={ process.env.PUBLIC_URL + "/img/chars/rebooz.png"} alt="rebooz"></img>
                <a href={'http://rebooz.co.kr'}>리부즈 사이트로 이동</a>
            </div>

            <div className="intro">
              <h2> 리부즈는 클리닝 기술로써 100% 청정 에너지 수소 및 수성 공정입니다.</h2>
              <h2> 엔진의 어느 부분도 분해하지 않고 전체 클리닝을 할수 있어 엔진 오일이 손상되지 않습니다.</h2>
            </div>
          </div>
        </ContentContainer>
      </ReboozeBusinessWrapper>
    </>
  )
}