import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITool, fetchTool } from '.';
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

  const sendRentRequest = () => {
    // some magic here
    console.log("rent tool", dates)
  };

  return (
    <div>
      <Navbar category={tool.category} product={tool.name} />
      <div className="tool-page">
        <h1 className="tool-page__name">{tool.name}</h1>
        <img className="tool-page__image" src={tool.imageUrl} alt={tool.name} />
        <p className="tool-page__description">Description: {tool.description}</p>
        <div className="tool-page__price">Price: {tool.standardPrice} SEK</div>
        <div className='tool-page__datepicker-container'>
          <Datepicker name="startDate" date={dates.startDate} handleDateChange={handleDateChange} maxDate={dates.endDate} />
          <Datepicker name="endDate" date={dates.endDate} handleDateChange={handleDateChange} minDate={dates.startDate} />
        </div>
        <button onClick={sendRentRequest}>Send Request</button>
      </div>
    </div>
  );
};

export default ToolPage;
