import React from 'react';
import { Link } from 'react-router-dom'; 

function LandingPage() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl mb-2">Locate A Laugh</h1>
      <p className="text-center text-xl mb-4">
        Discover the best comedy events near you and around the world. Join now to start laughing!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </Link>
        <Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LandingPage