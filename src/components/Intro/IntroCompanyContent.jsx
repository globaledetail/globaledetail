
import React, { useContext } from "react"
import styled from "styled-components"


import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonIcon from '@mui/icons-material/Person';
import FlagIcon from '@mui/icons-material/Flag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Groups2Icon from '@mui/icons-material/Groups2';
import PlaceIcon from '@mui/icons-material/Place';
import { Language } from "@mui/icons-material";
import { LanguageContext } from "../../context/languageContext";

const IntroCompanyWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 80px 0 80px;
  h1{
    font-size: 35px;
    margin-bottom: 60px;
    padding: 30px 0 30px 0;
  }
  @media (max-width: 400px) {
    padding: 0 40px 0 40px;
    margin-bottom: 30px;
  }
`;

const IntroContentContainer = styled.div`

  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr)); 
  gap: 10px; /* 요소 사이의 간격 */
  margin-bottom: 100px;
  @media (max-width: 450px) {  
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  }
`;

const ContentTitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  .sayHi{
    font-size: 45px;
    font-weight: 700;
    margin: 0;
    padding: 10px 0 10px 0;
    white-space: nowrap; 
    overflow: hidden; 
    animation: revealText 2s steps(70, end); 
  }
  h3{
    font-size: 65px;
    margin: 0;
    padding: 10px 0 10px 0;
    white-space: nowrap; 
    overflow: hidden; 
    animation: revealText 2s steps(70, end); 
  }
  @keyframes revealText {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @media (max-width: 450px) {  
    .sayHi{
      font-size: 25px;
      margin: 0;
      padding: 0px;
      white-space: nowrap; 
      overflow: hidden; 
      animation: revealText 2s steps(70, end); 
    }
    h3{
      font-size: 28px;
      font-weight: 800;
      margin: 0;
      padding: 0px;
      white-space: nowrap; 
      overflow: hidden; 
      animation: revealText 2s steps(70, end); 
    }
  }
`
const ContentTextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    font-size: 20px;
    line-height : 2;
    word-wrap: break-word;
    @media (max-width: 450px) {
    font-size: 16px;
    }
  }
  
`;

const CompanyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-content: center;
  h1{
    margin-bottom: 30px;
  }
`;

const StatesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
  grid-template-rows: repeat(2, 1fr); /* 2개의 행 */
  grid-gap: 20px; /* 각 요소 사이의 간격 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  @media (max-width: 970px) {
    grid-template-columns: repeat(auto-fit, minmax(50%, 2fr)); 
    grid-template-rows: auto; /* 화면이 작을 때는 자동으로 행 크기 조정 */
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(60%, 1fr)); 
    grid-template-rows: auto; /* 화면이 작을 때는 자동으로 행 크기 조정 */
  }
`;

const CompanyStateBox = styled.div`
  padding: 20px;
  width: 90%;
  height: 100px;
  border: 0.5px solid #9f9f9f;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  .img-container{
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-container{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    .state-title{
      font-size: 25px;
    }
    .state-text{
      font-size: 16px;
    }
    span{
      font-size: 20px;
    }
  }
`;


export const IntroCompanyContent = () => {
  const {isLanguage, setIsLanguage} = useContext(LanguageContext);
  return(
    <>
      <IntroCompanyWapper>
        <h1>{isLanguage=== 20 ? "회사소개" : "Introduction"}</h1>
        <IntroContentContainer>
          <ContentTitleContainer>
              <span className="sayHi">{isLanguage === 20 ? "안녕하세요.":"Hello,"}</span>
              <h3>{isLanguage === 20 ? "주식회사":"This is "} <span style={{color:"#ec5050"}}>G</span>{isLanguage === 20 ? "ED 입니다.": "ED Co."}</h3>
              <span></span>
          </ContentTitleContainer>
          <ContentTextContainer>
            <span>
              {isLanguage === 20 ? 
              `지이디는 R&D 중심의 특허기술기업으로 122건의 특허를 보유하고 있습니다. 특히 전력 제어 분야의 기술에 집중하고 있으며 펌웨어 블루투스 및 초음파 통신 기술을 보유하고, 공용상용전기유·무선제어 및 전기차 무선 충전 시스템 개발에 주력중입니다. 국내외에서 인정받은 기술인 “CharLe” , 'CharS' 를 기반으로 소통하며 성장하는 글로벌 기업으로 나아가는 것이 GED의 목표입니다`
              :
              `GED is a patented technology company focused on R&D and has 122 patents. In particular, it focuses on power control technologies, has firmware Bluetooth and ultrasonic communication technologies, and is focusing on developing common commercial electric oil/wireless control and electric vehicle wireless charging systems. GED's goal is to become a global company that grows by communicating based on the technologies "
              "CharLe" and "CharS" recognized at home and abroad.`}

                
              </span>
          </ContentTextContainer>
        </IntroContentContainer>

        <CompanyStateContainer>
          <h1>{isLanguage === 20 ? "회사현황": "GED Status"}</h1>
          <StatesContainer>
              <CompanyStateBox>
                <div className="img-container">
                  <ApartmentIcon sx={{ fontSize: '60px', color: "#222222" }}></ApartmentIcon>
                </div>
                <div className="text-container">
                  <span className="state-title">{isLanguage=== 20? "회사명": "Company Name"}</span>
                  <span className="state-text">{isLanguage === 20 ? "주식회사 지이디": "GED"}</span>
                </div>
              </CompanyStateBox>

              <CompanyStateBox>
                <div className="img-container">
                  <PersonIcon sx={{ fontSize: '60px', color: "#222222" }}></PersonIcon>
                </div>
                <div className="text-container">
                  <span className="state-title">{isLanguage === 20 ? "대표이사":"CEO"}</span>
                  <span className="state-text">{isLanguage === 20 ? "강 동연 대표":"CEO David, Kang"}</span>
                </div>
              </CompanyStateBox>

              <CompanyStateBox>
                <div className="img-container">
                  <FlagIcon sx={{ fontSize: '60px', color: "#222222" }}></FlagIcon>
                </div>
                <div className="text-container">
                  <span className="state-title">{isLanguage === 20 ? "설립일":"Established Date"}</span>
                  <span className="state-text">{isLanguage === 20 ? "2016년 6월 22일": "22. 6. 2016"}</span>
                </div>
              </CompanyStateBox>

              <CompanyStateBox>
                <div className="img-container">
                  <AttachMoneyIcon sx={{ fontSize: '60px', color: "#222222" }}></AttachMoneyIcon>
                </div>
                <div className="text-container">
                  <span className="state-title">{isLanguage === 20 ? "자본금":"Capital"}</span>
                  <span className="state-text">{isLanguage === 20 ? "9억원": "Approx. 900 million won"}</span>
                </div>
              </CompanyStateBox>

              <CompanyStateBox>
                <div className="img-container">
                  <Groups2Icon sx={{ fontSize: '60px', color: "#222222" }}></Groups2Icon>
                </div>
                <div className="text-container">
                  <span className="state-title">{isLanguage === 20 ? "임직원":"Employees"}</span>
                  <span className="state-text">{isLanguage === 20 ? "8명":"8 people"}</span>
                </div>
              </CompanyStateBox>

              <CompanyStateBox>
                <div className="img-container">
                  <PlaceIcon sx={{ fontSize: '60px', color: "#222222" }}></PlaceIcon>
                </div>
                <div className="text-container">
                  <span className="state-title">{isLanguage === 20 ? "사업장": "Location"}</span>
                  <span className="state-text">{isLanguage === 20 ? "서울 관악구 호암로 24길 6":"6, Hoam-ro 24-gil, Gwanak-gu, Seoul, Korea"}</span>
                  {/* <span className="state-text">제주시 일주서로 4898 3층</span> */}
                </div>
              </CompanyStateBox>
          </StatesContainer>
        </CompanyStateContainer>
      </IntroCompanyWapper>
    </>
  )
}