// import { name } from "ejs";
// import e from "express";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


//The startLocalTime and endLocalTime fields may need some parsing to match the format of the API for those fields  ex: 2016-07-27T23:30:00Z
const NewEvent = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [dateStartLocalTime, setDateStartLocalTime] = useState("");
    // const [startLocalTime, setStartLocalTime] = useState("");
    // const [endLocalTime, setEndLocalTime] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [addressState, setAddressState] = useState("");
    const [zip, setZip] = useState("");
    const [attractionNames, setAttractionNames] = useState([]);
    const [imageURL, setImageURL] = useState("");
    const [placeName, setPlaceName] = useState("");
    // const [tmID, setTmID] = useState("");
    const [genreClassifications, setGenreClassifications] = useState("comedy");
    const [userGenerated, setUserGenerated] = useState(true);
    const [createdBy, setCreatedBy] = useState("");
    const [registered_events, setRegisteredEvents] = useState([]);
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
    useEffect(() => {
    const fetchUserProfile = async () => {
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('id');
            // console.log(id);
            setCreatedBy(userId);
        }
        fetchUserProfile();
    }, []);
    
    const addEvent = (eventData) => {
        fetch(`${import.meta.env.VITE_BASE_URL}events`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
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
                navigate('/events/list');
            })
            .catch((error) => {
                // console.error("Failed to create event:", error);
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
            title,
            url,
            dateStartLocalTime,
            // startLocalTime,
            description,
            address,
            city,
            addressState,
            zip,
            attractionNames,
            imageURL,
            placeName,
            genreClassifications,
            userGenerated,
            createdBy
        });
    };

    return (
        <form className=" grid w-2/3" onSubmit={handleSubmit}>
            <label>Event Title:</label>
            <input className="text-black mb-2" 
            type="text" 
            name="title" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            required />

            <label>Event URL:</label>
            <input className="text-black mb-2"
                type="url"
                name="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                required
            />

            <label>Date & Start Time:</label>
            <input  className="text-black mb-2"
            type="datetime-local" 
            name="date" 
            value={dateStartLocalTime} 
            onChange={e => setDateStartLocalTime(e.target.value)}
            required />

            {/* <label>Start Local Time:</label>
            <input className="text-black"
                type="time"
                name="startLocalTime"
                value={startLocalTime}
                onChange={e => setStartLocalTime(e.target.value)}
                required
            /> */}

            <label>Description:</label>
            <textarea className="text-black mb-2"
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
            />

            <label>Address:</label>
            <input className="text-black mb-2"
                type="text"
                name="address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
            />

            <label>City:</label>
            <input className="text-black mb-2"
                type="text"
                name="city"
                value={city}
                onChange={e => setCity(e.target.value)}
                required
            />

            <label>State:</label>
            <input className="text-black mb-2"
                type="text"
                name="addressState"
                value={addressState}
                onChange={e => setAddressState(e.target.value)}
                required
            />

            <label>Zip:</label>
            <input className="text-black mb-2"
                type="text"
                name="zip"
                value={zip}
                onChange={e => setZip(e.target.value)}
                required
            />

            <label>Artist Names:</label>
            <input className="text-black mb-2"
                type="text"
                name="attractionNames"
                value={[attractionNames]}
                onChange={e => setAttractionNames(e.target.value)}
                required
            />

            <label>Image URL:</label>
            <input className="text-black mb-2"
                type="url"
                name="imageURL"
                value={imageURL}
                onChange={e => setImageURL(e.target.value)}
                required
            />

            <label>Venue Name:</label>
            <input   className="text-black mb-2"
                type="text"
                name="placeName"
                value={placeName}
                onChange={e => setPlaceName(e.target.value)}
                required
            />

            {/* <label>TicketMaster ID:</label> */}
            <input className="text-black"
                type="hidden"
                name="tmID"
                value=""
                onChange={e => setTmID(e.target.value)}
                required
            />

            {/* <label>Genre Classifications:</label> */}
            <input className="text-black"
                type="hidden"
                name="genreClassifications"
                value="Comedy"
                onChange={e => setGenreClassifications(e.target.value)}
                required
                hidden
            />
            <button className="bg-blue-400 mt-2 rounded-xl " type="submit">Add Event</button>
        </form>
    );
};

export default NewEvent;
