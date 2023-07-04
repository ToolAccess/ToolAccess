import { SyntheticEvent } from 'react';
import './Datepicker.css';

interface DatePickerProps {
  date: string;
  handleDateChange: (event : SyntheticEvent, name : string) => void;
  name:  string,
  minDate?: string,
  maxDate?: string,
} 

const Datepicker  = ({ date, handleDateChange, name, minDate, maxDate } : DatePickerProps) => {

  return (
    <div>
      <label>{name}</label>
      <input 
        max={maxDate}
        min={minDate}
        type="date" 
        value={date}
        onChange={(event) => handleDateChange(event, name)}
      />
    </div>
  );
};

export default Datepicker;