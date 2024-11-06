import React from "react";
import styles from "@/styles/components/Forms/ProductForm.module.css";
import { useSession } from "next-auth/react";

function ProductForm() {
  const session = useSession();

  function publishProduct(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);

    // post req to add product
    console.log(formObj);
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
            name="discountedPrice"
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
