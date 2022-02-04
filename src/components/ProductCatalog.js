import React, { useState } from "react";
import styled from "styled-components";
import { X, FunnelSimple, MagnifyingGlass } from "phosphor-react";
import productData from "../data/productData";
const SearchContainer = styled.div`
  width: 100%;
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
  width: 160px;
  height: 46px;
  margin: 2px;
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

const SearchInputContainer = styled.div`
  width: 1055px;
  height: 46px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 2px;
  opacity: 1;
  margin: 0 5px;
  display: flex;

  align-items: center;
  @media only screen and (max-width: 400px) {
    width: 50%;
  }
`;

const SearchField = styled.input`
  width: 100%;
  height: 100%;
  opacity: 1;
  border: none;

  padding: 2px;
`;

const SelectInput = styled.select`
  width: 288px;
  height: 46px;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d1d5db;
  border-radius: 2px;
  opacity: 1;
  @media only screen and (max-width: 400px) {
    width: 25%;
  }
`;

const Categories = styled.div`
  width: 100%;
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
  width: 100%;
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
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media only screen and (max-width: 900px) {
    width: 90vw;
  }
  @media only screen and (max-width: 400px) {
    width: 100vw;
  }
`;

const Product = styled.div`
  width: 170px;
  height: 250px;
  
  text-align: "left"
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

const ProductCatalog = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <>
      <SearchContainer>
        <FilterButton
          onClick={e => {
            setShowCategories(!showCategories);
          }}
        >
          {showCategories ? (
            <X style={{ position: "relative", marginRight: "5px" }} size={17} />
          ) : (
            <FunnelSimple
              style={{ position: "relative", marginRight: "5px" }}
              size={17}
            />
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
          </CategoriesContainer>
        ) : (
          ""
        )}
      </Categories>
      <ProductsContainer>
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
    </>
  );
};

export default ProductCatalog;
