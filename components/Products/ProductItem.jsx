import React, { useEffect, useState } from "react";

import verticalstyles from "@/styles/components/Products/ProductItem.module.css";
import horizontalstyles from "@/styles/components/Products/ProductItemListView.module.css";
import { useRouter } from "next/router";

function ProductItem(props) {
  const [styles, setStyles] = useState(verticalstyles);
  const [isCart, setIsCart] = useState(false);

  const router = useRouter();

  const handleEdit = (id) => {
    alert(`Edit product with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (confirm(`Are you sure you want to delete this product?`)) {
      setProducts(products.filter((product) => product.id !== id));
      alert(`Product with ID: ${id} has been deleted.`);
    }
  };

  const handlePost = (id) => {
    if (confirm(`Are you sure you want to delete this product?`)) {
      setProducts(products.filter((product) => product.id !== id));
      alert(`Product with ID: ${id} has been deleted.`);
    }
  };

  useEffect(() => {
    console.log(router.pathname);
    if (router.pathname == "/cart") {
      setStyles(horizontalstyles);
      setIsCart(true);
    }
  }, []);

  return (
    <div className={styles.productCard}>
      <img
        src={props.product.image}
        alt={props.product.name}
        className={styles.productImage}
      />
      <h2>{props.product.name}</h2>
      <p className={styles.description}>{props.product.description}</p>
      <p className={styles.price}>
        <span className={styles.originalPrice}>${props.product.price}</span>
        <span className={styles.discountedPrice}>
          ${props.product.discountedPrice}
        </span>
        {isCart && (
          <span className={styles.quantity}>
            quantity : {props.product.quantity}
          </span>
        )}
      </p>
      <div className={styles.buttonContainer}>
        <button
          className={styles.editButton}
          onClick={() => handleEdit(props.product.id)}
        >
          Edit
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => handleDelete(props.product.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
