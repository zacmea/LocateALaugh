import React, { useState } from 'react';

function SearchBar() {
    const [eventQuery, setEventQuery] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [results, setResults] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleSearch = async (eventQuery, zipCode) => {
        if (!eventQuery && !zipCode) return;
        setSearchPerformed(true);

        const apiKey = import.meta.env.VITE_TICKETMASTER_API_KEY;
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&keyword=${encodeURIComponent(eventQuery)}&postalCode=${encodeURIComponent(zipCode)}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data._embedded && data._embedded.events) {
                setResults(data._embedded.events);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setResults([]);
        }
    };

    return (
        <div className="flex flex-col items-center w-full">
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(eventQuery, zipCode); }} className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 p-4">
                <input
                    type="text"
                    value={eventQuery}
                    onChange={(e) => setEventQuery(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter event or artist name..."
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
                    Search
                </button>
            </form>
            <div className="mt-4 w-full flex flex-wrap justify-center">
                {searchPerformed ? (
                    results.length > 0 ? (
                        results.map(event => (
                            <div key={event.id} className="m-2 p-3 w-full sm:w-96 bg-gray-800 rounded-lg shadow-md">
                                <h3 className="text-lg font-bold">{event.name}</h3>
                                <p>Location: {event._embedded?.venues[0]?.name || 'TBA'}</p>
                                <p>Date: {event.dates.start.localDate}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No comedy shows found. Try another search or ZIP code.</p>
                    )
                ) : (
                    <p className="text-center">Enter an artist's name or ZIP code to find comedy shows.</p>
                )}
            </div>
        </div>
    );
}

export default SearchBar