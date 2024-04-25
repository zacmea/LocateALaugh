//Creating react calendar with the events utilizing the reference from https://www.geeksforgeeks.org/how-to-create-calendar-in-reactjs/
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Scheduler() {
  const [value, setValue] = useState(new Date())
    const [events, setEvents] = useState([])


//FOR FETCHING DATA FROM BACKEND
    useEffect (() => {
    fetch('https://localhost:3000/user/find')
    .then (response =>
       response.json())
       .then(data =>{
        setEvents(data.registered_events)
       })
}, [])

const handleEvent = date => {
setValue(date)

const showDate = ({date, view}) => {
  if (view === 'month') {
    const userEvents = events.registered_events
    userEvents.forEach(function(userEvent){
        userEvent.date === new Date (date)
        return (
        <div>
            {userEvent.name}
        </div>
        )
    })

    }

}
  return (
   <>
   <div>
      <Calendar 
      onChange={handleEvent} 
      value={value}
      tileContent={showDate}
      />
        
  </div> 
    </>
  );
}
}

export default Scheduler;
