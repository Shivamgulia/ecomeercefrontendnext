import React, { Fragment, useEffect, useState } from "react";
import OrderList from "../Orders/OrderList";
import { demoOrders } from "../util/demoProducts";
import { useSession } from "next-auth/react";


function MainOrders() {
  const [orderList, setOrderList] = useState([]);
  const session = useSession();

  async function fetchOrders(session) {
    const endpoint =
      session.data.user.role === "seller"
        ? "http://127.0.0.1:8000/test/fetchordersforseller/"
        : "http://127.0.0.1:8000/test/fetchorders/";


    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.user?.access}`, // Ensure token is passed
        },
      });

      console.log(response)

      const data = await response.json();

      console.log(data);

      setOrderList(data);

    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; // Optional: Re-throw the error for handling elsewhere
    }
  }

  useEffect(() => {
    if (session.status = "authenticated" && !!session.data?.user) {
      fetchOrders(session);
    }
  }, [session.data])

  return (
    <Fragment>
      <OrderList orders={demoOrders} />
    </Fragment>
  );
}

export default MainOrders;
