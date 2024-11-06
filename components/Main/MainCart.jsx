import React from "react";
import ProductList from "../Products/ProductList";
import { demoCartProducts } from "../util/demoProducts";

function MainCart() {
  return (
    <div>
      <ProductList products={demoCartProducts} />
    </div>
  );
}

export default MainCart;
