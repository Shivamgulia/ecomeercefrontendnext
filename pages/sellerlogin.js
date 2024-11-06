import Head from "next/head";

import React, { Fragment } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Login from "@/components/auth/Login";

// import { shipList } from "@/components/List/SelectLists";

function login() {
  const router = useRouter();
  const shipName = router.query.shipname;

  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
    }

    console.log(session.status);
  }, [session.status]);
  console.log(session.status);

  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      {/* {session.status === "loading" ? <Loading /> : <Login />} */}
      <Login role="seller" />
    </Fragment>
  );
}

export default login;
