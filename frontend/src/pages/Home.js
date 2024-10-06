// src/Home.js
import React, { useRef } from 'react';
import TournamentPage from '../components/Tournament/tournamentPage';
import useComponentSize from '@rehooks/component-size';

function Home() {
  const ref = useRef(null);
  const { width = 0, height = 0 } = useComponentSize(ref); // Measure size of Home

  // Set the final dimensions for TournamentPage
  const finalWidth = Math.max(width - 50, 500);
  const finalHeight = Math.max(height - 100, 500);

  return (
    <div className="Home" ref={ref}>
      <h1>Tournament Bracket</h1>
      <div
        style={{
          width: '95vw', // 95% of the viewport width
          height: '85vh', // 85% of the viewport height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          margin: 'auto',
          backgroundColor: '#ffffff',
          padding: '20px',
        }}
      >
        {/* Pass dimensions to TournamentPage */}
        <TournamentPage finalWidth={finalWidth} finalHeight={finalHeight} />
      </div>
    </div>
  );
}

export default Home;
