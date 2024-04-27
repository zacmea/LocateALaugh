import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditArtist from '../components/artists/EditArtist';

function ArtistList() {
    const [artists, setArtists] = useState([]);
    const [editArtistId, setEditArtistId] = useState(null); // Tracks which artist is being edited

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}artists`)
            .then(response => response.json())
            .then(setArtists)
            .catch(error => console.error('Error fetching artists:', error));
    }, []);

    const handleUpdate = () => {
        // Refresh the list after an update
        fetch(`${import.meta.env.VITE_BASE_URL}artists`)
            .then(response => response.json())
            .then(setArtists)
            .catch(error => console.error('Error fetching artists after update:', error));
        setEditArtistId(null);  // Reset editing state
    };

    const handleDelete = (artistId) => {
        fetch(`${import.meta.env.VITE_BASE_URL}artists/${artistId}`, {
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
                            <p>{artist.name}</p>
                            <img src={artist.imageUrl} alt={artist.name} className="max-w-xs my-2"/>
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