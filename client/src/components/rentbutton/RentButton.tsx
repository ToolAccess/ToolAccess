import React from 'react';
import './RentButton.css'

interface RentButtonProps {
  onRent: () => void;
}

const RentButton: React.FC<RentButtonProps> = ({ onRent }) => {
  return (
    <button onClick={onRent} className="rent-button">
      Rent Tool
    </button>
  );
};

export default RentButton;
