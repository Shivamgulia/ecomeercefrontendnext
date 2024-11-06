import React from "react";
import Link from "next/link";

import styles from "@/styles/components/Layout/Navbar.module.css";
import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          E-Commerce Logo
        </Link>
      </div>

      <div className={styles.navLinks}>
        <Link href="/" className={styles.link}>
          Seller Profile
        </Link>
        <Link href="/productst" className={styles.link}>
          List Posted Products
        </Link>
        <Link href="/" className={styles.link}>
          View Orders
        </Link>
        <div className={styles.link} onClick={signOut}>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Navbar;
