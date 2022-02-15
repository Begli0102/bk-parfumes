import React, { useContext } from "react";
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
    setTotalPrice(cart.reduce((acc, curr) => acc + curr.price, 0));

    setCart([...cart, product]);
  };

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
