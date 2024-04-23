import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistList from './pages/ArtistIndexPage';
import CreateArtist from './pages/CreateNewArtistPage';
import Header from './components/Header'
import Footer from './components/Footer'
import Auth from './Auth'

function App() {
    return (
        <Router>
            <div className="flex justify-center bg-black text-white min-h-screen p-4 flex-col items-center">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/artists" element={<ArtistList />} />
                    <Route path="/artists/create" element={<CreateArtist />} />
                    <Route path="/events" element={<EventList />} />
                    <Route path="/events/create" element={<AddNewEvent />} />
                    <Route path="/event/:id" element={<EventDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App