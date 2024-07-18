import React, { useContext, useState } from "react";

import styled from "styled-components";

import newsData from "./newsData.json"
import { LanguageContext } from "../../context/languageContext";



const NewsReportsWrapper = styled.div`
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

const NewsReportsContentWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 100px;
  h2{
    padding: 0 30px 0 30px;
    font-size: 25px;
  }
  .polar-content-parent-flex{

  }
  .content-title{
    width: 100%;
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

const ContentContainer = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  border: 1px solid #b7b7b7;
  border-radius: 20px;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
  @media (max-width: 490px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .imgWrapper{
    width: 100%;
    height: 300px;
    flex: 1;
    overflow: hidden;
    .newsImgContainer{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .contentWrapper{
    padding: 20px;
    height: auto;
    display: flex;
    flex-direction: column;
    flex: 1;
    .title{
      width: 100%;
      margin: 0;
      margin-bottom: 30px;
      span{
        font-size: 20px;
        font-weight: 700;
        width: auto;
      }
    }
    .content{
      span{
        font-size: 16px;
        width: auto;
      }
    }
    .date{
      display: flex;
      justify-content: right;
      margin-top: 30px;
      margin-bottom: 5px;
      span{
        margin: 0;
        color: #787878;
        word-break: keep-all;
        width: auto;
      }
    }
  }
`;



export const NewsReports = () => {
  const { isLanguage, setIsLanguage } = useContext(LanguageContext);
  const sortedData = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const [data, setData] = useState(sortedData)
  return (
    <>
      <NewsReportsWrapper>
        <h1>{isLanguage === 20 ? "언론보도":"News"}</h1>
        <NewsReportsContentWrapper>

          {data?.map((data, idx)=>{
            return(
              <>
                <ContentContainer key={`temp${data.id}`}>
                  <div className="imgWrapper">
                    <div className="newsImgContainer">
                      <a href={process.env.PUBLIC_URL + data.URL} style={{cursor: "pointer"}}>
                        <img src={process.env.PUBLIC_URL + `/img/irpr/news/${data.imgPath}`} alt='news'></img>
                      </a>
                    </div>
                  </div>

                  <div className="contentWrapper">
                    <div className="title">
                      <a href={process.env.PUBLIC_URL + data.URL} style={{cursor: "pointer", textDecoration: "none", color: "#222222"}}>
                      <span>{data.title}</span>
                      </a>
                    </div>

                    <div className="content">
                      <span>{data.content}</span>
                    </div>

                    <div className="date">
                      <span>{data.createBy} &ensp; </span>
                      <span>{data.date}</span>
                    </div>
                  </div>
                </ContentContainer> 
              </>
            )
          })}
        </NewsReportsContentWrapper>
      </NewsReportsWrapper>
    </>
  )
};