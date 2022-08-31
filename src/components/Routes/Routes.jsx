import { Route, Routes } from "react-router";
import { CartPage } from "../CartPage";
import { Navbar } from "../Navbar/Navbar";
import { ProductPage } from "../ProductPage";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};
