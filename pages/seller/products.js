// pages/seller/products.js
import Layout from "@/components/Layout/Layout";
import ProductList from "@/components/Products/ProductList";
import { demoProducts } from "@/components/util/demoProducts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Products() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status == "unauthenticated") {
      router.push("/sellerlogin");
    }
  }, [session.status]);
  return (
    <Layout>
      <ProductList products={demoProducts} />
    </Layout>
  );
}
