//Creating a default calendar app utilizing the reference from https://www.geeksforgeeks.org/how-to-create-calendar-in-reactjs/
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css' 

const events = [] //need to fetch data from mongodb for the users.

function Scheduler() {
    const [value, onchange] = useState(new Date())
    const [events, setEvents] = useState(events)

  return (
    <div>
      <Calendar onChange={onchange} value={value} />
    </div>
  );
}

export default Scheduler;