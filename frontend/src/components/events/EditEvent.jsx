import React, {useState} from 'react';
import EventIndex from '../../pages/EventIndexPage';

//Bringing in state data:
const EditEvent = ({ event, onUpdate, onCancel }) => {
    const [title, setTitle] = useState(event.title);
    const [url, setUrl] = useState(event.url);
    // const [date, setDate] = useState(event.date);
    const [dateStartLocalTime, setdateStartLocalTime] = useState(event.startLocalTime);
    const [description, setDescription] = useState(event.description);
    const [address, setAddress] = useState(event.address);
    const [city, setCity] = useState(event.city);
    const [addressState, setAddressState] = useState(event.state);
    const [zip, setZip] = useState(event.zip);
    const [attractionNames, setAttractionNames] = useState(event.attractionNames);
    const [imageURL, setImageURL] = useState(event.imageURL);
    const [placeName, setPlaceName] = useState(event.placeName);
    const [eventID, setEventID] = useState(event.id);  // Tracks which event is being edited

    
    // const [editEventID, setEditEventID] = useState(null); // Tracks which event is being edited
    
    //handling which field is being edited:
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'url') {
            setUrl(value);
        } else if (name === 'date') {
            setDate(value);
        } else if (name === 'dateStartLocalTime') {
            setdateStartLocalTime(value);
        } else if (name === 'description') {
            setDescription(value);
        } else if (name === 'address') {
            setAddress(value);
        } else if (name === 'city') {
            setCity(value);
        } else if (name === 'addressState') {
            setAddressState(value);
        } else if (name === 'zip') {    
            setZip(value);
        } else if (name === 'attractionNames') {
            setAttractionNames(value);
        } else if (name === 'imageURL') {
            setImageURL(value);
        } else if (name === 'placeName') {
            setPlaceName(value);
        } 
    };

    //updating the event:
    const handleUpdate = () => {
        const updatedEvent = { title, url, dateStartLocalTime, description, address, city, addressState, zip, attractionNames, imageURL, placeName };
        fetch(`http://localhost:3000/events/${event._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEvent),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to update event.');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Event updated:', data);
            onUpdate(data);
            onCancel(); // Close the edit form
        })
        .catch((error) => {
            console.error('Error updating event:', error);
            alert('Failed to update event.');
        });
    };

    //html returning the form to edit the event:
    return (
        <div className="flex flex-col items-center w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow">
            <label>Title</label>
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Name"
            />
            <label>URL</label>
            <input
                type="url"
                name="url"
                value={url}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event URL"
            />
            <label>Date & Time</label>
            <input
                type="datetime-local"
                name="dateStartLocalTime"
                value={dateStartLocalTime}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Date"
            />
            <label>Description</label>
            <textarea
                name="description"
                value={description}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Description"
            />
            <label>Venue Name</label>
            <input
                type="text"
                name="placeName"
                value={placeName}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Name of Venue"  
            />
            <label>Address</label>
            <input
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Address"
            />
            <label>City</label>
            <input
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event City"
            />
            <label>State</label>
            <input
                type="text"
                name="addressState"
                value={addressState}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event State"
            />
            <label>Zip</label>
            <input
                type="text"
                name="zip"
                value={zip}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Zip"
            />
            <label>Artists</label>
            <input
                type="text"
                name="attractionNames"
                value={attractionNames}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Artists' Names"
            />
            <label>Image URL</label>
            <input
                type="text"
                name="imageURL"
                value={imageURL}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Image URL"
            />
            
                        
            <div className="flex space-x-2 w-full">
                <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                    Save Changes
                </button>
                <button onClick={onCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditEvent;
