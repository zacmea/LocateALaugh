import React from 'react';
import EventIndex from '../../pages/EventIndexPage';

//Bringing in state data:
const EditEvent = ({ event, onUpdate, onCancel }) => {
    const [name, setName] = useState(event.name);
    const [url, setUrl] = useState(event.url);
    // const [date, setDate] = useState(event.date);
    const [dateStartLocalTime, setdateStartLocalTime] = useState(event.startLocalTime);
    const [description, setDescription] = useState(event.description);
    const [address, setAddress] = useState(event.address);
    const [city, setCity] = useState(event.city);
    const [state, setState] = useState(event.state);
    const [zip, setZip] = useState(event.zip);
    const [attractionNames, setAttractionNames] = useState(event.attractionNames);
    const [imageURL, setImageURL] = useState(event.imageURL);
    const [placeName, setPlaceName] = useState(event.placeName);
    const [events, setEvents] = useState([]);
    const [tmID, setTmID] = useState(event.tmID);
    const [genreClassifications, setGenreClassifications] = useState
    ("Comedy");
    
    // const [editEventID, setEditEventID] = useState(null); // Tracks which event is being edited
    
    //handling which field is being edited:
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'url') {
            setUrl(value);
        } else if (name === 'date') {
            setDate(value);
        } else if (name === 'startLocalTime') {
            setStartLocalTime(value);
        } else if (name === 'description') {
            setDescription(value);
        } else if (name === 'address') {
            setAddress(value);
        } else if (name === 'city') {
            setCity(value);
        } else if (name === 'state') {
            setState(value);
        } else if (name === 'zip') {    
            setZip(value);
        } else if (name === 'attractionNames') {
            setAttractionNames(value);
        } else if (name === 'imageURL') {
            setImageURL(value);
        } else if (name === 'placeName') {
            setPlaceName(value);
        } else if (name === 'tmID') {
            setTmID(value);
        } else if (name === 'genreClassifications') {
            setGenreClassifications(value);
        }
    };

    //updating the event:
    const handleUpdate = () => {
        const updatedEvent = { name, url, dateStartLocalTime, description, address, city, state, zip, attractionNames, imageURL, placeName, tmID, genreClassifications };
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
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Name"
            />
            <input
                type="text"
                name="url"
                value={url}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event URL"
            />
            <input
                type="text"
                name="date"
                value={date}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Date"
            />

            <input  
                type="text"
                name="startLocalTime"
                value={startLocalTime}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Start Local Time"
            />
            <textarea
                name="description"
                value={description}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Description"
            />
            <input
                type="text"
                name="address"
                value={address}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Address"
            />
            <input
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event City"
            />
            <input
                type="text"
                name="state"
                value={state}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event State"
            />
            <input
                type="text"
                name="zip"
                value={zip}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Zip"
            />
            <input
                type="text"
                name="attractionNames"
                value={attractionNames}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Artists' Names"
            />
            <input
                type="text"
                name="imageURL"
                value={imageURL}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Event Image URL"
            />
            <input
                type="text"
                name="placeName"
                value={placeName}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Name of Venue"  
            />
            <input
                type="hidden"
                name="tmID"
                value={tmID}
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Unique ID"
            />
            <input
                type="hidden"
                name="genreClassifications"
                value="Comedy"
                onChange={handleChange}
                className="text-white p-2 rounded bg-gray-700 w-full mb-2"
                placeholder="Genre Classification"
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
