import React, { useState } from "react";

import styles from "@/styles/components/Products/ProductItemListView.module.css";
import Modal from "../Modal/Modal";
import OrderDetails from "./OrderDetails";

function OrderItem(props) {
  const [showModal, setShowModal] = useState(false);
  function closeModal() {
    setShowModal(false);
  }
  return (
    <>
      <div>
        <Modal isOpen={showModal} onClose={closeModal}>
          <OrderDetails order={props.product} />
        </Modal>
      </div>
      <div
        className={styles.productCard}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img
          src={props.product.image}
          alt={props.product.name}
          className={styles.productImage}
        />
        <h2>{props.product.name}</h2>
        <p className={styles.description}>{props.product.description}</p>
        <p className={styles.price}>
          {/* <span className={styles.originalPrice}>${props.product.price}</span> */}
          <span className={styles.discountedPrice}>${props.product.price}</span>
        </p>

        <div className={styles.buttonContainer}>
          <span className={styles.quantity}>
            quantity : {props.product.quantity}
          </span>
        </div>
      </div>
    </>
  );
}

export default OrderItem;
