import React, { Fragment, useEffect, useState } from "react";

import ProductItem from "./ProductItem";

import styles from "@/styles/components/Products/ProductList.module.css";

function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(props.products);
  }, []);
  return (
    <div className={styles.list}>
      {products.map((product, index) => (
        <div key={index}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
