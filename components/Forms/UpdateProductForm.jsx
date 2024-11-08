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

    const newdata = {
      "product_id": props.product.id,
      "discounted_price": formObj.discounted_price
    }

    // console.log('n',newdata);
    
    

    // post req to add product
    const endpoint = "http://127.0.0.1:8000/test/updateproduct/";

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.data?.user?.access}`, // Use token if needed
      },
      body: JSON.stringify(newdata),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update product.");
        }
        return response.json();
      })
      .then((data) => {
        alert("Updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        alert("Error updating product. Please try again.");
      });

    // console.log('f',formObj);
  }
  

  return (
    <div className={styles.cont}>
      <h2 className={styles.head}>Update The Price</h2>
      <form onSubmit={publishProduct} className={styles.form}>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Discounted Price</label>
          <input
            type="number"
            name="discounted_price"
            className={styles.input}
            required
            defaultValue={props.product.discountedPrice}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Update Product Price
        </button>
      </form>
    </div>
  );
}

export default UpdateProductForm;
