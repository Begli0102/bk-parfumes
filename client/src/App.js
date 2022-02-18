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

import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import ProductProvider from "./context/ProductContext";

const Container = styled.div``;

function App() {
  return (
    <Router basename={process.env.Public_URL}>
      <Container>
        <Nav />
        <Routes>
          {/*           
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} /> */}

          <Route exact path="/register" render={() => <RegisterPage />} />
          <Route exact path="/cart" render={() => <CartPage />} />
          <Route exact path="/home" render={() => <HomePage />} />
          <Route exact path="/login" render={() => <LoginPage />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
