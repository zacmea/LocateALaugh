import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function CreateArtist() {
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate(); // Used to navigate on successful creation
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        addArtist({
            name,
            genre,
            description
        });
    };

    const addArtist = (artistData) => {
        fetch(`${VITE_BASE_URL}/artists`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(artistData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Artist created:', data);
            navigate('/artists'); // Redirect to artist list
        })
        .catch(error => {
            console.error('Failed to create artist:', error);
            alert('Failed to create artist. Please try again.');
        });
    };



    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl text-white mb-4">Create a New Artist</h1>
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-4xl p-4 bg-gray-800 rounded-lg shadow">
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                    className="text-white p-2 rounded bg-gray-700 w-full"
                />
                <input
                    type="text"
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    placeholder="Genre"
                    className="text-white p-2 rounded bg-gray-700 w-full"
                />
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Description"
                    className="text-white p-2 rounded bg-gray-700 w-full"
                />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                    Create Artist
                </button>
            </form>
        </div>
    );
}

export default CreateArtist