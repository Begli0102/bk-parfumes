import React from "react";
import "./App.css";
import styled from "styled-components";

//Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
// import LandingPage from "./pages/LandingPage";

//Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProductProvider from "./context/ProductContext";

const Container = styled.div``;

function App() {
  return (
    <Router>
      <Container>
        <Nav />
        <Routes>
          {/* <Route exact path="/" element={<LandingPage />} /> */}
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path={process.env.PUBLIC_URL + "/home"}>
            <HomePage />
          </Route>

          {/* <Route exact path="/home" element={<HomePage />} /> */}
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
