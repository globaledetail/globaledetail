import React from "react";

import styled from "styled-components";

import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import EmailIcon from '@mui/icons-material/Email';

const ContactsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const ContactsImgContainer = styled.div`
  height: 400px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  position: relative;
  img{
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`;

const ContactsContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid #cecece; */
  background-color: #ffffff;
  @media (min-width: 1536px) {
    max-width: 1536px;
    margin: 0 auto; /* 가로 중앙 정렬 */
  }
`;

const ContactSubWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0px 0 0px;
  margin-bottom: 100px;
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
  @media (min-width: 1536px) {
    padding: 0 30px 0 30px;
  }
`;

const ContactsContentsContainer = styled.div`
  width: 80%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  h2{
    padding: 0 30px 0 30px;
    font-size: 25px;
  }
  .content-title{
    display: flex;
    align-items: center;
    h2{
    padding: 0 30px 0 10px;
    font-size: 25px;
    }
  }
  @media (max-width: 450px) {
    .content-title{
      display: flex;
      align-items: center;
      justify-content: center;
      h2{
        padding: 0 30px 0 10px;
        font-size: 25px;
      }
    }
  }
`;

export const Contacts = () => {

  return (
    <>
      <ContactsWrapper>
        <ContactsImgContainer>
          <img src={ process.env.PUBLIC_URL + "/img/contacts.png" } alt="companies"></img>
        </ContactsImgContainer>

        <ContactsContentContainer>
          <ContactSubWrapper>
            <h1> CONTACT US</h1>
            {/* <ContactsContentsContainer>
              <h1>{`(주)LS`}</h1>
              <div style={{display:"flex", alignItems:"center", margin: "10px 0 10px 0"}}>
                <BusinessIcon sx={{width:"30px", height:"30px"}}></BusinessIcon>
                <span style={{margin: "0px", marginLeft: "10px", marginTop:"5px", fontSize: "18px"}}>서울시 용산구 한강대로 92 LS 용산타워 17~18층</span>
              </div>
              <div style={{display:"flex", alignItems:"center", margin: "10px 0 10px 0"}}>                <LocalPhoneIcon sx={{width:"30px", height:"30px"}}></LocalPhoneIcon>
                <span style={{margin: "0px", marginLeft: "10px", marginTop:"5px", fontSize: "18px"}}>02-2189-9723</span>
              </div>
              <div style={{display:"flex", alignItems:"center", margin: "10px 0 10px 0"}}>                <LocalPrintshopIcon sx={{width:"30px", height:"30px"}}></LocalPrintshopIcon>
                <span style={{margin: "0px", marginLeft: "10px", marginTop:"5px", fontSize: "18px"}}>02-2189-9799</span>
              </div>
              <div style={{display:"flex", alignItems:"center", margin: "10px 0 10px 0"}}>                <EmailIcon sx={{width:"30px", height:"30px"}}></EmailIcon>
                <span style={{margin: "0px", marginLeft: "10px", marginTop:"5px", fontSize: "18px"}}>pr@lsholdings.com</span>
              </div>
              <div style={{width: "100%", height:"350px", marginTop: "30px" }}>
                <img src={process.env.PUBLIC_URL + "/img/office1.png"} alt="map" style={{ width: "100%", height:"350px", objectFit: "cover"}}></img>
              </div>
            </ContactsContentsContainer> */}

            <ContactsContentsContainer>
              <h1>{`(주)지이디`}</h1>
              <div style={{display:"flex", alignItems:"center", margin: "10px 0 10px 0"}}>
                <BusinessIcon sx={{width:"30px", height:"30px"}}></BusinessIcon>
                <span style={{margin: "0px", marginLeft: "10px", marginTop:"5px", fontSize: "18px"}}>서울 관악구 호암로 24길 6 </span>
              </div>
              <div style={{display:"flex", alignItems:"center", margin: "10px 0 10px 0"}}>
                <BusinessIcon sx={{width:"30px", height:"30px"}}></BusinessIcon>
                <span style={{margin: "0px", marginLeft: "10px", marginTop:"5px", fontSize: "18px"}}> 제주일서로 7898 3층</span>
              </div>
              <div style={{display:"flex", alignItems:"center", margin: "10px 0 10px 0"}}>                <LocalPhoneIcon sx={{width:"30px", height:"30px"}}></LocalPhoneIcon>
                <span style={{margin: "0px", marginLeft: "10px", marginTop:"5px", fontSize: "18px"}}>070-8080-5480</span>
              </div>
              <div style={{display:"flex", alignItems:"center", margin: "10px 0 10px 0"}}>                <LocalPrintshopIcon sx={{width:"30px", height:"30px"}}></LocalPrintshopIcon>
                <span style={{margin: "0px", marginLeft: "10px", marginTop:"5px", fontSize: "18px"}}>0504-072-3053</span>
              </div>
              <div style={{display:"flex", alignItems:"center", margin: "10px 0 10px 0"}}>                <EmailIcon sx={{width:"30px", height:"30px"}}></EmailIcon>
                <span style={{margin: "0px", marginLeft: "10px", marginTop:"5px", fontSize: "18px"}}>ingers88@naver.com</span>
              </div>
              <div style={{width: "100%", height:"350px", marginTop: "30px" }}>
                <img src={process.env.PUBLIC_URL + "/img/office2.png"} alt="map" style={{ width: "100%", height:"350px", objectFit: "cover"}}></img>
              </div>
            </ContactsContentsContainer>

          </ContactSubWrapper>

        </ContactsContentContainer>
      </ContactsWrapper>
    </>
  )
}