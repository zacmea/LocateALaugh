import React from 'react';
import EventDetailsCard from './EventDetailsCard';
import {userRegisteredEvents} from SOMEWHERE;

const Carousel_UserRegisteredEvents = ({upcomingEvents}) => {
    return (
        <div>
            {events && events.map(event => (
                <EventDetailsCard
                    key={event.tmID} // Assuming each event has a unique ID
                    name={event.name}
                    date={event.date}
                    startLocalTime={event.startLocalTime}
                    imageURL={event.imageURL}
                    attractionNames={event.attractionNames}
                    userRegisteredEvents={event.userRegisteredEvents}
                    userMightLike={event.userMightLike}
                />
            ))}
        </div>
    );
};

export default Carousel_UserRegisteredEvents;