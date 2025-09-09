import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={{
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 0'
      }}>
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: '#007BFF',
          textDecoration: 'none'
        }}>
          Better.com
        </Link>
        <nav style={{
          display: 'flex',
          gap: '2rem'
        }}>
          <Link href="/" style={{ color: '#343a40', textDecoration: 'none' }}>Home</Link>
          <Link href="/about-us" style={{ color: '#343a40', textDecoration: 'none' }}>About Us</Link>
          <Link href="/mortgage-calculator" style={{ color: '#343a40', textDecoration: 'none' }}>Mortgage Calculator</Link>
          <Link href="/start" style={{ color: '#343a40', textDecoration: 'none' }}>Start</Link>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none', // Hidden on desktop
            background: 'none',
            border: 'none',
            fontSize: '1.5rem'
          }}
          className="mobile-menu"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#fff',
          padding: '1rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <Link href="/" style={{ color: '#343a40', textDecoration: 'none', padding: '0.5rem 0' }}>Home</Link>
          <Link href="/about-us" style={{ color: '#343a40', textDecoration: 'none', padding: '0.5rem 0' }}>About Us</Link>
          <Link href="/mortgage-calculator" style={{ color: '#343a40', textDecoration: 'none', padding: '0.5rem 0' }}>Mortgage Calculator</Link>
          <Link href="/start" style={{ color: '#343a40', textDecoration: 'none', padding: '0.5rem 0' }}>Start</Link>
        </div>
      )}
    </header>
  );
}