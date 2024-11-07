import React, { useEffect, useState } from "react";

import verticalstyles from "@/styles/components/Products/ProductItem.module.css";
import horizontalstyles from "@/styles/components/Products/ProductItemListView.module.css";
import { useRouter } from "next/router";
import Modal from "../Modal/Modal";
import UpdateProductForm from "../Forms/UpdateProductForm";

function ProductItem(props) {
  const [styles, setStyles] = useState(verticalstyles);
  const [isCart, setIsCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  function handleBuy(id) {}

  function handleCart(id) {}

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    if (router.pathname == "/cart") {
      setStyles(horizontalstyles);
      setIsCart(true);
    }
  }, []);

  return (
    <>
      <div>
        <Modal isOpen={showModal} onClose={closeModal}>
          <UpdateProductForm product={props.product} />
        </Modal>
      </div>
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
            ${props.product["discounted_price"]}
          </span>
          {isCart && (
            <span className={styles.quantity}>
              quantity : {props.product.quantity}
            </span>
          )}
        </p>
        {router.pathname == "/seller/products" && (
          <div className={styles.buttonContainer}>
            <button
              className={styles.editButton}
              onClick={() => setShowModal(true)}
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
        )}
        {router.pathname == "/" && (
          <div className={styles.buttonContainer}>
            <button
              className={styles.editButton}
              onClick={() => handleCart(props.product.id)}
            >
              Add To Cart
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => handleBuy(props.product.id)}
            >
              Buy
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductItem;
