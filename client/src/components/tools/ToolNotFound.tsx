import React from 'react';
import { Link } from 'react-router-dom';
import './ToolNotFound.css';

const ToolNotFound: React.FC = () => {
  return (
    <div className="tool-not-found">
      <h1 className="tool-not-found__title">Not Found</h1>
      <p className="tool-not-found__message">Unfortunately, the tool you are looking for is not available.</p>
      <Link to="/" className="tool-not-found__link">Back to homepage</Link>
    </div>
  );
};

export default ToolNotFound;
