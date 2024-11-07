import React from "react";

import styles from "@/styles/components/Orders/OrderDetails.module.css";

function OrderDetails(props) {
  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.profileTitle}>Order Information</h2>
      <div className={styles.profileInfo}>
        <div className={styles.profileItem}>
          <span className={styles.label}>Product Name:</span> {props.order.name}
        </div>
        <div className={styles.profileItem}>
          <span className={styles.label}>Address:</span> {props.order.address}
        </div>
        <div className={styles.profileItem}>
          <span className={styles.label}>Contact:</span> {props.order.contact}
        </div>
        <div className={styles.profileItem}>
          <span className={styles.label}>Quantity:</span> {props.order.quantity}
        </div>
        <div className={styles.profileItem}>
          <span className={styles.label}>Customer Name:</span>
          {props.order.customerName}
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
