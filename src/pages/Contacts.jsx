import React from "react";

import styled from "styled-components";



const ContactsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const ContactsImgContainer = styled.div`
  height: 400px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  position: relative;
  img{
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
`;

export const Contacts = () => {


  return (
    <>
      <ContactsWrapper>
        <ContactsImgContainer>
          <img src={ process.env.PUBLIC_URL + "/img/contacts.png" } alt="companies"></img>
        </ContactsImgContainer>

      </ContactsWrapper>
    </>
  )
}