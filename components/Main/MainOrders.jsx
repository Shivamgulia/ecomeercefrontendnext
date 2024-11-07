import React, { Fragment } from "react";
import OrderList from "../Orders/OrderList";
import { demoOrders } from "../util/demoProducts";

function MainOrders() {
  return (
    <Fragment>
      <OrderList orders={demoOrders} />
    </Fragment>
  );
}

export default MainOrders;
