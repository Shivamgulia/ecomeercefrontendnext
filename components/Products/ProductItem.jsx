import React from "react";

import styles from "@/styles/components/Products/ProductItem.module.css";

function ProductItem(props) {
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

// const styles = {
//   container: {
//     padding: "20px",
//     textAlign: "center",
//   },
//   productList: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//     gap: "20px",
//     marginTop: "20px",
//   },
//   productCard: {
//     border: "1px solid #ddd",
//     borderRadius: "5px",
//     padding: "15px",
//     textAlign: "center",
//     backgroundColor: "#fff",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   },
//   productImage: {
//     width: "100%",
//     height: "150px",
//     objectFit: "cover",
//     borderRadius: "5px",
//   },
//   description: {
//     color: "#555",
//     fontSize: "14px",
//     margin: "10px 0",
//   },
//   price: {
//     fontSize: "16px",
//     fontWeight: "bold",
//   },
//   originalPrice: {
//     textDecoration: "line-through",
//     color: "#999",
//     marginRight: "10px",
//   },
//   discountedPrice: {
//     color: "#e63946",
//   },
//   buttonContainer: {
//     display: "flex",
//     justifyContent: "space-around",
//     marginTop: "15px",
//   },
//   editButton: {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   deleteButton: {
//     backgroundColor: "#f44336",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   postButton: {
//     backgroundColor: "blue",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };
