
import React, { useState } from "react";

import styled from "styled-components";

import Button from '@mui/material/Button';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import styledEngineSc from "@mui/styled-engine-sc";



const AwardsPatentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const AwardsPatentsSelectorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  Button{
    width: 250px;
    /* background-color: #ffffff; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border: 1px solid #999999;
    margin: 10px;
    box-shadow: none;
    font-size: 15px;
    font-weight: 800;
    &:hover{
      background-color: #6d8bd1;
    }
  }
`;

const ContentsListContainer = styled.div`
  margin-bottom: 100px;
  width: 90%;
  height: 100%;
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
  grid-template-rows: repeat(2, 1fr); /* 2개의 행 */
  grid-gap: 50px; /* 각 요소 사이의 간격 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  place-items: center; /* 그리드 아이템을 중앙에 배치 */
  @media (max-width: 970px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 2fr)); 
    grid-template-rows: auto; /* 화면이 작을 때는 자동으로 행 크기 조정 */
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(60%, 1fr)); 
    grid-template-rows: auto; /* 화면이 작을 때는 자동으로 행 크기 조정 */
  }
`;

const ContentList = styled.div`
  width: 270px;
  height: 390px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-radius: 10px;
  img{
    width: 270px;
    height: 320px;
    border-radius: 10px 10px 0px 0px;
  }
  .text-container{
    
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    span{
      margin-bottom: 0px;
      font-size: 16px;
      font-weight: 600;
    }
  }
`; 




export const AwardsContent = () =>{
const [ selectorState, setSelectorState ] = useState( {awards: true, patents: false} );

const selectorBtnHandler = () => {
  setSelectorState((prev)=>{
    return { awards: !prev.awards, patents: !prev.patents }
  })
};

console.log(selectorState.awards)




// const dropDownTemplet = () => {
//   return (
//     <FormControl sx={{ m: 1, width: 300 }}>
//       <InputLabel id="demo-multiple-name-label">Name</InputLabel>
//       <Select
//         labelId="demo-multiple-name-label"
//         id="demo-multiple-name"
//         multiple
//         value={'personName'}
//         onChange={'handleChange'}
//         input={<OutlinedInput label="Name" />}
//         MenuProps={'MenuProps'}
//       >
//         {'names'.map((name) => (
//           <MenuItem
//             key={name}
//             value={name}
//             style={'getStyles'(name, 'personName', 'theme')}
//           >
//             {name}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   )
// }

  return(
    <>
      <AwardsPatentsWrapper>
        <h1>수상 및 특허</h1>
        <div style={{marginBottom: "40px"}}>
          <span style={{fontWeight: "800", fontSize:"15px"}}>주식회사 GED 
            <span style={{color: "#4975DB"}}> 수상</span> 및 
            <span style={{color: "#4975DB"}}> 특허</span>
            입니다</span>
        </div>

        <AwardsPatentsSelectorContainer>
          <Button 
            variant="contained" 
            size="large"
            sx={{
              backgroundColor: `${ selectorState.awards ? "#4975DB" : "#ffffff" }`,
              color: `${ selectorState.awards ? "#ffffff" : "#999999" }`,
              border: `1px solid ${ selectorState.awards ? "#4975DB" : "#ffffff" }`,
            }}
            onClick={()=>{ selectorBtnHandler() }} 
          >수상</Button>
          <Button 
            variant="contained" 
            size="large" 
            onClick={()=>{ selectorBtnHandler() }}
            sx={{
              backgroundColor: `${ selectorState.patents ? "#4975DB" : "#ffffff" }`,
              color: `${ selectorState.patents ? "#ffffff" : "#999999" }`,
              border: `1px solid ${ selectorState.patents ? "#4975DB" : "#ffffff" }`,
            }}
          >특허</Button>

        </AwardsPatentsSelectorContainer>


        <ContentsListContainer>
{selectorState.patents === true ?   
          (<>
            <ContentList>
              <img src="/img/patents/patent1.png" alt="patent"></img>
              <div className="text-container">
                <span>후발 추돌 방지 시스템</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent2.png" alt="patent"></img>
              <div className="text-container">
                <span>자가 공명 방식 무선 충전기</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent3.png" alt="patent"></img>
              <div className="text-container">
                <span>무료 스마트폰 배터리 충정 시스템</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent4.png" alt="patent"></img>
              <div className="text-container">
                <span>스마트폰 사용 제한 시스템</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent5.png" alt="patent"></img>
              <div className="text-container">
                <span>운전중 스마트폰 사용증거 수집 시스템</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent6.png" alt="patent"></img>
              <div className="text-container">
                <span>자가 공명 방식 무선 충전기 및 동작방법</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent7.png" alt="patent"></img>
              <div className="text-container">
                <span>운전중 스마스폰 사용증거 수집 스마트폰</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent8.png" alt="patent"></img>
              <div className="text-container">
                <span>스마트 충전기를 이용한 통신 단말기 충전 시스템</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent9.png" alt="patent"></img>
              <div className="text-container">
                <span>스마트 충전기를 이용한 통신 단말기 충전 시스템</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent10.png" alt="patent"></img>
              <div className="text-container">
                <span>스마트 충전기를 이용한 통신 단말기 충전 시스템</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent11.png" alt="patent"></img>
              <div className="text-container">
                <span>스마트 충전기를 이용한 통신 단말기 충전 시스템</span>
              </div>
            </ContentList>

            <ContentList>
              <img src="/img/patents/patent12.png" alt="patent"></img>
              <div className="text-container">
                <span>스마트 충전기를 이용한 통신 단말기 충전 시스템</span>
              </div>
            </ContentList>
          </>) 
          : 
          (<>
            <ContentList>
              <img src="/img/patents/award1.png" alt="patent"></img>
              <div className="text-container">
                <span>2024 독일 IF Awards 본상</span>
              </div>
            </ContentList>

            <ContentList>
            <img src="/img/patents/award2.png" alt="patent"></img>
            <div className="text-container">
              <span>2022 특허 청장상 수상</span>
            </div>
            </ContentList>


            <ContentList>
            <img src="/img/patents/award3.png" alt="patent"></img>
            <div className="text-container">
              <span>10" 라스베가스CES 최고 혁신상 수상</span>
            </div>
            </ContentList>
          </>)}


        </ContentsListContainer>


      </AwardsPatentsWrapper>
    </>
  )
};