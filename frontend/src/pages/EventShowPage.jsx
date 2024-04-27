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
    } 
                    export default EventShowPage
