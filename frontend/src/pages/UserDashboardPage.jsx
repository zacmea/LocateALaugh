import React from 'react';
import Carousel_UserUpcomingEvents from '../components/events/Carousel_UserUpcomingEvents';
// import Carousel_ComingSoonNearUser from '../components/events/Carousel_ComingSoonNearUser';
import Carousel_UserMightLike from '../components/events/Carousel_UserMightLike';
// import upcomingEvents from SOMEWHERE;
// import comingSoonNearUser from SOMEWHERE;
// import userMightLike from SOMEWHERE;

const UserDashboard = () => {
    return (
        <>
            <nav />
            <h1>Welcome, {user.name}!</h1>
            <h3>link to search for event/artist/location</h3>
            <p>
                <h2>Your Upcoming Events</h2>
                {upcomingEvents.length}
                {/* Calendar link */}
                <Carousel_UserUpcomingEvents upcomingEvents={upcomingEvents} />
            </p>

             <p>
                <h2>Coming Soon Near You</h2>
                {comingSoonNearUser.length}
                {/* Calendar link */}
                <Carousel_ComingSoonNearUser comingSoonNearUser={comingSoonNearUser} />
            </p>

             <p>
                <h2>You Might Like</h2>
                {userMightLike.length}
                {/* Calendar link */}
                <Carousel_UserMightLike userMightLike={userMightLike} />
            </p>
        </>

    );
};

export default UserDashboard;