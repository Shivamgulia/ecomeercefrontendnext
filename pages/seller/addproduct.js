import Layout from "@/components/Layout/Layout";
import AddProduct from "@/components/Main/AddProduct";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function addproduct() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status == "unauthenticated") {
      router.push("/sellerlogin");
    }
  }, [session.status]);
  return (
    <Layout>
      <AddProduct />
    </Layout>
  );
}

export default addproduct;
