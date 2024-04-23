import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistList from './pages/ArtistIndexPage';
import CreateArtist from './pages/CreateNewArtistPage';



function App() {
    return (
        <Router>
            <div className="flex justify-center bg-black text-white min-h-screen p-4 flex-col items-center">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/artists" element={<ArtistList />} />
                    <Route path="/artists/create" element={<CreateArtist />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App