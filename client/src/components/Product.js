import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

import {
  Container,
  Image,
  Wrapper,
  Title,
  Price,
  Button
} from '../styled-components/product'

const Product = ({ product }) => {
  const { addToCart } = useContext(ProductContext)

  return (
    <>
      <Container>
        <Image src={product.img} alt=''></Image>
        <Wrapper>
          <Title>{product.title}</Title>
          <Price>Price: € {product.price}</Price>
          <Button className='add' onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Wrapper>
      </Container>
    </>
  )
}

export default Product
