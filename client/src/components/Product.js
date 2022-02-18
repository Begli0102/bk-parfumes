import React, { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";

import {
  Container,
  Image,
  Wrapper,
  Title,
  Description,
  Price,
  Button,
} from "../styled-components/product";

const Product = ({ product, title, description, price, img }) => {
  const { cart, setCart, setTotalPrice } = useContext(ProductContext);

  const addToCart = () => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, cart) => acc + cart.price, 0));
  }, [cart]);
  return (
    <>
      <Container>
        <Image src={img} alt={img}></Image>
        <Wrapper>
          <Title>{title}</Title>
          {/* <Description> {description.substring(0, 200)}...</Description> */}
          <Price>Price: € {price}</Price>
          {/* <Link to ={`/${product._id}`}> */}
          <Button className="add" onClick={addToCart}>
            Add to Cart
          </Button>
          {/* </Link> */}
        </Wrapper>
      </Container>
    </>
  );
};

export default Product;
