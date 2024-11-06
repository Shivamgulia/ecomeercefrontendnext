import React, { Fragment } from "react";
import Head from "next/head";
// import { motion, AnimatePresence } from "framer-motion";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import SignUp from "@/components/auth/SignUp";
// import Loading from "@/components/UI/Loading";
// import PreLoader from "@/components/UI/PreLoader";

function Signup() {
  const router = useRouter();
  const shipName = router.query.shipname;
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
    }
  }, [session.status]);

  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>

      {session.status != "loading" && <SignUp role="seller" />}
    </Fragment>
  );
}

export default Signup;
