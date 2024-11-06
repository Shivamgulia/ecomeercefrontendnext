import React, { useEffect } from "react";

import Layout from "@/components/Layout/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function index() {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status == "unauthenticated") {
      router.push("/sellerlogin");
    }
  }, [session.status]);
  return <Layout>main</Layout>;
}

export default index;
