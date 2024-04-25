import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [eventQuery, setEventQuery] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [results, setResults] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);
    const navigate = useNavigate();

    const handleSearch = async () => {
        setSearchPerformed(true);
        const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
        // Use the `keyword` and `postalCode` only if provided, otherwise search all comedy artists
        const queryParams = [];
        if (eventQuery) queryParams.push(`keyword=${encodeURIComponent(eventQuery)}`);
        if (zipCode) queryParams.push(`postalCode=${encodeURIComponent(zipCode)}`);
        const url = `https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=${apiKey}&classificationName=comedy&size=20&${queryParams.join('&')}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data._embedded && data._embedded.attractions) {
                setResults(data._embedded.attractions);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error("Error fetching comedy attractions:", error);
            setResults([]);
        }
    };

    const handleResultClick = (artist) => {
        // Assuming we want to navigate to an artist details page
        navigate(`/artist/${artist.id}`, { state: { artist } });
    };

    return (
        <div className="flex flex-col items-center w-full">
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 p-4">
                <input
                    type="text"
                    value={eventQuery}
                    onChange={(e) => setEventQuery(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter an artist name..."
                />
                <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full sm:w-auto p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    placeholder="ZIP code"
                />
                <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-purple-700 focus:outline-none">
                    Search Comedy Artists
                </button>
            </form>
            <div className="mt-4 w-full flex flex-wrap justify-center">
                {searchPerformed ? (
                    results.length > 0 ? (
                        results.map(event => (
                            <div key={event.id} onClick={() => handleResultClick(event)} className="m-2 p-3 w-full sm:w-96 bg-gray-800 rounded-lg shadow-md cursor-pointer">
                                <h3 className="text-lg font-bold">{event.name}</h3>
                                <p>Location: {event._embedded?.venues[0]?.name || 'TBA'}</p>
                                <p>Date: {event.dates?.start.localDate || 'Unknown date'}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No comedy artist found. Try another search.</p>
                    )
                ) : (
                    <p className="text-center">Enter an artist's name, ZIP code, or just search all comedy artist.</p>
                )}
            </div>
        </div>
    );
}

export default SearchBar