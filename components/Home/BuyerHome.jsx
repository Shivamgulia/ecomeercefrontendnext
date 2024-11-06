import React from "react";
import { signOut } from "next-auth/react";

import Layout from "../Layout/Layout";
import ProductList from "../Products/ProductList";
import { demoProducts } from "@/components/util/demoProducts";

function BuyerHome() {
  return (
    <Layout>
      BuyerHome
      <ProductList products={demoProducts} />
    </Layout>
  );
}

export default BuyerHome;
