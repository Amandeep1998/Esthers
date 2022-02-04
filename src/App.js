import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header1 from "./components/Header1";
import Footer1 from "./components/Footer1";

import Home1 from "./components/Home1";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header1 />
      <Routes>
        <Route path="/" element={<Home1 />} />
      </Routes>
      <Footer1 />
    </>
  );
};

export default App;
