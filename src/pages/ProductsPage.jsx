import React from "react";

import { Box } from "@mui/material";
import ProductFilter from "../components/Products/ProductFilter";
import Footer from "../components/Footer/Footer";
import NavbarCarusel from "../components/Navbar/NavbarCarusel";
import NavbarTest from "../components/Navbar/NavbarTest";
import UpNavbar from "../components/Navbar/UpNavbar";
import ProductList from "../components/Products/ProductList";

const ProductsPage = () => {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <UpNavbar />
        <NavbarTest />
        <NavbarCarusel />
        <Box
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "25%",
                sm: "25%",
                md: "25%",
                lg: "25%",
                xl: "25%",
              },
            }}
          >
            <ProductFilter />
          </Box>
          <Box
          // sx={{
          //   width: {
          //     xs: "100%",
          //     sm: "100%",
          //     md: "100%",
          //     lg: "100%",
          //     xl: "100%",
          //   },
          // }}
          >
            {/* <ProductSortPagination
                page={page}
                setPage={setPage}
                count={count}
              /> */}
            {/* currentData={currentData} */}
            <ProductList />
          </Box>
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default ProductsPage;
