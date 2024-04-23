//Creating a default calendar app utilizing the reference from https://www.npmjs.com/package/react-calendar
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css' 

function schedule() {
    const [value, setValue] = useState(new Date())

const onchange = newValue =>
setValue(newValue)

  return (
    <div>
      <Calendar onChange={setValue} value={value} />
    </div>
  );
}