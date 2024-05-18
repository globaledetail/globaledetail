import React, { useEffect, useState } from "react";

import styled from "styled-components";

import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableFooter } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const AnnouncementsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  { title: '첫번째 공시입니다.', 
    date: "2024-04-02", 
  },
  { title: '두번째 공시입니다', 
    date: "2024-04-02", 
  },
  { title: '세번째 공시입니다', 
    date: "2024-04-02", 
  },
  { title: '네번쨰 공시입니다', 
  date: "2024-04-02", 
  },
  { title: '다섯번째 공시입니다', 
  date: "2024-04-02", 
  },
  { title: '여섯번째 공시입니다', 
  date: "2024-04-02", 
  },
  { title: '여섯번째 공시입니다', 
  date: "2024-04-02", 
  },
  { title: '여섯번째 공시입니다', 
  date: "2024-04-02", 
  },
  { title: '여섯번째 공시입니다', 
  date: "2024-04-02", 
  },
  { title: '여섯번째 공시입니다', 
  date: "2024-04-02", 
  },
  { title: '여섯번째 공시입니다', 
  date: "2024-04-02", 
  },
  { title: '여섯번째 공시입니다', 
  date: "2024-04-02", 
  },
  { title: '여섯번째 공시입니다', 
  date: "2024-04-02", 
  },
  { title: '여섯번째 공시입니다', 
  date: "2024-04-02", 
  },
];


export const Announcements = () => {
  const [ tableData, setTableData ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);

  const tableCellHandler = (e) =>{

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
          <h1>공시정보</h1>
          <AnnouncementsContentWrapper>
            {/* <div className="content-title">
              <ElectricBoltIcon sx={{padding:"0 0px 0 30px", width: "30px", height: "30px"}}></ElectricBoltIcon>
              <h2>Charle Polar 정밀 AI 도킹시스템</h2>
            </div> */}


            <AnnouncementTableContainer>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                  <TableHead>
                    <TableRow >
                      <TableCell style={{fontWeight:"900", color: "#8a8a8a"}}>Title</TableCell>
                      <TableCell style={{fontWeight:"900", color: "#8a8a8a"}} align="right">Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        style={{height:"70px"}}
                      >
                        <TableCell component="th" scope="row" onClick={(e)=>{ tableCellHandler(e) }} style={{cursor:"pointer"}}>
                          {row.title}
                        </TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                      </TableRow>
                    ))}
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
        </AnnouncementsWrapper>
      </>
    )
}