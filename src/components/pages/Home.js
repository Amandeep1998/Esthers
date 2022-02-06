import React, { useState } from "react";
import "./Home.css";
import styled from "styled-components";
import productData from "../../data/productData.json";
import { Gear, X, FunnelSimple, Plus, MagnifyingGlass } from "phosphor-react";
import { Button, Modal } from "react-bootstrap";
import ProductCatalog from "../ProductCatalog";

const Container = styled.div`
  width: 100vw;
  height: 35vh;
  padding-top: 60px;
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
  align-items: center;
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
  align-items: "center";

  @media only screen and (max-width: 400px) {
    width: 60vw;
  }
`;
const RightHeaderContainer = styled.div`
  margin: 30px 0px;
  width: 40vw;
  display: flex;
  justify-content: flex-end;
  @media only screen and (max-width: 400px) {
    width: 30vw;
  }
`;

const HomeLinks = styled.div`
  width: 80vw;
  height: 7vh;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  @media only screen and (max-width: 400px) {
    width: 100vw;
  }
`;

const Links = styled.div`
  margin-right: 15px;
  cursor: pointer;
  text-align: left;
  font: normal normal medium 16px/19px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 0.5;
`;

const SearchContainer = styled.div`
  width: 80vw;
  height: 7vh;
  display: flex;
  position: relative;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    width: 90vw;
    height: 4vh;
  }
`;

const FilterButton = styled.button`
  width: 130px;
  height: 42px;
  margin-right: 18px;
  cursor: pointer;
  background: #3a3a3a 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  color: #fff;
  border: none;
  @media only screen and (max-width: 400px) {
    width: 20%;
    font-size: 10px;
  }
`;

const AddProdButton = styled.button`
  width: 150px;
  height: 38px;
  margin: 2px;
  cursor: pointer;
  background-color: #2d5e54;
  color: #fff;
  border: none;
`;

const SearchInputContainer = styled.div`
  width: 1055px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  opacity: 1;
  margin-right: 18px;

  display: flex;
  align-items: center;
  @media only screen and (max-width: 400px) {
    width: 50%;
  }
`;

const SearchField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  opacity: 1;
  margin: 0 5px;
  padding-left: 13px;
  &:focus {
    outline: none;
  }
`;

const SelectInput = styled.select`
  width: 288px;
  height: 42px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d1d5db;
  border-radius: 2px;
  opacity: 1;
  padding-left: 10px;
  @media only screen and (max-width: 400px) {
    width: 25%;
  }
`;

const Categories = styled.div`
  width: 80vw;
  height: 8vh;
  text-align: left;
  font: normal normal normal 14px/18px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 1;
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
  margin: 5px 10px 5px 0px;
  padding: 10px;
  white-space: nowrap;
  border-radius: 999px;
  background-color: #fff;
  border: none;
  text-align: left;
  font: normal normal normal 14px/18px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 1;
  @media only screen and (max-width: 400px) {
    font-size: 10px;
  }
`;

const ProductsContainer = styled.div`
  width: 80vw;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  column-gap: 36px;
  row-gap: 7px;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  @media only screen and (max-width: 400px) {
    width: 100vw;
    justify-content: center;
  }
`;

const Product = styled.div`
  width: 200px;
  height: 288px;
  text-align: left;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  @media only screen and (max-width: 900px) {
    width: 240px;
    margin: 2px;
  }
  @media only screen and (max-width: 400px) {
    width: 400px;
  }
`;

const Name = styled.div`
  width: 147px;
  height: 21px;
  margin-right: 12px;
  font: normal normal bold 18px/21px Strawford;
  letter-spacing: 0px;
  color: #3a3a3a;
  opacity: 1;
`;

const SettingsIcon = styled.div`
  width: 23px;
  height: 23px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 999px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 400px) {
    width: 15px;
    height: 15px;
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
        alignItems: "center",
      }}
    >
      <Container>
        <HeaderContainer>
          <LeftHeaderContainer>
            <Name>kinjalkhant_cCzAq</Name>
            <SettingsIcon>
              <Gear size={15} />
            </SettingsIcon>
          </LeftHeaderContainer>
          <RightHeaderContainer>
            <Avatar>
              <AvatarLabel>K</AvatarLabel>
            </Avatar>
          </RightHeaderContainer>
        </HeaderContainer>
      </Container>
      <HomeLinks>
        <Links>Posts</Links>
        <Links>Guides</Links>
        <Links>Collections</Links>
        <Links>Drafts</Links>
        <Links style={{ opacity: "1" }}>MyStore</Links>
      </HomeLinks>
      <hr
        style={{ width: "80%", backgroundColor: "#3A3A3A", opacity: "0.1" }}
      />
      <SearchContainer>
        <FilterButton
          onClick={(e) => {
            setShowCategories(!showCategories);
          }}
        >
          {showCategories ? (
            <X style={{ marginRight: "8px" }} size={21} />
          ) : (
            <FunnelSimple style={{ marginRight: "8px" }} size={21} />
          )}
          Filter
        </FilterButton>
        <SearchInputContainer>
          <SearchField placeholder="Search Products" />
          <MagnifyingGlass size={28} />
        </SearchInputContainer>

        <SelectInput>
          <option>Newest</option>
        </SelectInput>
      </SearchContainer>
      <Categories>
        {showCategories ? (
          <CategoriesContainer>
            <Category
              style={{ background: "#F2F4F4 0% 0% no-repeat padding-box" }}
            >
              All Categories
            </Category>
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
            <Category>Kitchen</Category>
            <Category>Bathroom</Category>
          </CategoriesContainer>
        ) : (
          ""
        )}
      </Categories>
      <ProductsContainer>
        <Product>
          <div
            style={{
              width: "100%",
              height: "70%",
              padding: "10px",
              border: "1px solid #EEEEEE",
            }}
          >
            <div
              style={{
                background: "#F2F4F4 0% 0% no-repeat padding-box",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <AddProdButton onClick={handleShow}>
                <Plus size={20} style={{ marginRight: "4px" }} />
                Add Products
              </AddProdButton>
            </div>
          </div>
          <p
            style={{
              whiteSpace: "nowrap",
              fontSize: "12px",
              font: "normal normal medium 16px/19px Strawford",
              color: "#3A3A3A",
              marginTop: "4px",
            }}
          >
            Select products from catalog
          </p>
        </Product>

        {productData.map((prod) => {
          return (
            <Product>
              <img
                style={{
                  width: "100%",
                  height: "70%",
                }}
                src={prod.img}
                alt="Some Image"
              />
              <p style={{ height: "4px", color: "#3A3A3A", opacity: 0.7 }}>
                Brand name
              </p>
              <p style={{ height: "4px", color: "3A3A3A" }}>{prod.name}</p>
              <p style={{ color: "#23574C", height: "4px" }}>
                ${prod.price}SEK
              </p>
            </Product>
          );
        })}
      </ProductsContainer>
      <Modal dialogClassName="modal-80w" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Catalog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductCatalog />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
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
