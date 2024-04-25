import React from 'react';
import EventDetailsCard from './EventDetailsCard';
import EventIndex from '../../pages/EventIndexPage';

const Carousel_UserRegisteredEvents = ({upcomingEvents}) => {
    const [events, setEvents] = useState([]);
    // Some code here to fetch the events and save as an array of objects

    return (
        <div>
            {events && events.map(event => (
                <EventDetailsCard
                    key={event._ID} // Assuming each event has a unique ID
                    name={event.name}
                    attractionNames={event.attractionNames}
                    date={event.date}
                    startLocalTime={event.startLocalTime}
                    imageURL={event.imageURL}
                />
            ))}
        </div>
    );
};

export default Carousel_UserRegisteredEvents;