import React from "react";
import styled from "styled-components";
import { ShoppingCart, List } from "phosphor-react";

const Header = styled.div`
  height: 10vh;
  position: fixed;
  width: 100vw;
  background-color: #fff;
  display: flex;
  z-index: 10;
  justify-content: center;
  box-shadow: 0 8px 6px -8px black;
`;

const HeaderContainer = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }

  @media only screen and (max-width: 400px) {
    width: 90vw;
  }
`;

const LeftHeader = styled.div`
  width: 40vw;
  height: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 900px) {
    width: 45vw;
  }
  @media only screen and (max-width: 400px) {
    width: 50vw;
  }
`;

const RightHeader = styled.div`
  width: 40vw;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 900px) {
    width: 45vw;
  }
  @media only screen and (max-width: 400px) {
    width: 50vw;
  }
`;

const BrandName = styled.div`
  width: 32px;
  height: 36px;
  font-size: 30px;
  color: #2d5e54;
  margin-right: 40px;
  background: url("/assets/es_logo_black 1.jpg") 0% 0% no-repeat padding-box;
  opacity: 1;
  @media only screen and (max-width: 400px) {
    margin-right: 0px;
  }
`;

const Link = styled.div`
  width: 55px;
  height: 19px;
  margin-right: 8px;
  color: #3a3a3a;
  opacity: 0.5;
  cursor: pointer;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

const ShoppingCartIcon = styled.div`
  width: 38px;
  height: 38px;
  background: #f1e0cd 0% 0% no-repeat padding-box;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  width: 38px;
  height: 38px;
  background-color: #f2f4f4;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

const CreatPostButton = styled.button`
  width: 117px;
  border: none;
  height: 35px;
  text-align: center;
  cursor: pointer;
  background-color: #3a3a3a;
  color: #fff;
  padding: 5px;
  cursor: pointer;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

const Menu = styled.div``;

const Header1 = () => {
  return (
    <Header>
      <HeaderContainer>
        <LeftHeader>
          <BrandName></BrandName>
          <Link>Explore</Link>
          <Link>Guides</Link>
          <Link>Shop</Link>
          <Link>Articles</Link>
        </LeftHeader>
        <RightHeader>
          <ShoppingCartIcon>
            <ShoppingCart size={18} />
          </ShoppingCartIcon>
          <MenuIcon>
            <List size={17} />
          </MenuIcon>
          <CreatPostButton>Create Post</CreatPostButton>
        </RightHeader>
      </HeaderContainer>
    </Header>
  );
};

export default Header1;
