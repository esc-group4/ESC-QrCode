import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './QrScanner.css';

const QrScanner = ({ onScan }) => {
  const [error, setError] = useState(null);

  const handleScan = data => {
    if (data) {
      onScan(data);
    }
  };

  const handleError = err => {
    setError(err);
  };

  return (
    <div className="qr-scanner">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default QrScanner;
