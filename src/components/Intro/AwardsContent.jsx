
import React, { useContext, useState } from "react";

import styled from "styled-components";

import Button from '@mui/material/Button';
import { styled as MUIstyle} from '@mui/material/styles';
import { LanguageContext } from "../../context/languageContext";


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
const {isLanguage, setIsLanguage} = useContext(LanguageContext);

const selectorBtnHandler = () => {
  setSelectorState((prev)=>{
    return { awards: !prev.awards, patents: !prev.patents }
  })
};



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
        <h1>{isLanguage === 20 ? "수상 및 특허" : "Awards & Patents"}</h1>
        <div style={{marginBottom: "40px"}}>
          <span style={{fontWeight: "800", fontSize:"15px"}}>{isLanguage === 20 ? "주식회사 GED":"GED"} 
            <span style={{color: "#4975DB"}}> {isLanguage === 20 ? "수상":"Awards"}</span> {isLanguage === 20 ? "및":"&"} 
            <span style={{color: "#4975DB"}}> {isLanguage === 20 ? "특허":"Patents"}</span>
            {isLanguage === 20 ? "입니다":""}</span>
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
          >{isLanguage === 20 ? "수상":"Awards"}</Button>
          <Button 
            variant="contained" 
            size="large" 
            onClick={()=>{ selectorBtnHandler() }}
            sx={{
              backgroundColor: `${ selectorState.patents ? "#4975DB" : "#ffffff" }`,
              color: `${ selectorState.patents ? "#ffffff" : "#999999" }`,
              border: `1px solid ${ selectorState.patents ? "#4975DB" : "#ffffff" }`,
            }}
          >{isLanguage === 20 ? "특허":"Patents"}</Button>

        </AwardsPatentsSelectorContainer>


        <ContentsListContainer>
{selectorState.patents === true ?   
          (<>
            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent1.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "후발 추돌 방지 시스템":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent2.png" }alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "자가 공명 방식 무선 충전기":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent3.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "무료 스마트폰 배터리 충정 시스템":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent4.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "스마트폰 사용 제한 시스템":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent5.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "운전중 스마트폰 사용증거 수집 시스템":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent6.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "자가 공명 방식 무선 충전기 및 동작방법":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent7.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "운전중 스마스폰 사용증거 수집 스마트폰":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent8.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "스마트 충전기를 이용한 통신 단말기 충전 시스템":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent9.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "주차장에 설치되는 무선충전 시스템":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent10.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "스마트폰에 의해 구동되는 무선 충전 시스템":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent11.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "벨트가 연결된 생체 데이터 및 건강정보 감시 시스템":""}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/patent12.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "전기차용 자율주행 무선충전로봇 및 관리서버":""}</span>
              </div>
            </ContentList>
          </>) 
          : 
          (<>
            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/award4.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "제 59회 발명의날 대통령 포장":`59th Invention Day "medal of Presidential"`}</span>
              </div>
            </ContentList>

            <ContentList>
              <img src={ process.env.PUBLIC_URL + "/img/patents/award1.png"} alt="patent"></img>
              <div className="text-container">
                <span>{isLanguage === 20 ? "2024 독일 IF Awards 본상":"German IF Awards Main Prize"}</span>
              </div>
            </ContentList>

            <ContentList>
            <img src={ process.env.PUBLIC_URL + "/img/patents/award2.png"} alt="patent"></img>
            <div className="text-container">
              <span>{isLanguage === 20 ? "2022 특허 청장상 수상":"Korea's Invention and Patent Exhibition Award"}</span>
            </div>
            </ContentList>


            <ContentList>
            <img src={ process.env.PUBLIC_URL + "/img/patents/award3.png"} alt="patent"></img>
            <div className="text-container">
              <span>{isLanguage === 20 ? "2010 라스베가스 CES 최고 혁신상 수상":"CES Best innovation"}</span>
            </div>
            </ContentList>
          </>)}
        </ContentsListContainer>
{/*         
        <div>

        <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>

        </div> */}

      </AwardsPatentsWrapper>
    </>
  )
};