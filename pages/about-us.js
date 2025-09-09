import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div>
      <Header />
      {/* Hero/Mission */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Mission</h1>
          <h2 style={{ color: '#007BFF', marginBottom: '1rem' }}>The status quo is broken</h2>
          <p>The traditional processes around homeownership are opaque and stressful. Fees aren&apos;t transparent and some are simply outrageous in size. Traditional mortgage processes benefit insiders, not consumers.</p>
          <a href="https://better.com/content/vishal-garg-better-ceo" style={{ color: '#007BFF' }}>Read Vishal’s story</a>
        </div>
      </section>
      {/* How We're Changing Things */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>How we’re changing things</h2>
          <p>The housing market is $33 trillion total, $15 trillion in mortgages. We use technology for efficiency and humans for friendly experience.</p>
        </div>
      </section>
      {/* Backed By */}
      <section style={{ padding: '2rem 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Backed by</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <img src="https://group.softbank/en/philosophy" alt="SoftBank" style={{ height: '50px' }} /> {/* Replace with actual logos */}
            <img src="https://www.ally.com" alt="Ally" style={{ height: '50px' }} />
            {/* Add more */}
          </div>
        </div>
      </section>
      {/* Timeline */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Company Timeline</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><strong>2014:</strong> Vishal Garg founds the company.</li>
            <li><strong>2015:</strong> First mortgage loan funded entirely online.</li>
            {/* Add all from summary */}
            <li><strong>Today:</strong> Join us as a borrower. <a href="/start">Get started</a></li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}