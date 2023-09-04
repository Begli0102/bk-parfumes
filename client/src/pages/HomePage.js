import { useContext } from 'react'
import Footer from '../components/Footer'
import Product from '../components/Product'
import { ProductContext } from '../context/ProductContext'
import { Container } from '../styled-components/homePage'

const HomePage = () => {
  const { products } = useContext(ProductContext)

  return (
    <>
      <Container>
        {products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </Container>
      <Footer />
    </>
  )
}

export default HomePage
