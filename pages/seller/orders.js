import Navbar from "@/components/Navbar";

const orders = [
  {
    customerName: "John Doe",
    totalPrice: 120.99,
    productId: "12345",
    productName: "Wireless Headphones",
    customerContact: "555-1234",
    address: "123 Maple St, Springfield",
  },
  {
    customerName: "Jane Smith",
    totalPrice: 75.5,
    productId: "67890",
    productName: "Bluetooth Speaker",
    customerContact: "555-5678",
    address: "456 Oak St, Springfield",
  },
  // Add more orders here
];

const styles = {
  container: {
    padding: '20px',
    fontFamily: "'Roboto', sans-serif",
    maxWidth: '800px',
    margin: '0 auto',
  },
  orderCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    margin: '15px 0',
    backgroundColor: '#f7f7f7',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  orderCardHover: {
    transform: 'scale(1.02)',
  },
  orderInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '25px',
  },
  label: {
    fontWeight: '600',
    color: '#555',
  },
  value: {
    color: '#444',
  },
};

export default function SellerOrdersPage() {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.title}>Orders</h2>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div 
              key={index} 
              style={styles.orderCard} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={styles.orderInfo}>
                <p>
                  <span style={styles.label}>Customer Name:</span>{" "}
                  <span style={styles.value}>{order.customerName}</span>
                </p>
                <p>
                  <span style={styles.label}>Total Price:</span>{" "}
                  <span style={styles.value}>${order.totalPrice.toFixed(2)}</span>
                </p>
                <p>
                  <span style={styles.label}>Product ID:</span>{" "}
                  <span style={styles.value}>{order.productId}</span>
                </p>
                <p>
                  <span style={styles.label}>Product Name:</span>{" "}
                  <span style={styles.value}>{order.productName}</span>
                </p>
                <p>
                  <span style={styles.label}>Customer Contact:</span>{" "}
                  <span style={styles.value}>{order.customerContact}</span>
                </p>
                <p>
                  <span style={styles.label}>Address:</span>{" "}
                  <span style={styles.value}>{order.address}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>No orders available.</p>
        )}
      </div>
    </>
  );
}
