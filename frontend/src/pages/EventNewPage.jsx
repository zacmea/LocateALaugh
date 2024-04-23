import { name } from "ejs";
import e from "express";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


//The startLocalTime and endLocalTime fields will need some parsing to match the format of the API for those fields  ex: 2016-07-27T23:30:00Z
const AddEventForm = ({ addEvent }) => {
    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [startLocalTime, setStartLocalTime] = useState("");
    const [endLocalTime, setEndLocalTime] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [attractionNames, setAttractionNames] = useState([]);
    const [imageURL, setImageURL] = useState("");
    const [placeName, setPlaceName] = useState("");
    const [tmID, setTmID] = useState("");
    const [genreClassifications, setGenreClassifications] = useState("comedy");
    // const [eventData, setEventData] = useState({
    //     name: "",
    //     date: "",
    //     startLocalTime: "",
    //     endLocalTime: "",
    //     description: "",
    //     address: "",
    //     city: "",
    //     state: "",
    //     zip: "",
    //     attractionNames: [],
    //     imageURL: "",
    //     placeName: "",
    //     tmID: "",
    //     genreClassifications: [],
    // });

    const addEvent = (eventData) => {
        fetch("http://localhost:3000/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Event created:", data);
                navigate(`/events/${data._id}`);
            })
            .catch((error) => {
                console.error("Failed to create event:", error);
                alert('Failed to create event. Please try again.');
            });
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target; //that is, the key name and value of the input field
    //     setFormData({ ...formData, [name]: value }); //copy the existing form data and update the changed fields
    // };

    const handleSubmit = (e) => {
        // here we first add a new event to the database with the values from the form, and then reset those values
        e.preventDefault();
        // Validate form data here maybe? (e.g., check required fields)
        // If validation passes, call addEvent with formData
        addEvent({
            name,
            date,
            startLocalTime,
            endLocalTime,
            description,
            address,
            city,
            state,
            zip,
            attractionNames,
            imageURL,
            placeName,
            tmID,
            genreClassifications
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={e => setName(e.target.value)} 
            required />

            <label>Date:</label>
            <input 
            type="date" 
            name="date" 
            value={formData.date} 
            onChange={e => setDate(e.target.value)}
            required />

            <label>Start Local Time:</label>
            <input
                type="time"
                name="startLocalTime"
                value={formData.startLocalTime}
                onChange={e => setStartLocalTime(e.target.value)}
                required
            />

            <label>End Local Time:</label>
            <input
                type="time"
                name="endLocalTime"
                value={formData.endLocalTime}
                onChange={e => setEndLocalTime(e.target.value)}
                required
            />

            <label>Description:</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={e => setDescription(e.target.value)}
                required
            />

            <label>Address:</label>
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={e => setAddress(e.target.value)}
                required
            />

            <label>City:</label>
            <input
                type="text"
                name="city"
                value={formData.city}
                onChange={e => setCity(e.target.value)}
                required
            />

            <label>State:</label>
            <input
                type="text"
                name="state"
                value={formData.state}
                onChange={e => setState(e.target.value)}
                required
            />

            <label>Zip:</label>
            <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={e => setZip(e.target.value)}
                required
            />

            <label>Attraction Names:</label>
            <input
                type="text"
                name="attractionNames"
                value={formData.attractionNames}
                onChange={e => setAttractionNames(e.target.value)}
                required
            />

            <label>Image URL:</label>
            <input
                type="text"
                name="imageURL"
                value={formData.imageURL}
                onChange={e => setImageURL(e.target.value)}
                required
            />

            <label>Place Name:</label>
            <input  
                type="text"
                name="placeName"
                value={formData.placeName}
                onChange={e => setPlaceName(e.target.value)}
                required
            />

            <label>TicketMaster ID:</label>
            <input
                type="text"
                name="tmID"
                value={formData.tmID}
                onChange={e => setTmID(e.target.value)}
                required
            />

            <label>Genre Classifications:</label>
            <input
                type="text"
                name="genreClassifications"
                value={formData.genreClassifications}
                onChange={e => setGenreClassifications(e.target.value)}
                required
                hidden
            />





            {/* Add more fields as needed */}

            <button type="submit">Add Event</button>
        </form>
    );
};

export default AddEventForm;
