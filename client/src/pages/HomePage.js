import { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../context/ProductContext";
import { Container } from "../styled-components/homePage";

const HomePage = () => {
  const { products } = useContext(ProductContext);

  console.log(products);
  return (
    <Container>
      {products.map((product) => (
        <Product
          product={product}
          productId={product._id}
          title={product.title}
          description={product.description}
          price={product.price}
          img={product.img}
        />
      ))}
    </Container>
  );
};

export default HomePage;
