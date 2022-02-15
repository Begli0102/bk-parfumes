import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchDocuments = async () => {
    await axios
      .get("http://localhost:8080/products")
      .then((res) => {
        setProducts(res.data);

        console.log(res.data, "Data has been received");
      })
      .catch((error) => {
        console.log({ message: error });
      });
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        setCart,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
