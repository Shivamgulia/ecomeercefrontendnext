import React, { useState } from "react";
import styles from "@/styles/components/Forms/ProductForm.module.css";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify"; // For feedback notifications

function ProductForm() {
  const session = useSession();
  const [imageBase64, setImageBase64] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    // Check if a file was selected
    if (!file) return;

    // Check if file size is less than 1 MB
    if (file.size > 1024 * 1024) {
      setErrorMessage("File size should be less than 1 MB.");
      return;
    }

    // Convert image file to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
      setErrorMessage(""); // Clear any previous error messages
    };
    reader.readAsDataURL(file);
  };

  async function publishProduct(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData);

    console.log(session.data.user.user);
    const user = session.data.user.user.id;
    const reqdata = { ...formObj, image: imageBase64, seller: user };
    // Endpoint to add product
    const endpoint = "http://127.0.0.1:8000/test/createproduct/";

    if (imageBase64 == "" || !imageBase64) {
      toast.error("Upload Image First!");
    }

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
          {/* <label>Image URL</label> */}
          {/* <input type="url" name="image" className={styles.input} required /> */}
          <label htmlFor="imageUpload" className={styles.label}>
            Upload Image:
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
            className={styles.input}
          />
        </div>

        {imageBase64 && (
          <div>
            <img src={imageBase64} alt="uploadedphoto" width={440} />
          </div>
        )}
        <button type="submit" className={styles.submitButton}>
          Publish Product
        </button>
      </form>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default ProductForm;
