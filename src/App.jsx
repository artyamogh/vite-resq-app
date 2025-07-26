import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#0b5ed7' }}>🚨 ResQ-AI</h1>
      <p style={{ fontSize: '1.2rem' }}>AI Powered Emergency Support System</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '10px', boxShadow: '0 0 10px #ccc' }}>
          🚑<br /><strong>Ambulance</strong>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '10px', boxShadow: '0 0 10px #ccc' }}>
          🚔<br /><strong>Police</strong>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '10px', boxShadow: '0 0 10px #ccc' }}>
          🔥<br /><strong>Fire</strong>
        </div>
      </div>

      <button style={{ marginTop: '2rem', padding: '0.8rem 2rem', fontSize: '1rem', backgroundColor: '#0b5ed7', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
        Get Started
      </button>

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#555' }}>
        © 2025 ResQ-AI | Emergency AI Assistance
      </footer>
    </div>
  );
}

export default App;