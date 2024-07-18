
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const EviWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0px 0 0px;
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

const EviTitleVedioContainer = styled.div`
  width: 90%;
  display: flex;
  overflow: hidden;
  position: relative;
  margin-top: 40px;
  margin-bottom: 100px;
  .play-btn{
    transform: translate( -50%, -50% );
    opacity: .7;
    width: 80px;
    height: 80px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    border-radius: 90px;
    border-style: solid;
    border-width: 2px;
    border-color: #FFFFFF;
    font-size: 3rem;
    text-align: center;
    line-height: 75px;
  }
`;

const EviContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  margin-top: 10px;
  width: 100%;
  height: 550px;
  display: flex;
  @media screen and (max-width: 1000px ){
    flex-direction: column ;
    height: 1350px;
  }
  @media screen and (max-width: 800px ){
    flex-direction: column ;
    height: 1250px;
  }
  @media screen and (max-width: 650px ){
    flex-direction: column ;
    height: 1050px;
  }
  .content{
    flex: 1;
    height: 550px;
    padding: 20px;
    .img-container{
      flex: 1;
      img{
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 20px;
      }
    }
    .text-container{
      height: auto;
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 0 20px 20px 20px;
      span{
        height: 200px;
        margin-top: 20px;
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 0;
        line-height: 35px;
        word-break: keep-all;
      }
    }
  }
  @media screen and (max-width: 450px ){    
    height: 850px;
    flex-direction: column ;
    .content{
      height: 350px;
      .text-container{
        span{
          font-size: 20px;
        }
      }
    }
  }

`;

export const CharLeEvi = () => {
  const [ playing, setPlaying ] = useState(false);
  const videoState = useRef(null);
  const [ ready, setReady ] = useState(false);
  const [ curr, setCurr ] = useState(
    'https://youtu.be/sqgxcCjD04s?si=ePXJiYzUtjTZ7g_e',
  );

  const onEnded = () => {
    setCurr('https://youtu.be/ZXmoJu81e6A?si=cqMWOLxy-4PF0dxg');
    setPlaying(true);
  };

  const playVideo = () =>{
    setPlaying((prev)=>!prev)
  };



  return (
    <>
      {/* <EviWrapper> */}
        <EviContentWrapper>
          
          {/* <div className="content-title">
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>Charle Roof 비상탈출</h2>
          </div>

          <ContentContainer>
            <div className="content">
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + "/img/charLeRoof/CharLeRoof1.png"} alt="bot"></img>
              </div>
              <div className="text-container">
                <span>비상시 사용 가능한 비상탈출</span>
              </div>
            </div>

            <div className="content">
              <div className="img-container">
                <img src={process.env.PUBLIC_URL + "/img/charLeRoof/CharLeRoof2.png"} alt="bot"></img>
              </div>
              <div className="text-container">
                <span>다양한 구조가 가능한 세계 최초로 전기차 비상문 찰리 루프</span>
              </div>
            </div>
          </ContentContainer>

          <div className="content-title" style={{marginTop: "50px"}}>
            <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
            <h2>Charle 루프 시스템</h2>
          </div> */}

          <EviTitleVedioContainer>
            <ReactPlayer
              ref={videoState}
              url={process.env.PUBLIC_URL + "/videos/CharLeEvi.mp4"}
              className='player' // 클래스 이름 지정하여 스타일 적용
              playing={playing} // 재생 상태, true = 재생중 / false = 일시 정지
              controls={true} // 유튜브 재생 컨트롤바 노출 여부
              onEnded={onEnded} // 현재 재생 중인 영상 종료 시 호출
              onReady={() => setReady(true)} // 영상이 로드되어 준비된 상태
              width="100%" 
              height="auto" 
              muted={true}
              playIcon={<button>Play</button>}
              style={{ objectFit: "cover", borderRadius:" 20px", position: "relative" }}
            >
            </ReactPlayer>
          </EviTitleVedioContainer>

        </EviContentWrapper>
      {/* </EviWrapper> */}
    
    </>
  )
}