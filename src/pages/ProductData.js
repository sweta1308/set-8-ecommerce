import {  useState, useEffect } from "react";
import { ProductList } from "./ProductList";
import { fakeFetch } from "../api/fakeFetch";

export const ProductData = () => {
  const [productData, setProductData] = useState([])
    const getProductData = async () => {
        try {
          const response = await fakeFetch("https://example.com/api/products");
          if (response.status === 200) setProductData(response.data.products);
        } catch (response) {
          console.log(response.message);
        }
      };
      useEffect(() => {
        getProductData();
      }, []);

  
  
  return (
    <>
      <ProductList product={productData}  />
    </>
  );
};

