import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { createContext, useContext, useState } from "react";
import { db } from "../firebase";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const productsCollectionRef = collection(db, "products");
  const [data, setData] = useState([]);

  //! addProduct
  async function addProduct(neProduct) {
    await addDoc(productsCollectionRef, neProduct);
  }

  //! getProduct
  async function getProduct() {
    const data = await getDocs(productsCollectionRef);
    setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  const values = {
    addProduct,
    getProduct,
    data,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
