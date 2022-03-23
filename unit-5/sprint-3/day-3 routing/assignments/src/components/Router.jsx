import {Routes, Route  } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { ProductsPage } from "./ProductsPage";


export const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/productpage" element={<ProductsPage/>}></Route>

        <Route path="/products/:id" element={<ProductsDetailsPage/>}></Route>
      </Routes>
    </>
  );
};
