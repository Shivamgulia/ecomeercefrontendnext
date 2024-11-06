import OrdersList from "./OrdersList";

const ordersData = [
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
    },
    orderCard: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#f9f9f9',
    },
    orderInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    label: {
      fontWeight: '600',
    },
  };

export default function SellerOrdersPage() {
  return (
    <div>
      <div style={styles.container}>
        <h2 style={styles.title}>Orders</h2>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <div key={index} style={styles.orderCard}>
              <div style={styles.orderInfo}>
                <p>
                  <span style={styles.label}>Customer Name:</span>{" "}
                  {order.customerName}
                </p>
                <p>
                  <span style={styles.label}>Total Price:</span> $
                  {order.totalPrice}
                </p>
                <p>
                  <span style={styles.label}>Product ID:</span>{" "}
                  {order.productId}
                </p>
                <p>
                  <span style={styles.label}>Product Name:</span>{" "}
                  {order.productName}
                </p>
                <p>
                  <span style={styles.label}>Customer Contact No:</span>{" "}
                  {order.customerContact}
                </p>
                <p>
                  <span style={styles.label}>Address:</span> {order.address}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No orders available.</p>
        )}
      </div>
    </div>
  );
}
