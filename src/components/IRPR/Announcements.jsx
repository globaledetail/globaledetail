import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled as MUIstyle } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LanguageContext } from "../../context/languageContext";

const AnnouncementsWrapper = styled.div`
  width: 100%;
  /* height는 아래 다른 컨텐츠로 채워질경우 지워야한다. */
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 0px 0 0px;
  h1 {
    font-size: 35px;
    margin-bottom: 10px;
    color: #222222;
    padding: 30px 0 30px 0;
  }
  @media (max-width: 450px) {
    padding: 0 0px 0 0px;
    margin-bottom: 30px;
  }
  span {
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

  h2 {
    padding: 0 30px 0 30px;
    font-size: 25px;
  }
  .polar-content-parent-flex {
  }
  .content-title {
    width: 100%;
    display: flex;
    align-items: center;
    h2 {
      padding: 0 30px 0 10px;
      font-size: 25px;
    }
  }
  @media (max-width: 450px) {
    .content-title {
      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
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
  {
    id: "3",
    title: "(주)지이디 2025년 사업보고의 건",
    paragraph1: `안녕하십니까, 주식회사 지이디 대표이사 강동연입니다. 다사다난했던 2025년도가 저물어가고 있습니다. 2025년 연말의 기점에서 한 해 사업보고를 공지하고자 합니다.`,

    paragraph0: [
      {
        "1. CES 2025 참가의 건": `- 라스베이거스 CES 2025에 지이디의 기술력을 인정받아 유레카 파크에 초청받아 참석하였습니다.
- CES에 초청된 기술은 지이디의 파이프라인 중 차량 비상탈출문 4EVERS 입니다.
- 해외 유수의 완성차 브랜드들과 접촉하였고, 중국 전기차 업체와 부스미팅을 진행하였습니다.
- 중국 전기차 업체의 담당자는 해당 기업의 연구원이었고, 긍정적 검토를 진행하겠다고 하였습니다.
- 해외 발 수출 사업은 인증, 기능 및 안정성 검증 등의 사유로 물리적으로 시간이 많이 걸린다는 점 공지드립니다.`,
      },
      {
        "2. 싱가포르 GITI 타이어 300억 공급계약 체결의 건": `- CES 기간과 맞물려 진행된 GITI타이어 300억 공급계약은 싱가포르 본사에 대표이사가 직접 다녀왔습니다.
- GITI타이어의 한국 총판을 맞고 있는 주식회사 모은컴퍼니와 직접 계약을 맺었습니다.
- GITI타이어는 브랜드 가치평가 기준 세계 9위의 글로벌 타이어 제조업체입니다.
- 천연 수소를 활용하여 자동차 엔진 내부를 세척하는 기술 리부즈가 해당 계약의 주요 비지니스 모델입니다.
- 현재 국내 기준 약 50개의 지점을 보유하고 있으며 지점수는 지속적으로 증가하는 추세입니다.
- 또한 파트너사인 모은컴퍼니와 함께 버스운송조합, 화물운송조합, 지자체 등으로 사업 영역을 확장중입니다.`,
      },
      {
        "3. 오산대학교 미래전기자동차학과 업무 협약의 건": `- 오산대의 미래전기자동차학과는 전기차 특화 방향성이 정확한 대학기관입니다.
- 특히 고전압 시스템, EV 진단 장비, 실제 차량 기반교육 등 현장에 즉시 투입가능한 인력을 양성하는 곳입니다.
- 최근 사회적으로 큰 이슈가 되고있는 차량 급발진 방지를 위한 지이디의 기술력을 인정받은 이벤트입니다.`,
      },
      {
        "4. 급발진 경고 시스템 솔루션 'SAPS' 개발의 건": `- Sudden Acceleration Pre-Warning System의 개발을 완료하여 최소기능구현 제품까지 완성하였습니다.
- 고령운전자의 페달 오조작 방지를 위해 개발된 제품으로 급발진 시 엑셀을 밟고있음을 경고해주는 제품입니다.
- 국내 보험사들을 상대로 수요예측을 하고 있는 상황으로, 보험상품과 결합하여 판매하는 전략을 구상중입니다.
- 고령 운전자는 지속적으로 늘어나고 있는 추세로, 향후 택시 및 버스운전자 까지도 진출할 계획입니다.`,
      },
      {
        "5. 수산소 흡입기 LIFE BOX 사업의 건": `- 수소를 활용해 내연기관 클리닝을 하는 리부즈 이전에 이미 개발하고 구상했던 사업입니다.
- 사람에게 수소를 주입함으로서 선택적 항산화 작용과 염증 및 스트레스 완화 효과를 기대할 수 있습니다.
- 다만 의료기기로의 인증 과정이 복잡하기에 건강증진을 위한 보조적 기기 정도로 시장 진입을 계획하고 있습니다.
- 수소 힐링룸, 수소 카페, 수소 수면실 등 광범위한 시장진입이 가능할 것으로 기대하고 있습니다.`,
      },
      {
        "6. 기술 이전 및 M&A 관련의 건": `- 지이디는 지난 8월부터 M&A 전문 자문기관 'W'社와 컨택하여 기술이전 및 인수합병에 관해 조율 중입니다.
- 'W'社는 AI와 빅데이터를 활용해 M&A의 성공율을 높이는 기업으로 당사 기술에 높은 관심을 보이고 있습니다.
- 특히 무선충전 로봇 찰리는 1,000억 원, 수소클리닝 리부즈의 경우 350억 원으로 기술가치를 제시하였습니다.
- 이 건에 관해서는 진행상황이 생길 시 다시 공지하도록 하겠습니다.`,
      },
      {
        "7. 기술 직접 사업화의 건": `- 지이디는 신기술을 개발하는데에 특화된 기술집약형 기업입니다.
- 차량 안전과 무선충전에 대한 특허가 50개 이상인 거대한 연구소라고 보시면 되겠습니다.
- 당사는 기술이전을 통한 기술특례 IPO, 혹은 글로벌 M&A로 Exit model을 구상 중입니다.
- 리부즈가 시장에 진입할 당시 굉장한 난항들이 많았습니다.
- 하여 지이디의 기술을 시장에 데뷔시키고 사업을 가속화 할수 있는 기업과도 직접 접촉중입니다.
- 직접 사업화가 된다면 매출 시현이 빨라질 것이고, Exit model도 다각화 될 수 있을것으로 사료합니다.`,
      },
    ],

    paragraph2_1: `종합해서, 기술집약형 연구소 기업 지이디는 끊임없이 신제품을 기획/출시하고 있습니다. 단순히 특허나 기획에 그치지 않고 실제 기술 제품을 구현해 내고 있습니다. 이 과정만 하더라도 각고의 노력과 적잖은 자기자본이 투입됩니다. 저희 기술이 진정 빛이 나려면 양산에 성공해야 합니다. 양산이 되어야 대량 재고를 가질수 있고 이어서 대규모 납품도 가능합니다.`,

    paragraph2_2: `지이디는 위 내용의 투자유치를 위해 어려운 시장상황에서도 쉼없이 움직이고 있습니다. 지이디가 좋은 파트너를 찾을수 있게 응원해주시고 또한 직접 도움도 주실수 있기를 2026년도 기대해봅니다.`,

    paragraph3: `이상 2025년의 사업 진행현황 공지를 마무리하고자 합니다. 사내외에서 힘써주고 계신분들과 대표이사 저 역시 누구보다 빠른속도로 기업을 성장시키고자 최선을 다하고 있습니다. 저희 주식회사 지이디에 보내주실 의견이나, 사업 확장에 관해 조언해주실 분들은 언제든 연락주시기 바랍니다. 올 한해도 수고 많으셨습니다. 새해 복 많이 받으시고 다가오는 2026년에도 건승하시길 바라겠습니다.`,

    creator: "대표이사 강 동 연       (직인생략)",
    companyName: "주식회사 지 이 디",
    date: "2025년 12월 18일",
  },

  {
    id: "2",
    title: "(주)지이디 2025 Lasvegas CES 참가의 건",
    paragraph0: [
      { 일시: "2025년 1월 07일 ~ 동년 동월 10일 까지" },
      { 참가지위: "CTA 심사 통과에 따른 CES 한국관 부스 사용 및 참가" },
      {
        참가기술:
          "자동차 비상탈출문 포에버스&포에버더블에스(ForeverS, ForeverSS)",
      },
    ],
    paragraph1:
      "안녕하세요, 주식회사 지이디 입니다. 당사의 2025년 CES 박람회 참가에 관한 내용을 다음과 같이 공지합니다.",
    paragraph2_1:
      "전세계 전기차 화재사고의 원인을 근본적으로 해결할 수 있는 비상탈출문 기술로 2025 CES에 한국을 대표하는 기업으로 영광스럽게 참가하게 되었습니다.",
    paragraph2_2:
      "당사는 CTA(주최단체)의 기술 심사를 통해 개별적으로 선별된 케이스로, 부스비 및 기타 프로모션 비용 등을 지원받아 독보적인 지위로 본 박람회에 참가할 수 있게 되었습니다. ",
    paragraph3:
      "1억 불 이상의 수주를 목표로 참가하는 본 박람회 참가에 대해 당사를 향한 많은 응원 부탁드리며 아울러 저희 지이디를 아껴주시는 많은 분들에게 새해 복 많이 받으시라는 감사의 인사를 올립니다.",
    creator: "대표이사 강 동 연       (직인생략)",
    companyName: "주식회사 지 이 디",
    date: "2024년 12월 31일",
  },

  {
    id: "1",
    title: "전자증권 전환 대상 주권 권리자(주주) 보호 및 조치사항 안내",
    paragraph1:
      "2019.09.16 「주식·사채 등의 전자등록에 관한 법률(이하 “전자증권법”)」이 시행됨에 따라 당사의 전자증권 전환 대상 주권 권리자를 보호하기 위하여 전자증권법 제27조 1항에 근거하여 아래의 사항을 통지합니다.",
    paragraph2_1:
      "1. 전자등록일(2024년 06월 28일)부터 주주(권리자)가 소유중인 실물증권(전환 대상 주권)은 효력을 잃게 됩니다. ",
    paragraph2_2:
      "2. 따라서, 주주(권리자)는 당사의 전자등록일 5영업일 전까지 소유중인 실물증권을 제출하고, 증권회사 계좌로 입고 신청하시기 바랍니다. ",
    paragraph3:
      "[참고] 당사(발행인)는 전자등록일(2024년 06월 28일)의 직전영업일에 주주명부에 기재된 권리자를 기준으로 전자등록이 되도록 전자등록기관(한국예탁결제원)에 요청할 예정입니다.",
    creator: "대표이사 강 동 연       (직인생략)",
    companyName: "주식회사 지 이 디",
    date: "2024년  05월  23일",
  },
];

const BootstrapDialog = MUIstyle(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const Announcements = () => {
  const { isLanguage } = useContext(LanguageContext);

  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [dialogData, setDialogData] = useState(null);

  const handleClose = () => setOpen(false);

  const tableCellHandler = (row) => {
    setOpen(true);
    setDialogData(row);
  };

  // 첫 페이지 초기 세팅 (0.5 -> 0으로 수정)
  useEffect(() => {
    setTableData(rows.slice(0, 8));
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * 8;
    const endIndex = startIndex + 8;
    setTableData(rows.slice(startIndex, endIndex));
  }, [currentPage]);

  const paginationChangeHandler = (event, page) => setCurrentPage(page);

  return (
    <>
      <AnnouncementsWrapper>
        <h1>{isLanguage === 20 ? "공고정보" : "Announcements"}</h1>
        <AnnouncementsContentWrapper>
          <AnnouncementTableContainer>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      key={`temp1`}
                      style={{ fontWeight: "900", color: "#8a8a8a" }}
                    >
                      Title
                    </TableCell>
                    <TableCell
                      key={`temp2`}
                      style={{ fontWeight: "900", color: "#8a8a8a" }}
                      align="right"
                    >
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {tableData.map((row) => (
                    <TableRow
                      key={`${row.id}`}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      style={{ height: "70px" }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        onClick={() => tableCellHandler(row)}
                        style={{ cursor: "pointer" }}
                      >
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Stack
              spacing={2}
              style={{
                margin: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pagination
                count={Math.ceil(rows.length / 8)}
                defaultPage={1}
                siblingCount={0}
                onChange={paginationChangeHandler}
              />
            </Stack>
          </AnnouncementTableContainer>
        </AnnouncementsContentWrapper>

        {open && (
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
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent dividers>
              <Typography
                gutterBottom
                sx={{
                  marginBottom: "30px",
                  fontWeight: "800",
                  textAlign: "center",
                  whiteSpace: "pre-line",
                }}
              >
                {dialogData?.title}
              </Typography>

              <Typography
                gutterBottom
                sx={{ marginBottom: "30px", whiteSpace: "pre-line" }}
              >
                {dialogData?.paragraph1}
              </Typography>

              <Typography
                gutterBottom
                sx={{ marginBottom: "30px", textAlign: "center" }}
              >
                <span style={{ justifyContent: "center" }}>-- 아래 --</span>
              </Typography>

              {/* ✅ paragraph0(1~7 항목)을 제목/본문 분리 출력 */}
              {dialogData?.paragraph0?.map((data, idx) => {
                const subject = Object.keys(data)[0];
                const content = Object.values(data)[0];

                return (
                  <div key={`${subject}-${idx}`} style={{ marginBottom: "18px" }}>
                    <Typography sx={{ fontWeight: 800, marginBottom: "6px" }}>
                      {subject}
                    </Typography>
                    <Typography sx={{ whiteSpace: "pre-line" }}>{content}</Typography>
                  </div>
                );
              })}

              <Typography
                gutterBottom
                sx={{ marginTop: "10px", marginBottom: "10px", whiteSpace: "pre-line" }}
              >
                {dialogData?.paragraph2_1}
              </Typography>

              <Typography
                gutterBottom
                sx={{ marginBottom: "30px", whiteSpace: "pre-line" }}
              >
                {dialogData?.paragraph2_2}
              </Typography>

              <Typography
                gutterBottom
                sx={{ marginBottom: "30px", whiteSpace: "pre-line" }}
              >
                {dialogData?.paragraph3}
              </Typography>

              <Typography
                gutterBottom
                sx={{
                  marginBottom: "20px",
                  fontWeight: "600",
                  textAlign: "center",
                  whiteSpace: "pre-line",
                }}
              >
                {dialogData?.date}
              </Typography>

              <Typography
                gutterBottom
                sx={{
                  marginBottom: "20px",
                  fontWeight: "600",
                  textAlign: "center",
                  whiteSpace: "pre-line",
                }}
              >
                {dialogData?.companyName}
              </Typography>

              <Typography
                gutterBottom
                sx={{
                  marginBottom: "20px",
                  fontWeight: "600",
                  textAlign: "center",
                  whiteSpace: "pre-line",
                }}
              >
                {dialogData?.creator}
              </Typography>
            </DialogContent>

            <DialogActions>
              <Button autoFocus onClick={handleClose}>
                닫기
              </Button>
            </DialogActions>
          </BootstrapDialog>
        )}
      </AnnouncementsWrapper>
    </>
  );
};
