import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ArtistShowPage() {
    const { state } = useLocation();
    const { artist } = state; // This could be an artist or an event
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFavorites = () => {
        if (isFavorite) {
            alert('This artist/event is already added to your favorites.');
            return;
        }

        // Determine the correct endpoint based on whether a date is included
        const endpoint = artist.date ? `${import.meta.env.VITE_BASE_URL}/events` : `${import.meta.env.VITE_BASE_URL}/artists`;
        const postData = {
            name: artist.name,
            date: artist.date || undefined,
            location: artist.location,
            description: artist.description || artist.info || 'No additional information available.',
            imageUrl: artist.imageUrl, // Include image URL for visual representation
            url: artist.url // Link to Ticketmaster for more details
        };

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            console.log('Item added as new artist/event:', data);
            setIsFavorite(true);
        })
        .catch(error => {
            console.error('Failed to create artist/event:', error);
            alert('Failed to add to favorites. Please try again.');
        });
    };

    return (
        <div className="container mx-auto p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center">{artist.name}</h1>
            <div className="w-full max-w-md flex flex-col items-center">
                <img src={artist.imageUrl || '/default-image.png'} alt={artist.name} className="w-full my-4"/>
                {artist.location && artist.date && <p className="text-left w-full">Location: {artist.location}</p>}
                {artist.date && <p className="text-left w-full">Date: {artist.date}</p>}
                <a href={artist.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">More Details</a>
            </div>
            <button onClick={handleAddToFavorites} 
                className={`mt-4 bg-green-500 ${isFavorite ? 'bg-green-900' : 'hover:bg-green-700'} text-white font-bold py-2 px-4 rounded`}>
                {isFavorite ? 'Saved' : 'Save'}
            </button>
        </div>
    );
}

export default ArtistShowPage