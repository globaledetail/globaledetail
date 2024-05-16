


import styled from "styled-components";
import { Inner } from "./Background.style";


const BackgroundVideo = styled.div`
  width: 100vw;
  height: 100vh;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
 
const FirstBackgroundContainer = styled(Inner)`
    
`;
//분리를 생각중
export const FirstBackground = () =>{ 
  return (
    <>
      <FirstBackgroundContainer >
        <BackgroundVideo className="background-video">
            <VideoElement autoPlay loop muted>
              <source src={process.env.PUBLIC_URL + "/videos/homeVideo.mp4"} type="video/mp4" />
            </VideoElement>
        </BackgroundVideo>
      </FirstBackgroundContainer>
    </>
  )
}