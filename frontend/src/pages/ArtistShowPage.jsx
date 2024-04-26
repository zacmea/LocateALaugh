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

        const endpoint = artist.date ? 'http://localhost:3000/events' : 'http://localhost:3000/artists';
        const postData = {
            name: artist.name,
            date: artist.date || undefined,
            location: artist.location,
            description: artist.description || artist.info || 'No additional information available.'
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
                <p className="text-left w-full">Genre: {artist.genre || 'Not specified'}</p>
                <p className="text-left w-full">Location: {artist.location || 'TBA'}</p>
                <p className="text-left w-full">Date: {artist.date || 'Unknown date'}</p>A
            </div>
            <button onClick={handleAddToFavorites} 
                className={`mt-4 bg-green-500 ${isFavorite ? 'bg-green-900' : 'hover:bg-green-700'} text-white font-bold py-2 px-4 rounded`}>
                {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
}

export default ArtistShowPage;
