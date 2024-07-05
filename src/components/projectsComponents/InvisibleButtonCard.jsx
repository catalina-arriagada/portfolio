import React from 'react';
import '../../styles/invisible-button-card.css';

function InvisibleButtonCard({ onClick }) {
  return (
    <button className="invisible-button" onClick={onClick}></button>
  );
}

export default InvisibleButtonCard;