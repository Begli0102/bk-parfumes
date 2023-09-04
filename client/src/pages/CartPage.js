import React, { useContext } from 'react'
import { DeleteOutlined } from '@material-ui/icons'
import { ProductContext } from '../context/ProductContext'
import {
  Container,
  Title,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  // Item,
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
  Button
} from '../styled-components/cartPage'
import Footer from '../components/Footer';

const CartPage = () => {
  const { cartItems, removeItem, priceResult } = useContext(ProductContext)

  return (
    <>
      <Container>
        {cartItems.length === 0 ? (
          <Title>YOUR BAG IS EMPTY</Title>
        ) : (
          <Title>YOUR BAG</Title>
        )}
        <Bottom>
          <Info>
            {cartItems.map(product => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} alt='img' />
                </ProductDetail>

                <PriceDetail>
                  <ProductName>{product.title}</ProductName>
                  <Description>{product.description}</Description>
                </PriceDetail>
                <ProductPrice>€ {product.price}</ProductPrice>
                <Icon>
                  <DeleteOutlined
                    style={{
                      cursor: 'pointer',
                      color: 'crimson',
                      fontSize: '30px'
                    }}
                    onClick={() => removeItem(product._id)}
                  />
                </Icon>
              </Product>
            ))}
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem type='total'>
              <SummaryItemText>Total Price:</SummaryItemText>
              <SummaryItemPrice>€ {priceResult}</SummaryItemPrice>
            </SummaryItem>
            <Button>Proceed to checkout</Button>
          </Summary>
        </Bottom>
      </Container>
      <Footer />
    </>
  )
}

export default CartPage
