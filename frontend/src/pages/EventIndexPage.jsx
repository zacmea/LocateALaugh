import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditEvent from '../components/events/EditEvent';
import EventDetailsCard from '../components/events/EventDetailsCard';
import { useNavigate } from 'react-router-dom';

function EventIndex() {
    // const [name, setName] = useState("");
    // const [url, setUrl] = useState("");
    // const [date, setDate] = useState("");
    // const [startLocalTime, setStartLocalTime] = useState("");
    // const [description, setDescription] = useState("");
    // const [address, setAddress] = useState("");
    // const [city, setCity] = useState("");
    // const [state, setState] = useState("");
    // const [zip, setZip] = useState("");
    // const [attractionNames, setAttractionNames] = useState([]);
    // const [imageURL, setImageURL] = useState("");
    // const [placeName, setPlaceName] = useState("");
    // const [genreClassifications, setGenreClassifications] = useState("comedy");
    const [events, setEvents] = useState([]);
    const [editEventID, setEditEventID] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/events')
            .then(response => response.json())
            .then(setEvents)
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    const handleUpdate = () => {
        // Refresh the list after an update
        fetch('http://localhost:3000/events')
            .then(response => response.json())
            .then(setEvents)
            .catch(error => console.error('Error fetching events after update:', error));
        setEventID(null);  // Reset editing state
    };

    const handleDelete = (eventID) => {
        fetch(`http://localhost:3000/events/${eventID}`, {
            method: 'DELETE'
        })
        .then(() => {
            setEvents(events => events.filter(event => event._id !== eventID));
        })
        .catch(error => console.error('Error deleting artist:', error));
    };

    const handleClick = (event) => {
        setSelectedEvent(event);
        navigate(`/events/${event._id}`);
    };

    const handleCancel = () => {
        setEditEventID(null); // Reset or cancel the edit state
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl text-blue mb-4">Events List</h1>
            {events.map(event => (
                <div key={event._id} className="text-blue mb-2 w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow">
                    {editEventID === event._id ? (
                        <EditEvent 
                            event={event}
                            onUpdate={handleUpdate} 
                            onDelete={() => {
                                handleDelete(event._id);
                                setEditEventID(null); // Reset edit state on delete
                            }}
                            onCancel={handleCancel} // Pass onCancel to EditArtist
                        />
                    ) : (
                        <div>
                            <EventDetailsCard 
                                onclick={() => handleClick(event)}
                                key={event._id}
                                name={event.name}
                                attractionNames={event.attractionNames.map(attraction => attraction.name)}
                                date={event.date}
                                startLocalTime={event.StartLocalTime}
                                dateStartLocalTime={event.dateStartLocalTime}
                                imageURL={event.imageURL}
                                url={event.url}
                                placeName={event.placeName}
                            />
                            <button onClick={() => handleClick(event)} className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">Details</button>
                            <button onClick={() => setEditEventID(event._id)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Edit</button>
                            <button onClick={() => handleDelete(event._id)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>
                        </div>
                    )}
                </div>
            ))}
            <Link to="/events/new" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Create New Event
            </Link>
        </div>
    );
}

export default EventIndex;