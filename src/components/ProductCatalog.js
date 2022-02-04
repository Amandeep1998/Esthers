import React, { useState } from "react";
import styled from "styled-components";
import { X, FunnelSimple } from "phosphor-react";
import productData from "../data/productData";

const SearchContainer = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 400px) {
    width: 20%;
    font-size: 10px;
    margin: 1px;
  }
`;

const SearchField = styled.input`
  width: 70%;
  height: 40px;
  margin: 2px;
  padding: 2px;
  @media only screen and (max-width: 400px) {
    width: 50%;
    margin: 1px;
  }
`;

const SelectInput = styled.select`
  width: 20%;
  height: 40px;
  margin: 2px;
  @media only screen and (max-width: 400px) {
    width: 25%;
    margin: 1px;
  }
`;

const Categories = styled.div`
  width: 100%;
  height: 8vh;
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 6vh;
  }
  @media only screen and (max-width: 400px) {
    width: 100%;
    height: 6vh;
    margin-top: 2px;
  }
`;

const CategoriesContainer = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  text-decoration: none;
  outline: none;
  overflow-x: scroll;
  transition: all 0.1s;
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
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Product = styled.div`
  width: 25%;
  height: 250px;
  padding: 2px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    width: 50%;
  }
  @media only screen and (max-width: 400px) {
    width: 90%;
  }
`;

const ProductCatalog = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <>
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
        {productData.map(prod => {
          return (
            <Product>
              <img
                style={{
                  width: "100%",
                  height: "60%"
                }}
                src={prod.img}
                alt="Some Image"
              />
              <p style={{ height: "10px" }}>Brand name</p>
              <p style={{ height: "10px" }}>{prod.name}</p>
              <p style={{ color: "#2D5E54" }}>${prod.price}SEK</p>
            </Product>
          );
        })}
      </ProductsContainer>
    </>
  );
};

export default ProductCatalog;
