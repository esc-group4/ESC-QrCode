// src/components/AttendanceCapture.js
import React from 'react';
import QrScanner from './QRScanner/QrScanner.js';

const AttendanceCapture = () => {
  const handleScan = async data => {
    if (data) {
      try {
        const response = await fetch('/api/attendance', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ qrData: data })
        });

        if (response.ok) {
          alert('Attendance captured successfully');
        } else {
          alert('Failed to capture attendance');
        }
      } catch (error) {
        console.error('Error capturing attendance:', error);
        alert('Error capturing attendance');
      }
    }
  };

  return (
    <div>
      <h1>Scan QR Code for Attendance</h1>
      <QrScanner onScan={handleScan} />
    </div>
  );
};

export default AttendanceCapture;
