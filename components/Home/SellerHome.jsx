import React from "react";
import Layout from "../Layout/Layout";
import { signOut } from "next-auth/react";

function SellerHome(props) {
  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          height: "93vh",
          display: "grid",
          placeItems: "center",
          fontSize: "100px",
        }}
      >
        Hello {props.user.name}
      </h1>
    </Layout>
  );
}

export default SellerHome;
