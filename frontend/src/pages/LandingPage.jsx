import React from 'react';
import { Link } from 'react-router-dom'; 

function LandingPage() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl mb-2">Locate A Laugh</h1>
      <br />
      <br />
      <p className="text-center text-xl mb-4">
      Introducing Locate a Laugh, the ultimate app for comedy enthusiasts and art aficionados alike! Whether you're searching for your favorite comedians or discovering new artists, Locate a Laugh has you covered. With its intuitive search function, you can easily find the perfect performer to tickle your funny bone or stir your creative spirit. Mark your favorites, stay updated on upcoming events, and register with ease, ensuring you never miss a hilarious stand-up set or captivating art showcase again. Join Locate a Laugh now and let the laughter begin!
      </p>
      <br />
      <br />
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </Link>
        <Link to="/signup" className="bg-purple-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LandingPage

// The blurb is from chatGPT