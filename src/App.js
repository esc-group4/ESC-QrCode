// src/App.js
import React from 'react';
import QrScanner from './component/QRScanner/QrScanner.js';

const App = () => {
  const handleScan = data => {
    console.log('QR Code Data:', data);
    // Handle the QR code data (send it to a server)
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrScanner onScan={handleScan} />
    </div>
  );
};

export default App;
