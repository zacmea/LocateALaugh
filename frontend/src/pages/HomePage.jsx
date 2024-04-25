import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/searchbar/SearchBar';

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-4">Locate A Laugh</h1>
            <p className="text-center text-xl mb-4">
                Discover the best comedy events near you and around the world. Join now to start laughing!</p>
            <SearchBar />
            <Link to="/artists" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-purple-700 focus:outline-none">

                My Artists List
            </Link>
            <hr />
            <Link to="/events/list" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded hover:from-blue-600 hover:to-purple-700 focus:outline-none">

                My Events List
            </Link>
        </div>
    );
}

export default HomePage