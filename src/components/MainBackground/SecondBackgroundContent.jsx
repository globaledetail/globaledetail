



import styled from "styled-components";



const SecondBackgroundWrapper = styled.div`
    width: 100%;
    margin: 100px;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 400px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    div{
        flex: 1;
    }
    img{
        width: 600px;
        height: 400px;
        border-radius: 10px;
    }
`;


export const SecondeBackgroundContent = () =>{
    return (
        <>
            <SecondBackgroundWrapper>
                <ImageContainer>
                    <div>
                        <img src="/img/CharleBot1.png" alt="charle-bot2"></img>
                    </div>
                    <div>
                        <span> CharLe bot2</span>
                    </div>
                </ImageContainer>
                <ImageContainer>
                    <div>
                        <img src="/img/CharleBot1.png" alt="charle-bot2"></img>
                    </div>
                    <div>
                        <span> CharLe bot2</span>
                    </div>
                </ImageContainer>

            </SecondBackgroundWrapper>
        
        </>
    )
};