import React, { createContext, useReducer, useState, useEffect } from "react";
import axios from "axios";
import ProductReducer from "./ProductReducer";
import { ADD_TO_CART, REMOVE_ITEM } from "./actionTypes";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [priceResult, setPriceResult] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const initalState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const fetchDocuments = async () => {
    await axios
      .get("https://bk-parfumes.herokuapp.com/products")
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

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated({ isAuthenticated: false });
    }
  }, []);

  useEffect(() => {
    setPriceResult(state.cartItems.reduce((acc, item) => acc + item.price, 0));
  }, [state.cartItems]);

  return (
    <ProductContext.Provider
      value={{
        products,
        priceResult,
        setPriceResult,
        isAuthenticated,
        setIsAuthenticated,
        cartItems: state.cartItems,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
