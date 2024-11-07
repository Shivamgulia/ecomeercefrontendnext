import React from "react";
import styles from "@/styles/components/Forms/ProductForm.module.css";
import { useSession } from "next-auth/react";

function UpdateUserForm(props) {
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
      <h2 className={styles.head}>Update Your Address</h2>
      <form onSubmit={publishProduct} className={styles.form}>
        <div className={styles.inputDiv}>
          <label className={styles.label}>Address</label>
          <input
            type="text"
            name="address"
            className={styles.input}
            required
            defaultValue={props.user.address}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Update Address
        </button>
      </form>
    </div>
  );
}

export default UpdateUserForm;
