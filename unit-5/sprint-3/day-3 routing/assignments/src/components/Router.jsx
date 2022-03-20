import {Routes, Route  } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { ProductsPage } from "./ProductsPage";


export const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<HomePage/>}></Route>
        <Route path="/productpage" element={<ProductsPage/>}></Route>
      </Routes>
    </>
  );
};
