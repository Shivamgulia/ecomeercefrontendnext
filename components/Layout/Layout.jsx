import React from "react";
import Navbar from "./Navbar";

import styles from "@/styles/components/Layout/Layout.module.css";

function Layout(props) {
  return (
    <div className={styles.cont}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.main}>{props.children}</div>
    </div>
  );
}

export default Layout;
