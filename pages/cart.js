import Layout from "@/components/Layout/Layout";
import MainCart from "@/components/Main/MainCart";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function cart() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status == "unauthenticated") {
      router.push("/");
    }
  }, [session.status]);
  return (
    <Layout>
      <MainCart />
    </Layout>
  );
}

export default cart;
