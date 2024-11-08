import React, { useEffect, useState } from "react";
import ProductList from "../Products/ProductList";
import { demoCartProducts } from "../util/demoProducts";
import { useSession } from "next-auth/react";

function MainCart() {
  const session = useSession();
  const [itemList, setItemList] = useState();

  async function fetchCart(session) {
    const endpoint = "http://127.0.0.1:8000/test/getcartitems/";

    console.log("hh", session.data?.user?.access);

    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.user?.access}`, // Ensure token is passed
        },
      });

      const data = await response.json();
      // console.log(data);

      // console.log(data);

      setItemList(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      throw error; // Optional: Re-throw the error for handling elsewhere
    }
  }

  function buyCart() {
    const endpoint = "http://127.0.0.1:8000/test/order/";
    const buyer = session?.data?.user?.user.id;

    // Create the order payload

    itemList.map((item, index) => {
      console.log(item);
      const orderData = {
        product_id: item.product,
        buyer: buyer,
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
            alert("Failed to place order.");
          }
          return response.json();
        })
        .then((data) => {
          alert("Order placed successfully!");
          setItemList([]);
          console.log("Order data:", data); // Optionally, log the data
        })
        .catch((error) => {
          console.error("Error placing order:", error);
          alert("Error placing order. Please try again.");
        });
    });
  }

  useEffect(() => {
    if ((session.status = "authenticated" && !!session.data?.user)) {
      fetchCart(session);
    }
  }, [session.status, session.data]);

  return (
    <div>
      <ProductList products={itemList} />
      <button onClick={buyCart}>Buy Products</button>
    </div>
  );
}

export default MainCart;
