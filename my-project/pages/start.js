import Header from '../components/Header';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Start() {
  const [messages, setMessages] = useState([{ sender: 'Betsy', text: "Hi, I'm Betsy! What can I help you with?" }]);
  const [unlocked, setUnlocked] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setMessages([...messages, { sender: 'User', text: data.query }, { sender: 'Betsy', text: `Thanks! For ${data.query}, you'll get custom rates, exclusive offers, and a dashboard.` }]);
    setUnlocked(true);
  };

  return (
    <div>
      <Header />
      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1>Better Mortgage</h1>
          <div style={{ marginBottom: '2rem' }}>
            <p>$100B home loans funded entirely online</p>
            <p>400K Customers who chose a Better Mortgage</p>
          </div>
          {!unlocked ? (
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto' }}>
              <select {...register('query')} style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}>
                <option value="">Select...</option>
                <option value="Buying a home">Buying a home</option>
                <option value="Refinancing my mortgage">Refinancing my mortgage</option>
                <option value="Get cash from my home">Get cash from my home</option>
              </select>
              <button type="submit" style={{ backgroundColor: '#007BFF', color: '#fff', padding: '1rem', width: '100%', border: 'none' }}>Send</button>
              <p>After a few questions, you'll unlock: Custom mortgage rates, Exclusive offers, A personalized dashboard</p>
            </form>
          ) : (
            <div>
              <h2>Unlocked!</h2>
              <p>Custom rates, offers, and dashboard available.</p>
            </div>
          )}
          {/* Chat Display */}
          <div style={{ marginTop: '2rem', border: '1px solid #ddd', height: '300px', overflowY: 'scroll', padding: '1rem' }}>
            {messages.map((msg, i) => (
              <p key={i} style={{ textAlign: msg.sender === 'Betsy' ? 'left' : 'right', marginBottom: '0.5rem' }}>{msg.sender}: {msg.text}</p>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}