import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditEvent from '../components/artists/EditEvent';

function EventIndex() {
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

    useEffect(() => {
        fetch('http://localhost:3000/artists')
            .then(response => response.json())
            .then(setArtists)
            .catch(error => console.error('Error fetching artists:', error));
    }, []);

    const handleUpdate = () => {
        // Refresh the list after an update
        fetch('http://localhost:3000/artists')
            .then(response => response.json())
            .then(setArtists)
            .catch(error => console.error('Error fetching artists after update:', error));
        setEditArtistId(null);  // Reset editing state
    };

    const handleDelete = (artistId) => {
        fetch(`http://localhost:3000/artists/${artistId}`, {
            method: 'DELETE'
        })
        .then(() => {
            setArtists(artists => artists.filter(artist => artist._id !== artistId));
        })
        .catch(error => console.error('Error deleting artist:', error));
    };

    const handleCancel = () => {
        setEditArtistId(null); // Reset or cancel the edit state
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl text-white mb-4">Artists List</h1>
            {artists.map(artist => (
                <div key={artist._id} className="text-white mb-2 w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow">
                    {editArtistId === artist._id ? (
                        <EditArtist 
                            artist={artist} 
                            onUpdate={handleUpdate} 
                            onDelete={() => {
                                handleDelete(artist._id);
                                setEditArtistId(null); // Reset edit state on delete
                            }}
                            onCancel={handleCancel} // Pass onCancel to EditArtist
                        />
                    ) : (
                        <div>
                            <p>Name: {artist.name}</p>
                            <p>Genre: {artist.genre}</p>
                            <p>Description: {artist.description}</p>
                            <button onClick={() => setEditArtistId(artist._id)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Edit</button>
                            <button onClick={() => handleDelete(artist._id)} className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Delete</button>
                        </div>
                    )}
                </div>
            ))}
            <Link to="/artists/create" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Create New Artist
            </Link>
        </div>
    );
}

export default ArtistList