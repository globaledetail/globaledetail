import React, { useContext, useEffect, useState } from "react";

import styled from "styled-components";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled as MUIstyle} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LanguageContext } from "../../context/languageContext";




const AnnouncementsWrapper = styled.div`
  width: 100%;
  /* height는 아래 다른 컨텐츠로 채워질경우 지워야한다. */
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 0px 0 0px;
  h1{
    font-size: 35px;
    margin-bottom: 10px;
    color: #222222;
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

const AnnouncementsContentWrapper = styled.div`
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

const AnnouncementTableContainer = styled.div`
  width: 80%;
  margin-bottom: 100px;
`;
// 최근순으로 데이터 넣어야한다
const rows = [
  { id: '2',
    title: '(주)지이디 2025 Lasvegas CES 참가의 건',
    paragraph0:[ 
      {일시: "2025년 1월 07일 ~ 동년 동월 10일 까지"},
      {참가지위: "CTA 심사 통과에 따른 CES 한국관 부스 사용 및 참가"},
      {참가기술: "자동차 비상탈출문 포에버스&포에버더블에스(ForeverS, ForeverSS)"}
    ],
    paragraph1: '안녕하세요, 주식회사 지이디 입니다. 당사의 2025년 CES 박람회 참가에 관한 내용을 다음과 같이 공지합니다.',
    paragraph2_1: '전세계 전기차 화재사고의 원인을 근본적으로 해결할 수 있는 비상탈출문 기술로 2025 CES에 한국을 대표하는 기업으로 영광스럽게 참가하게 되었습니다.',
    paragraph2_2: '당사는 CTA(주최단체)의 기술 심사를 통해 개별적으로 선별된 케이스로, 부스비 및 기타 프로모션 비용 등을 지원받아 독보적인 지위로 본 박람회에 참가할 수 있게 되었습니다. ',
    paragraph3: '1억 불 이상의 수주를 목표로 참가하는 본 박람회 참가에 대해 당사를 향한 많은 응원 부탁드리며 아울러 저희 지이디를 아껴주시는 많은 분들에게 새해 복 많이 받으시라는 감사의 인사를 올립니다.',
    creator: '대표이사 강 동 연       (직인생략)',
    companyName: '주식회사 지 이 디',
    date: "2024년 12월 31일"
  },
  { id: '1',
    title: '전자증권 전환 대상 주권 권리자(주주) 보호 및 조치사항 안내',
    paragraph1: '2019.09.16 「주식·사채 등의 전자등록에 관한 법률(이하 “전자증권법”)」이 시행됨에 따라 당사의 전자증권 전환 대상 주권 권리자를 보호하기 위하여 전자증권법 제27조 1항에 근거하여 아래의 사항을 통지합니다.',
    paragraph2_1: '1. 전자등록일(2024년 06월 28일)부터 주주(권리자)가 소유중인 실물증권(전환 대상 주권)은 효력을 잃게 됩니다. ',
    paragraph2_2: '2. 따라서, 주주(권리자)는 당사의 전자등록일 5영업일 전까지 소유중인 실물증권을 제출하고, 증권회사 계좌로 입고 신청하시기 바랍니다. ',
    paragraph3: '[참고] 당사(발행인)는 전자등록일(2024년 06월 28일)의 직전영업일에 주주명부에 기재된 권리자를 기준으로 전자등록이 되도록 전자등록기관(한국예탁결제원)에 요청할 예정입니다.',
    creator: '대표이사 강 동 연       (직인생략)',
    companyName: '주식회사 지 이 디',
    date: "2024년  05월  23일"
  },
];


const BootstrapDialog = MUIstyle(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const Announcements = () => {
  const { isLanguage, setIsLanguage } = useContext(LanguageContext);
  const [ tableData, setTableData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ open, setOpen ] = useState(false)
  const [ dialogData, setDialogData ] = useState([])

  const handleClose = () => {
    setOpen(false);
  };

  const tableCellHandler = (row) =>{
    setOpen(true);
    setDialogData(row);
  };

  useEffect(()=>{
    setTableData(rows.slice(0.5));
  },[]);

  useEffect(() => {
    let startIndex = (currentPage - 1) * 8;
    let endIndex = startIndex + 8;
    setTableData(rows.slice(startIndex, endIndex))
  },[currentPage]);

  const paginationChangeHandler = (event, page) => {
    setCurrentPage(page);
  };
  
    return (
      <>
        <AnnouncementsWrapper>
          <h1>{isLanguage === 20 ? "공고정보":"Announcements"}</h1>
          <AnnouncementsContentWrapper>

            <AnnouncementTableContainer>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                  <TableHead>
                    <TableRow >
                      <TableCell key={`temp1`} style={{fontWeight:"900", color: "#8a8a8a"}}>Title</TableCell>
                      <TableCell key={`temp2`} style={{fontWeight:"900", color: "#8a8a8a"}} align="right">Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row, idx) => {
                      return (
                        <TableRow
                          key={`${row.id}`}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          style={{height:"70px"}}
                        >
                          <TableCell component="th" scope="row" onClick={()=>{ tableCellHandler(row) }} style={{cursor:"pointer"}}>
                            {row.title}
                          </TableCell>
                          <TableCell align="right">{row.date}</TableCell>
                        </TableRow>
                      )})}
                  </TableBody>
                </Table>
              </TableContainer>
              <Stack spacing={2} style={{margin: "20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                      <Pagination 
                        count={Math.ceil(rows.length / 8) } 
                        defaultPage={1} 
                        siblingCount={0} 
                        onChange={(event, page)=> { paginationChangeHandler(event, page)}}
                      />
              </Stack>
            </AnnouncementTableContainer>
          
          </AnnouncementsContentWrapper>
          {open && (
          <>
            <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            >
              <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                공고 상세
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
                <Typography gutterBottom sx={{marginBottom: "30px", fontWeight: "800", textAlign: "center"}}>
                  {dialogData?.title}
                </Typography>
                <Typography gutterBottom sx={{marginBottom: "30px"}}>
                  {dialogData?.paragraph1}
                </Typography>
                <Typography gutterBottom sx={{marginBottom: "30px", textAlign: "center" }}>
                  <span style={{justifyContent: "center"}}>-- 아래 --</span>
                </Typography>

                <Typography gutterBottom sx={{marginBottom: "10px" }}>
                  {dialogData && dialogData.paragraph0 && dialogData?.paragraph0.map((data) => {
                    const subject = Object.keys(data);
                    const content = Object.values(data)
                    return (
                      <>
                        <div key={data.id}>
                          <span>{subject} : </span><span>{content}</span>
                        </div>
                      </>
                    )
                  })}
                </Typography>

                <Typography gutterBottom sx={{marginBottom: "10px" }}>
                  {dialogData?.paragraph2_1}
                </Typography>
                <Typography gutterBottom sx={{marginBottom: "30px" }}>
                  {dialogData?.paragraph2_2}
                </Typography>
                <Typography gutterBottom sx={{marginBottom: "30px" }}>
                  {dialogData?.paragraph3}
                </Typography>
                <Typography gutterBottom sx={{marginBottom: "20px", fontWeight: "600", textAlign: "center" }}>
                  {dialogData?.date}
                </Typography>
                <Typography gutterBottom sx={{marginBottom: "20px", fontWeight: "600", textAlign: "center" }}>
                  {dialogData?.companyName}
                </Typography>
                <Typography gutterBottom sx={{marginBottom: "20px", fontWeight: "600", textAlign: "center" }}>
                  {dialogData?.creator}
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  닫기
                </Button>
              </DialogActions>
            </BootstrapDialog>
      
          </>

          )}
        </AnnouncementsWrapper>
      </>
    )
}