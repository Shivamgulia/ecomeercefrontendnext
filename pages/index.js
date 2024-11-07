import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
import SellerHome from "@/components/Home/SellerHome";
import BuyerHome from "@/components/Home/BuyerHome";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [user, setUser] = useState(null);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status == "authenticated") {
      setUser({ ...session.data.user.user, role: session.data.user.role });
    }
    if (session.status == "unauthenticated") {
      router.push("/login");
    }
  }, [session.status]);

  if (!user) {
    return <div>Not Logged In</div>;
  }

  return (
    <>
      {user.role == "buyer" && (
        <>
          <BuyerHome />
        </>
      )}
      {user.role == "seller" && (
        <>
          <SellerHome user={user} />
        </>
      )}
    </>
  );
}
