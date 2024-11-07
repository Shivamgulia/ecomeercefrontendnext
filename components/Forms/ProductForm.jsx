import React from "react";
import styles from "@/styles/components/Forms/ProductForm.module.css";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";  // For feedback notifications

function ProductForm() {
  const session = useSession();

  async function publishProduct(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);
    
    console.log(session.data.user.user);
    const user = session.data.user.user.id;
    const reqdata = {...formObj, 'seller': user}
    // Endpoint to add product
    const endpoint = "http://127.0.0.1:8000/test/createproduct/";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include auth token if needed for authorized users
          Authorization: `Bearer ${session?.data?.accessToken}`,
        },
        body: JSON.stringify(reqdata),
      });

      if (!response.ok) {
        throw new Error("Failed to publish product.");
      }

      const data = await response.json();
      toast.success("Product added successfully!");
      form.reset(); // Reset the form after successful submission

    } catch (error) {
      toast.error("Error adding product. Please try again.");
      console.error("Error:", error);
    }
  }

  return (
    <div className={styles.cont}>
      <h2 className={styles.head}>Publish New Product</h2>
      <form onSubmit={publishProduct} className={styles.form}>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Name</label>
          <input type="text" name="name" className={styles.input} required />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Description</label>
          <input
            type="textarea"
            name="description"
            className={styles.textarea}
            required
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Price</label>
          <input type="number" name="price" className={styles.input} required />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Discounted Price</label>
          <input
            type="number"
            name="discounted_price"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Image URL</label>
          <input type="url" name="image" className={styles.input} required />
        </div>

        <button type="submit" className={styles.submitButton}>
          Publish Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
