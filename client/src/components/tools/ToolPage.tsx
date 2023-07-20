import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITool, fetchTool, postRentalRequest } from '.';
import { Navbar } from '..';
import './ToolPage.css';
import Datepicker from '../datepicker/Datepicker';

const ToolPage: React.FC = () => {
  const { id } = useParams();
  const [tool, setTool] = useState<ITool>();
  const [dates, setDates] = useState({
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    const getTool = async () => {
      const fetchedTool = await fetchTool(id as string);
      setTool(fetchedTool);
    };

    getTool();
  }, [id]);

  if (!tool) {
    return <div>Loading...</div>;
  }

  const handleDateChange = (event : SyntheticEvent, name: string) => {
    const target = event.target as HTMLInputElement;
    
    setDates(prevState => ({
      ...prevState,
      [name]: target.value
    }));
  };

  const sendRentRequest = async () => {
    // userid 1 for now i will change it later when we add authentication.
    const rentalRequest = await postRentalRequest(new Date(dates.startDate).toISOString(), new Date(dates.endDate).toISOString(), 1, id);
    console.log(rentalRequest, dates)
  };

  return (
    <div>
      <Navbar category={tool.category} product={tool.name} />
      <div className="tool-page">
        <h1 className="tool-page__name">{tool.name}</h1>
        <img className="tool-page__image" src={tool.imageUrl} alt={tool.name} />
        <p className="tool-page__description">Description: {tool.description}</p>
        <div className="tool-page__price">Price: {tool.standardPrice} SEK</div>
        {
          tool.isAvailable ? (<div className='tool-page__datepicker-container'>
          <Datepicker name="startDate" date={dates.startDate} handleDateChange={handleDateChange} maxDate={dates.endDate} />
          <Datepicker name="endDate" date={dates.endDate} handleDateChange={handleDateChange} minDate={dates.startDate} />
          <button onClick={sendRentRequest}>Submit Request</button>
        </div>) : (<p>this tool is currently not available for renting</p>)
        }
      </div>
    </div>
  );
};

export default ToolPage;
