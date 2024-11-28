import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export default function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});

  const fetchAllProducts = async () => {
    const res = await fetch("data.json");
    const data = await res.json();
    setProducts(data);
  };
  const fetchSingleProduct = async (id) => {
    const res = await fetch(`data.json`);
    const data = await res.json();
    const product = data.find((item) => item.id.toString() === id);
    if (product) {
      setSingleProduct(product);
    } else {
      console.log("product not found");
    }
    console.log(`single products is ${singleProduct}`);
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <ProductsContext.Provider
      value={{ products, singleProduct, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
