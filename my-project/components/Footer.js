export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#343a40',
      color: '#fff',
      padding: '2rem 0',
      marginTop: '4rem'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p>&copy; 2025 Better Home & Finance Holding Company. All rights reserved.</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="#" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Facebook</a>
          <a href="#" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>Instagram</a>
          <a href="#" style={{ color: '#fff', margin: '0 1rem', textDecoration: 'none' }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}