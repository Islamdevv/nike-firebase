import React from "react";
import Admin from "../components/admin/Admin";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
  const PUBLIC = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/productPage", element: <ProductsPage />, id: 2 },
  ];
  return (
    <Routes>
      {PUBLIC.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
