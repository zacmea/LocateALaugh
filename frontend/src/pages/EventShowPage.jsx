import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import EventDetailsCard from "../components/events/EventDetailsCard";
import EventIndex from "./EventIndexPage";
import { identity } from "@fullcalendar/core/internal.js";
// import { useLocation } from "react-router-dom";


const EventShowPage = () => {
    //js code
    if (userGenerated === true) {
        const params = useParams();
        const navigate = useNavigate();
        const location = useLocation();
        const { title, url, dateStartLocalTime, description, address, city, addressState, zip, attractionNames, imageURL, placeName, tmID, genreClassifications } = location.state || {}


        // useEffect(() => {
        //     console.log(location)
        // })


        let wordDate = new Date(dateStartLocalTime).toUTCString();
        //HTML return
        return (
            <>
                <h1> Event Details: </h1>
                <h1>{title}</h1>
                <img src={imageURL} alt={name} />
                <hr />
                <h2>{attractionNames} at {placeName}</h2>
                <p>{address}, {city}, {addressState} {zip}</p>
                <p>{wordDate}</p>
                <hr />
                <hr />
                <p>{description}</p>
                <br />
                <br />
                <h3>Buy Tickets: {url}</h3>
            </>
        );
    } else {
        const EventDetails = ({ id }) => {
            const [eventDetails, setEventDetails] = useState(null);
            const [loading, setLoading] = useState(true);
            useEffect(() => {
                const fetchEventDetails = async () => {
                    try {
                        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}?apikey=5k1ZG1p6GmGZm8GQGKQKQ6G`);
                        if (!response.ok) {
                            throw new Error('Failed to fetch event details');
                        }
                        const data = await response.json();
                        setEventDetails(data);
                        setLoading(false);
                    } catch (error) {
                        console.error('Error fetching event details:', error);
                        setLoading(false);
                    }
                }
                fetchEventDetails();
            }, [id]);
            if (loading) {
                return <p>Loading...</p>;
            }
            let wordDate = new Date(eventDetails.dateStartLocalTime).toUTCString();
            return (
                <>
                <h1> Event Details: </h1>
                <h1>{eventDetails.title}</h1>
                <img src={eventDetails.imageURL} alt={eventDetails.title} />
                <hr />
                <h2>{eventDetails.attractionNames} at {eventDetails.placeName}</h2>
                <p>{eventDetails.address}, {eventDetails.city}, {eventDetails.addressState} {eventDetails.zip}</p>
                <p>{wordDate}</p>
                <hr />
                <hr />
                <p>{eventDetails.description}</p>
                <br />
                <br />
                <h3>Buy Tickets: {eventDetails.url}</h3>
            </>
            )
        }
    }
}
                    export default EventShowPage
