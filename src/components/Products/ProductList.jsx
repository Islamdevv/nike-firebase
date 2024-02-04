import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

const ProductList = () => {
  const { getProduct, data } = useProduct();
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Box
      className="container_list"
      sx={{
        padding: "50px 0",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {data.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </Box>
  );
};

export default ProductList;
