import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import EventDetailsCard from "../components/events/EventDetailsCard";
import EventIndex from "./EventIndexPage";

const EventShowPage = (props) => {
    //js code
    const params = useParams();
    const navigate = useNavigate();
    // const state = useLocation();
    // const { event } = state;
    // const [selectedEvent, setSelectedEvent] = useState();
    // const [event, setEvent] = useState({});
    // const [title, setTitle] = useState("charlie");
    // const [url, setUrl] = useState(event.url);
    // // const [date, setDate] = useState(event.date);
    // const [dateStartLocalTime, setdateStartLocalTime] = useState(event.startLocalTime);
    // const [description, setDescription] = useState(event.description);
    // const [address, setAddress] = useState(event.address);
    // const [city, setCity] = useState(event.city);
    // const [state, setState] = useState(event.state);
    // const [zip, setZip] = useState(event.zip);
    // const [attractionNames, setAttractionNames] = useState(event.attractionNames);
    // const [imageURL, setImageURL] = useState(event.imageURL);
    // const [placeName, setPlaceName] = useState(event.placeName);
    // const [events, setEvents] = useState([]);
    // const [tmID, setTmID] = useState(event.tmID);
    // const [genreClassifications, setGenreClassifications] = useState
    // ("Comedy");
    

    // const {
    //     name,
    //     url,
    //     dateStartLocalTime,
    //     description,
    //     address,
    //     city,
    //     // state,
    //     zip,
    //     attractionNames,
    //     imageURL,
    //     placeName,
    //     tmID,
    //     genreClassifications,
    //     _id,
    // } = props;
 
    useEffect(() => {
        console.log(name.params)
    }, []);
    


    //HTML return
    return (
        <>
            <h1> Event Details: </h1>
            <h1>{name}</h1>
            {/* <img src={imageURL} alt={name} /> */}
            <hr />
            {/* <h2>{attractionNames} at {placeName}</h2> */}
            {/* <h3>`Buy Tickets: ${TICKET-LINK-HERE}`</h3> */}
            {/* <p>{address}, {city}, {state} {zip}</p>
            <p>{dateStartLocalTime}</p>
            <p>{description}</p>
            <br />
            <br /> */}
            <h4>Many Locate-a-Laugh users attending</h4>
        </>
    );
};

export default EventShowPage;
