import React, { useEffect } from "react";
import Link from "next/link";

import styles from "@/styles/components/Layout/Navbar.module.css";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

  useEffect(()=>{
    // console.log(session.data.user.role);
    
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          E-Commerce Logo
        </Link>
      </div>

      {session.data?.user?.role == 'seller' ? <div className={styles.navLinks}>
        <Link href="/profile/" className={styles.link}>
          Seller Profile
        </Link>
        <Link href="/seller/products/" className={styles.link}>
          List Posted Products
        </Link>
        <Link href="/orders/" className={styles.link}>
          View Orders
        </Link>
        <Link href="/seller/addproduct/" className={styles.link}>
          Add New Product
        </Link>
        <div className={styles.link} onClick={signOut}>
          Logout
        </div>
      </div>:
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/profile/" className={styles.link}>
          Customer Profile
        </Link>
        
        <Link href="/orders/" className={styles.link}>
          View Orders
        </Link>
        <Link href="/cart/" className={styles.link}>
          Go to Cart
        </Link>
        <div className={styles.link} onClick={signOut}>
          Logout
        </div>
      </div>
      }
    </div>
  );
};

export default Navbar;
