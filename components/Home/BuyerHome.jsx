import React, { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Layout from "../Layout/Layout";
import ProductList from "../Products/ProductList";
import { demoProducts } from "@/components/util/demoProducts";
import { useRouter } from "next/router";

function BuyerHome() {
  const session = useSession();
  const router = useRouter();
  const [productList, setProductList] = useState();

  async function fetchProducts(session) {
    const endpoint = "http://127.0.0.1:8000/test/getproducts/";

    console.log(session.data)
  
    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.user?.access}`, // Ensure token is passed
        },
      });
  
      const data = await response.json();

      
      setProductList(data.products);
      
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; // Optional: Re-throw the error for handling elsewhere
    }
  }


  

  useEffect(() => {
    if (session.status == "unauthenticated") {
      router.push("/sellerlogin");
    }
    if(session.status="authenticated" && !!session.data?.user){
      fetchProducts(session);
    }
  }, [session.status, session.data]);

  console.log(productList)
  if(!productList)
    return (<>Loading</>)
  return (
    <Layout>
      <ProductList products={productList} />
    </Layout>
  );
}

export default BuyerHome;
