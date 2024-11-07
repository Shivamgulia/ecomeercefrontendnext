import React, { Fragment } from "react";
import OrderItem from "./OrderItem";

function OrderList(props) {
  return (
    <div>
      {props.orders.map((order, index) => {
        return (
          <div key={index} style={{ display: "grid", placeItems: "center" }}>
            <OrderItem product={order} />
          </div>
        );
      })}
    </div>
  );
}

export default OrderList;
