import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ArtistShowPage() {
    const { state } = useLocation();
    const { artist } = state;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFavorites = () => {
        if (isFavorite) {
            alert('This artist is already added to your favorites.');
            return;
        }

        fetch('http://localhost:3000/artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: artist.name,
                genre: artist.classifications[0]?.genre.name,
                description: artist.info || 'No additional information available.'
            })
        })
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            console.log('Favorite added as new artist:', data);
            setIsFavorite(true);
        })
        .catch(error => {
            console.error('Failed to create artist:', error);
            alert('Failed to add to favorites. Please try again.');
        });
    };

    return (
        <div className="container mx-auto p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold text-center">{artist.name}</h1>
            <div className="w-full max-w-md flex flex-col items-center">
                <img src={artist.images[0]?.url || '/default-image.png'} alt={artist.name} className="w-full my-4"/>
                <p className="text-left w-full">Genre: {artist.classifications[0]?.genre.name}</p>
            </div>
            <button onClick={handleAddToFavorites} 
                className={`mt-4 bg-green-500 ${isFavorite ? 'bg-green-900' : 'hover:bg-green-700'} text-white font-bold py-2 px-4 rounded`}>
                {isFavorite ? 'Added to Favorites' : 'Add to Favorites'}
            </button>
        </div>
    );
}

export default ArtistShowPage