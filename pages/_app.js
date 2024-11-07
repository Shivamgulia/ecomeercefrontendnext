import "../styles/globals.css";
import Head from "next/head";
// import { Toaster } from "react-hot-toast";
// import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer position="top-right" autoClose={3000} />
        <div>{/* <Toaster position="top-right" /> */}</div>
      </SessionProvider>
      {/* </AnimatePresence> */}
    </>
  );
}
