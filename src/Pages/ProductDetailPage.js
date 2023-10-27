import React from "react";
import ProductDetailes from "../features/ProductList/components/ProductDetailes";
import Navbar from "../features/Navbar/Navbar";

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetailes />
      </Navbar>
    </div>
  );
};

export default ProductDetailPage;
