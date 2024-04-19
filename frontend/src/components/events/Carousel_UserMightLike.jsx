import React from 'react';
import EventDetailsCard from './EventDetailsCard';
import {userMightLike} from SOMEWHERE;

const Carousel_UserUpcomingEvents = ({userMightLike}) => {
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
                    userUpcomingEvents={event.userUpcomingEvents}
                    comingSoonNearUser={event.comingSoonNearUser}
                    userMightLike={event.userMightLike}
                />
            ))}
        </div>
    );
};

export default Carousel_UserMightLike;