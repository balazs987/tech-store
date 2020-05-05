import React from "react";
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productsBcg from "../images/productsBcg.jpeg";

function ProductPage() {
  return (
    <React.Fragment>
      <Hero img={productsBcg} />
      <Products />
    </React.Fragment>
  );
}

export default ProductPage;
