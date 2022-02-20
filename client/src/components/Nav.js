import React, { useContext } from "react";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  MenuItem,
} from "../styled-components/nav";

const Nav = () => {
  const { cart } = useContext(ProductContext);
  let user = JSON.parse(localStorage.getItem("userInfo"));

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  return (
    <Container>
      <Wrapper>
        <Left style={{ textDecoration: "none", color: "white" }}>
          <Logo>BK-Parfumes</Logo>
        </Left>

        <Right>
          {!user ? (
            <>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/register"
              >
                <MenuItem>Register</MenuItem>
              </Link>

              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                <MenuItem>Log in</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/home"
              >
                <MenuItem>Home</MenuItem>
              </Link>

              <MenuItem onClick={logOut}>Log out</MenuItem>

              <MenuItem>
                <Link to="/cart">
                  <Badge badgeContent={cart.length} color="primary">
                    <ShoppingCartOutlined style={{ color: "white" }} />
                  </Badge>
                </Link>
              </MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Nav;
