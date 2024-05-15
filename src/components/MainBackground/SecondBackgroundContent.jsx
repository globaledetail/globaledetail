


import React from "react";
import styled from "styled-components";


const SecondBackgroundWrapper = styled.div`
    width: 100%;
    margin: 100px;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContentContainer = styled.div`
    width: 100%;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
    gap: 20px; 
    .image-container{
        width: 100%; 
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content-text-container{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            font-size: 50px;
            font-weight: 800px;
            color: white;
        }
    }
    img{
        max-width: 100%;
        min-width: 300px;
        height: auto;
        border-radius: 10px;
        transition: transform 0.5s ease; 
    }
    .image-container:hover img {
        transform: scale(1.05); 
    }
    @media (min-width: 1400px) {
        img {
            max-width: 600px; 
        }
    }
    @media (max-width: 1019px) {
        img {
            width: auto; 
            max-width: 70%;
            height: auto;
        }
    }
    @media (max-width:619px) {
        img {
            width: auto; 
            max-width: 330px;
            height: auto;
        }
        .content-text-container{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            font-size: 30px;
            font-weight: 800px;
            color: white;
        }
    }
    }
`;


export const SecondeBackgroundContent = () =>{
    return (
        <>
            <SecondBackgroundWrapper>
                <ContentContainer>
                    <div className="image-container">
                        <img src={process.env.PUBLIC_URL + `/img/CharleBot1.png`} alt="charle-bot2"></img>
                    </div>
                    <div className="content-text-container">
                        <span> CharLe bot2</span>
                    </div>
                </ContentContainer>
                <ContentContainer>
                    <div className="image-container">
                        <img src={process.env.PUBLIC_URL + "/img/CharleBot1.png"} alt="charle-bot2"></img>
                    </div>
                    <div className="content-text-container">
                        <span> CharLe bot2</span>
                    </div>
                </ContentContainer>
            </SecondBackgroundWrapper>
        </>
    )
};