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

        // Determine if searching for events or artists based on input
        const searchType = eventQuery.trim() ? "attractions" : "events";
        const url = `https://app.ticketmaster.com/discovery/v2/${searchType}.json?apikey=${apiKey}&classificationName=comedy&size=20&keyword=${encodeURIComponent(eventQuery)}&postalCode=${encodeURIComponent(zipCode)}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data._embedded && data._embedded[searchType]) {
                const formattedResults = data._embedded[searchType].map(item => ({
                    id: item.id,
                    name: item.name,
                    imageUrl: item.images[0]?.url || '/default-image.png',
                    location: item._embedded?.venues[0]?.name || 'TBA',
                    date: item.dates?.start.localDate,
                    url: item.url,
                    isEvent: searchType === "events" // Boolean flag to indicate if it's an event
                }));
                setResults(formattedResults);
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setResults([]);
        }
    };

    const handleResultClick = (item) => {
        // Navigate
        navigate(`/artist/${item.id}`, { state: { artist: item } });
    };

    return (
        <div className="flex flex-col items-center w-full">
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2 p-4">
                <input
                    type="text"
                    value={eventQuery}
                    onChange={(e) => setEventQuery(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none "
                    placeholder="Search by Name or event"
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
                        results.map(item => (
                            <div key={item.id} onClick={() => handleResultClick(item)} className="m-2 p-3 w-full sm:w-96 bg-gray-800 rounded-lg shadow-md cursor-pointer">
                                <h3 className="text-lg font-bold">{item.name}</h3>
                                <img src={item.imageUrl} alt={item.name} className="max-w-xs my-2"/>
                                {item.isEvent && <p>Location: {item.location}</p>} {/* Only show date for events */}
                                {item.isEvent && <p>Date: {item.date}</p>} {/* Only show date for events */}
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No results found. Try another search.</p>
                    )
                ) : (
                    <p className="text-center">Enter an artist's name, ZIP code, or just search all comedy shows.</p>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
