import React, { useState } from "react";
import styled from "styled-components";
import productData from "../data/productData";
import { Gear, X, FunnelSimple } from "phosphor-react";
import { Button, Modal } from "react-bootstrap";
import ProductCatalog from "./ProductCatalog";

const Container = styled.div`
  width: 100vw;
  height: 40vh;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  background-color: #f1e0cd;
  @media only screen and (max-width: 900px) {
    height: 25vh;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  background-color: #f1e0cd;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  @media only screen and (max-width: 400px) {
    width: 100vw;
    justify-content: space-evenly;
    align-items: center;
  }
`;
const LeftHeaderContainer = styled.div`
  margin: 30px 0px;
  width: 40vw;
  display: flex;
  @media only screen and (max-width: 400px) {
    width: 45vw;
  }
`;
const RightHeaderContainer = styled.div`
  margin: 30px 0px;
  width: 40vw;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 400px) {
    width: 45vw;
  }
`;

const SettingsIcon = styled.div`
  width: 25px;
  height: 25px;
  margin-left: 5px;
  background-color: #f1e0cd;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  @media only screen and (max-width: 400px) {
    width: 15px;
    height: 15px;
  }
`;

const HomeLinks = styled.div`
  width: 80vw;
  height: 10vh;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  @media only screen and (max-width: 400px) {
    width: 90vw;
  }
`;

const Links = styled.div`
  margin: 10px;
  cursor: pointer;
  color: #b4bfac;
`;

const SearchContainer = styled.div`
  width: 80vw;
  height: 7vh;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    width: 90vw;
    height: 4vh;
  }
`;

const FilterButton = styled.button`
  width: 10%;
  height: 40px;
  margin: 2px;
  cursor: pointer;
  background-color: #3a3a3a;
  color: #fff;
  border: none;
  @media only screen and (max-width: 400px) {
    width: 20%;
    font-size: 10px;
  }
`;

const AddProdButton = styled.button`
  width: 100px;
  height: 40px;
  margin: 2px;
  cursor: pointer;
  background-color: #2d5e54;
  color: #fff;
  border: none;
`;

const SearchField = styled.input`
  width: 70%;
  height: 40px;
  margin: 2px;
  padding: 2px;
  @media only screen and (max-width: 400px) {
    width: 50%;
  }
`;

const SelectInput = styled.select`
  width: 20%;
  height: 40px;
  margin: 2px;
  @media only screen and (max-width: 400px) {
    width: 25%;
  }
`;

const Categories = styled.div`
  width: 80vw;
  height: 8vh;
  @media only screen and (max-width: 900px) {
    width: 90vw;
    height: 6vh;
  }
  @media only screen and (max-width: 400px) {
    width: 100vw;
    height: 4vh;
    margin-top: 2px;
  }
`;

const CategoriesContainer = styled.div`
  width: 80vw;
  height: 7vh;
  background-color: "green";
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  overflow-x: scroll;
  transition: all 0.1s;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
`;

const Category = styled.button`
  margin: 5px 10px;
  padding: 5px;
  border-radius: 30%;
  white-space: nowrap;
  background-color: #dce8d1;
  border 1px solid #dce8d1;
  @media only screen and (max-width: 400px) {
    font-size:10px;
  }
`;

const ProductsContainer = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  @media only screen and (max-width: 400px) {
    width: 100vw;
  }
`;

const Product = styled.div`
  width: 200px;
  height: 300px;
  padding: 3px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    width: 240px;
    margin: 2px;
  }
  @media only screen and (max-width: 400px) {
    width: 400px;
  }
`;

const Name = styled.div`
  font-size: 20px;
  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: #2d5e54;
  border-radius: 100%;
  text-align: center;
  @media only screen and (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`;

const AvatarLabel = styled.p`
  font-size: 60px;
  color: white;
  @media only screen and (max-width: 400px) {
    font-size: 30px;
  }
`;

const Home1 = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Container>
        <HeaderContainer>
          <LeftHeaderContainer>
            <Name>amandeepsaini_cCzAq</Name>
            <SettingsIcon>
              <Gear size={20} />
            </SettingsIcon>
          </LeftHeaderContainer>
          <RightHeaderContainer>
            <Avatar>
              <AvatarLabel>A</AvatarLabel>
            </Avatar>
          </RightHeaderContainer>
        </HeaderContainer>
      </Container>
      <HomeLinks>
        <Links>Posts</Links>
        <Links>Guides</Links>
        <Links>Collections</Links>
        <Links>Drafts</Links>
        <Links>MyStore</Links>
      </HomeLinks>
      <SearchContainer>
        <FilterButton
          onClick={() => {
            setShowCategories(!showCategories);
          }}
        >
          {showCategories ? (
            <X
              style={{ position: "relative", top: 3, marginRight: "3px" }}
              size={15}
            />
          ) : (
            <FunnelSimple
              style={{ position: "relative", top: 3, marginRight: "3px" }}
              size={15}
            />
          )}
          Filter
        </FilterButton>
        <SearchField placeholder="Search Products" />
        <SelectInput>
          <option>Newest</option>
        </SelectInput>
      </SearchContainer>
      <Categories>
        {showCategories ? (
          <CategoriesContainer>
            <Category>All Categories</Category>
            <Category>Living room</Category>
            <Category>Kitchen</Category>
            <Category>Bathroom</Category>
            <Category>Outdoor</Category>
            <Category>Bedroom</Category>
            <Category>Kids</Category>
            <Category>Decor</Category>
            <Category>Textiles</Category>
            <Category>Walls</Category>
            <Category>Art</Category>
            <Category>Modern</Category>
            <Category>Industrial</Category>
          </CategoriesContainer>
        ) : (
          ""
        )}
      </Categories>
      <ProductsContainer>
        <Product
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <AddProdButton onClick={handleShow}>Add Products</AddProdButton>
          <p style={{ position: "relative", top: 55, whiteSpace: "nowrap" }}>
            Select products from catalog
          </p>
        </Product>

        {productData.map(prod => {
          return (
            <Product>
              <img
                style={{
                  width: "100%",
                  height: "70%"
                }}
                src={prod.img}
                alt="Some Image"
              />
              <p style={{ height: "10px" }}>Brand name</p>
              <p style={{ height: "10px" }}>{prod.name}</p>
              <p style={{ color: "#2D5E54", height: "10px" }}>
                ${prod.price}SEK
              </p>
            </Product>
          );
        })}
      </ProductsContainer>
      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Catalog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductCatalog />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home1;
