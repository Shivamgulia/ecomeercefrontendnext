import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const navbarStyles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: '#fff',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '16px',
    },
  };

  return (
    <div style={navbarStyles.container}>
      {/* Company Logo */}
      <div style={navbarStyles.logo}>
        <Link href="/" style={navbarStyles.link}>
          E-Commerce Logo
        </Link>
      </div>

      {/* Navigation Tabs */}
      <div style={navbarStyles.navLinks}>
        <Link href="/seller/profile" style={navbarStyles.link}>
          Seller Profile
        </Link>
        <Link href="/seller/productList" style={navbarStyles.link}>
          List Posted Products
        </Link>
        <Link href="/seller/orders" style={navbarStyles.link}>
          View Orders
        </Link>
        {/* <Link href="/" style={navbarStyles.link}>
          Related Tab 2
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
