import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RentForm.css';

const RentForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tool: '',
    rentalPeriod: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/');
  };

  return (
    <div>
      <h1 className='form-title'>Rent a Tool</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Tool:
          <input type="text" name="tool" value={formData.tool} onChange={handleChange} />
        </label>
        <label>
          Rental Period:
          <input
            type="text"
            name="rentalPeriod"
            value={formData.rentalPeriod}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default RentForm;
