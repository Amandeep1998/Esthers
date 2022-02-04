import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  width: 100vw;
  height: 7vh;
  background: #23574c 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const FooterContainer = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  @media only screen and (max-width: 400px) {
    width: 90vw;
    font-size: 10px;
    white-space: nowrap;
  }
`;
const LeftFooter = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 400px) {
    width: 60vw;
  }
`;

const RightFooter = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 400px) {
    width: 40vw;
  }
`;

const Link = styled.div`
  margin-right: 10px;
`;

const Footer1 = () => {
  return (
    <Footer>
      <FooterContainer>
        <LeftFooter>
          <Link>Help</Link>
          <Link>Feedback</Link>
          <Link>Carrers</Link>
          <Link>Business enquries</Link>
        </LeftFooter>
        <RightFooter>Esther’s Scandinavia AB ©</RightFooter>
      </FooterContainer>
    </Footer>
  );
};

export default Footer1;
