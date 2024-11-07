import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Layout from "@/components/Layout/Layout";
import MainOrders from "@/components/Main/MainOrders";

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
      <MainOrders />
    </Layout>
  );
}

export default cart;
