

import styled from "styled-components";



const Dot = ({ num, currentPage }) => {
    return (
      <div
        style={{
          width: 10,
          height: 10,
          border: "1px solid black",
          borderRadius: 999,
          backgroundColor: currentPage === num ? "black" : "transparent",
          transitionDuration: 1000,
          transition: "background-color 0.5s",
          zIndex: 9,
          opacity: 0.9
        }}
      ></div>
    );
  };
  
  const Dots = ({ currentPage }) => {
    return (
      <div style={{ position: "fixed", top: "45%", right: 50 ,opacity: 0.9}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: 20,
            height: 100,
            zIndex: 9,
          }}
        >
          <Dot num={1} currentPage={currentPage}></Dot>
          <Dot num={2} currentPage={currentPage}></Dot>
          <Dot num={3} currentPage={currentPage}></Dot>
        </div>
      </div>
    );
  };
  
  export default Dots;