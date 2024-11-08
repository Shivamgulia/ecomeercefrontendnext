import React, { useEffect, useState } from "react";

import verticalstyles from "@/styles/components/Products/ProductItem.module.css";
import horizontalstyles from "@/styles/components/Products/ProductItemListView.module.css";
import { useRouter } from "next/router";
import Modal from "../Modal/Modal";
import UpdateProductForm from "../Forms/UpdateProductForm";
import { useSession } from "next-auth/react";

function ProductItem(props) {
  const [styles, setStyles] = useState(verticalstyles);
  const [isCart, setIsCart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const session = useSession();

  const router = useRouter();


  const handleEdit = (id) => {
    alert(`Edit product with ID: ${id}`);
  };

  const handleDelete = async (pid) => {
    console.log(pid);
    
    if (confirm("Are you sure you want to delete this product?")) {
      const endpoint = `http://127.0.0.1:8000/test/deleteproduct/${pid}/`;
  
      try {
        const response = await fetch(endpoint, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.data?.user?.access}`, // Use token if needed
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to delete.");
        }
  
        const data = await response.json();
        alert("Deleted successfully!");
        window.location.reload(); // Refresh page after deletion
      } catch (error) {
        console.error("Error in deletion:", error);
        alert("Error deleting item. Please try again.");
      }
    }
  };
  

  const handlePost = (id) => {
    if (confirm(`Are you sure you want to delete this product?`)) {
      setProducts(products.filter((product) => product.id !== id));
      alert(`Product with ID: ${id} has been deleted.`);
    }
  };

  function handleBuy(product_id) {

    const endpoint = "http://127.0.0.1:8000/test/order/";
    const buyer = session?.data?.user?.user.id;

    // Create the order payload

    const orderData = {
      "product_id": product_id,
      "buyer": buyer
      // Additional data as required by your backend, like user_id or quantity
    };

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.data?.user?.access}`, // Use token if needed
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to place order.");
        }
        return response.json();
      })
      .then((data) => {
        alert("Order placed successfully!");
        console.log("Order data:", data); // Optionally, log the data
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        alert("Error placing order. Please try again.");
      });
  }

  // const [toggle,setToggle] = useState(true);

  async function handleDeleteCart(id) {
    const endpoint = `http://127.0.0.1:8000/test/deletecartitem/${id}/`;

    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.data?.user?.access}`, // Use token if needed
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete.");
      }

      const data = await response.json();
      alert("Deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error in deletion:", error);
      alert("Error deleting item. Please try again.");
    }
  }


  function handleCart(id) {
    const endpoint = "http://127.0.0.1:8000/test/addtocart/";

    // Create the order payload
    const orderData = {
      products: [
        {
          product_id: id,
          quantity: 1, // Customize quantity as needed
        }
        // Add more items if necessary
      ],
    };

    // console.log(session?.data?.user?.access);


    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.data?.user?.access}`, // Use token if needed
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add to cart.");
        }
        return response.json();
      })
      .then((data) => {
        alert("Added successfully!");
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        alert("Error placing order. Please try again.");
      });
  }

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    if (router.pathname == "/cart") {
      setStyles(horizontalstyles);
      setIsCart(true);
    }
  }, []);
  

  return (
    <>
      <div>
        <Modal isOpen={showModal} onClose={closeModal}>
          <UpdateProductForm product={props.product} />
        </Modal>
      </div>
      <div className={styles.productCard}>
        {router.pathname != "/cart" ? <img
          src={props.product.image}
          alt={props.product.name}
          className={styles.productImage}
        />:
        <img
          src={props.product.product_image}
          alt={props.product.name}
          className={styles.productImage}
        />
        }
        <h2>{router.pathname == "/cart" ? props.product.product_name : props.product.name }</h2>
        {router.pathname != "/cart" && <p className={styles.description}>{props.product.description}</p>}
        <p className={styles.price}>
          <span className={styles.originalPrice}>${router.pathname == "/" ? props.product.price : props.product.product_price}</span>
          <span className={styles.discounted_price}>
            ${router.pathname != "/cart" ? props.product.discounted_price : props.product.product_discounted_price}
          </span>
          {isCart && (
            <span className={styles.quantity}>
              quantity : {props.product.quantity}
            </span>
          )}
          {router.pathname == "/cart" && <button
            className={styles.deleteButton}
            onClick={() => handleDeleteCart(props.product.product)}
          >
            Remove
          </button>}
        </p>
        {router.pathname == "/seller/products" && (
          <div className={styles.buttonContainer}>
            <button
              className={styles.editButton}
              onClick={() => setShowModal(true)}
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
        )}
        {router.pathname == "/" && (
          <div className={styles.buttonContainer}>
            <button
              className={styles.editButton}
              onClick={() => handleCart(props.product.id)}
            >
              Add To Cart
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => handleBuy(props.product.id)}
            >
              Buy
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductItem;
