import React, { useState } from 'react';

const Calendar = ({ onSelectDay }) => {
  const [selectedDay, setSelectedDay] = useState('');

  const handleDayChange = (event) => {
    const day = event.target.value;
    setSelectedDay(day);
    onSelectDay(day);
  };

  return (
    <input type="date" value={selectedDay} onChange={handleDayChange} />
  );
};

export default Calendar;
