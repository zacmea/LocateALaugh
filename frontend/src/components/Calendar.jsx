//Creating a default calendar app utilizing the reference from https://www.geeksforgeeks.org/how-to-create-calendar-in-reactjs/
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css' 



function schedule() {
    const [value, onchange] = useState(new Date())

  return (
    <div>
      <Calendar onChange={onchange} value={value} />
    </div>
  );
}