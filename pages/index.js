import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section style={{ backgroundColor: '#007BFF', color: '#fff', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Better Mortgage</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Get your dream home with ease. Fast, online mortgages.</p>
          <a href="/start" style={{ backgroundColor: '#28a745', color: '#fff', padding: '1rem 2rem', textDecoration: 'none', borderRadius: '5px' }}>Get Started</a>
        </div>
      </section>
      {/* Main Sections */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Why Choose Better?</h2>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div className="stats-item" style={{ width: '30%', marginBottom: '2rem' }}><h3>Fast Approval</h3><p>One Day Mortgage.</p></div>
            <div className="stats-item" style={{ width: '30%', marginBottom: '2rem' }}><h3>No Fees</h3><p>Transparent pricing.</p></div>
            <div className="stats-item" style={{ width: '30%', marginBottom: '2rem' }}><h3>Online Only</h3><p>$100B funded online.</p></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}