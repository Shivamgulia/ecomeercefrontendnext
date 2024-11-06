import React, { Fragment, useEffect, useState } from "react";

import ProductItem from "./ProductItem";

import styles from "@/styles/components/Products/ProductList.module.css";
import { useRouter } from "next/router";

function ProductList(props) {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setProducts(props.products);
  }, []);

  return (
    <div
      className={
        router.pathname == "/cart" ? styles.horizontallist : styles.list
      }
    >
      {products.map((product, index) => (
        <div key={index}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
