import React from "react";
import styles from "@/styles/components/Forms/ProductForm.module.css";
import { useSession } from "next-auth/react";

function UpdateProductForm(props) {
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
      <h2 className={styles.head}>Update The Price</h2>
      <form onSubmit={publishProduct} className={styles.form}>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Discounted Price</label>
          <input
            type="number"
            name="discountedprice"
            className={styles.input}
            required
            defaultValue={props.product.discountedPrice}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Update Address
        </button>
      </form>
    </div>
  );
}

export default UpdateProductForm;
