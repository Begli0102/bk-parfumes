import React, { useContext, useState, useEffect } from "react";
import { DeleteOutlined } from "@material-ui/icons";
import { ProductContext } from "../context/ProductContext";
import {
  Container,
  Title,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Item,
  ProductName,
  PriceDetail,
  Description,
  ProductPrice,
  Icon,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "../styled-components/cartPage";
import { useParams } from "react-router-dom";
const CartPage = () => {
  const { products, cart, setCart, totalPrice, setTotalPrice } =
    useContext(ProductContext);

  let { id } = useParams();

  let product = products.filter((product) => product._id == id);

  const removeItem = (id) => {
    const newItems = cart.filter((item) => item.id !== id);
    setCart(newItems);

    const priceResult = cart.reduce(
      (acc, val) => (acc -= val.price),
      totalPrice
    );
    setTotalPrice(priceResult);
  };

  return (
    <Container>
      {cart.length === 0 ? (
        <Title>YOUR BAG IS EMPTY</Title>
      ) : (
        <Title>YOUR BAG</Title>
      )}
      <Bottom>
        <Info>
          {cart.map((product) => (
            <Product>
              <ProductDetail>
                <Image src={product.img} alt="img"></Image>
              </ProductDetail>

              <PriceDetail>
                <ProductName>{product.title}</ProductName>
                <Description>{product.description}</Description>
              </PriceDetail>
              <ProductPrice>€ {product.price}</ProductPrice>
              <Icon>
                <DeleteOutlined
                  style={{
                    cursor: "pointer",
                    color: "crimson",
                    fontSize: "30px",
                  }}
                  onClick={() => removeItem(product.id)}
                />
              </Icon>
            </Product>
          ))}
        </Info>

        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem type="total">
            <SummaryItemText>Total Price:</SummaryItemText>
            <SummaryItemPrice>€ {totalPrice}</SummaryItemPrice>
          </SummaryItem>
          <Button>Proceed to checkout</Button>
        </Summary>
      </Bottom>
    </Container>
  );
};

export default CartPage;
