import React from "react";
import { useParams } from "react-router-dom";

const EventShowPage = () => {
    //js code
    const params = useParams();
    const {
        selectedEvent,
        name,
        date,
        startLocalTime,
        imageURL,
        attractionNames,
        locationName,
        address,
        city,
        state,
        zip,
        description,
        userUpcomingEvents,
        comingSoonNearUser,
        userMightLike,
        lalUsersAttending,
    } = props;

    //HTML return
    return (
        <>
            <nav />
            <h1>{name}</h1>
            <img src={imageURL} alt={name} />
            <hr />
            <h2>`${attractionNames} at ${locationName}`</h2>
            <p>`${address}, ${city}, ${state} ${zip}`</p>
            <p>`${date} at ${startLocalTime} - ${endLocalTime}`</p>
            <p>{description}</p>
            <br />
            <br />
            <h4>`${lalUsersAttending} Locate-a-Laugh users attending`</h4>
        </>
    );
};

export default EventShowPage;
