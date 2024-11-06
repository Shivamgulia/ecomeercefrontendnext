import Navbar from "@/components/Navbar";

const sellerProfile = {
  name: "Alice Johnson",
  address: "789 Pine St, Springfield",
  contact: "555-7890",
  email: "alice.johnson@example.com",
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: "'Roboto', sans-serif",
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: '25px',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontWeight: '600',
    color: '#555',
    marginBottom: '5px',
  },
  value: {
    color: '#444',
    fontSize: '18px',
  },
};

export default function SellerProfilePage() {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h2 style={styles.title}>Seller Profile</h2>
        <div style={styles.profileInfo}>
          <div>
            <p style={styles.label}>Name:</p>
            <p style={styles.value}>{sellerProfile.name}</p>
          </div>
          <div>
            <p style={styles.label}>Address:</p>
            <p style={styles.value}>{sellerProfile.address}</p>
          </div>
          <div>
            <p style={styles.label}>Contact:</p>
            <p style={styles.value}>{sellerProfile.contact}</p>
          </div>
          <div>
            <p style={styles.label}>Email:</p>
            <p style={styles.value}>{sellerProfile.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
