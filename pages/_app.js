import "../styles/globals.css";
import Head from "next/head";
// import { Toaster } from "react-hot-toast";
// import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
      </Head>
      {/* <AnimatePresence> */}
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <div>{/* <Toaster position="top-right" /> */}</div>
      </SessionProvider>
      {/* </AnimatePresence> */}
    </>
  );
}
