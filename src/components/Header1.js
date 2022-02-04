import React from "react";
import styled from "styled-components";
import { ShoppingCart, List } from "phosphor-react";

const Header = styled.div`
  height: 8vh;
  position: fixed;
  width: 100vw;
  background-color: #fff;
  display: flex;
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
  font-size: 30px;
  color: #2d5e54;
  margin-right: 30px;
  @media only screen and (max-width: 400px) {
    margin-right: 0px;
  }
`;

const Link = styled.div`
  font-size: 17px;
  margin-right: 6px;
  color: #b5a8a8;
  @media only screen and (max-width: 400px) {
    display: none;
  }
`;

const ShoppingCartIcon = styled.div`
  width: 25px;
  height: 25px;
  background-color: #f1e0cd;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

const CreatPostButton = styled.button`
  width: 110px;
  border: none;
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
          <BrandName>Es</BrandName>
          <Link>Explore</Link>
          <Link>Guides</Link>
          <Link>Shop</Link>
          <Link>Articles</Link>
        </LeftHeader>
        <RightHeader>
          <ShoppingCartIcon>
            <ShoppingCart size={16} />
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
