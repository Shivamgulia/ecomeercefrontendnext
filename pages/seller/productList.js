// pages/seller/products.js
import React from "react";
import Navbar from "@/components/Navbar";


export default function Products() {
  // Sample product data
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Product 1",
      price: 100,
      discountedPrice: 80,
      description: "This is a sample description for Product 1.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Product 2",
      price: 150,
      discountedPrice: 120,
      description: "This is a sample description for Product 2.",
    },
    // Add more products as needed
  ];
  const handleEdit = (id) => {
    // Logic for editing the product
    alert(`Edit product with ID: ${id}`);
    // Here you can navigate to an edit page or open a modal
  };

  // Handler for deleting a product
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

  return (
    <>
    <Navbar />
    <div style={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Available Products</h1>
        <button style={styles.postButton} onClick={() => handlePost()}>
          Post New Product
        </button>
      </div>

      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.productImage}
            />
            <h2>{product.name}</h2>
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>
              <span style={styles.originalPrice}>${product.price}</span>
              <span style={styles.discountedPrice}>
                ${product.discountedPrice}
              </span>
            </p>
            <div style={styles.buttonContainer}>
              <button
                style={styles.editButton}
                onClick={() => handleEdit(product.id)}
              >
                Edit
              </button>
              <button
                style={styles.deleteButton}
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  productList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  productImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  description: {
    color: "#555",
    fontSize: "14px",
    margin: "10px 0",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "#999",
    marginRight: "10px",
  },
  discountedPrice: {
    color: "#e63946",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
  },
  editButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  postButton: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
