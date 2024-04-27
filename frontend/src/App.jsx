import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistList from './pages/ArtistIndexPage';
import CreateArtist from './pages/CreateNewArtistPage';
import Header from './components/Header'
import Footer from './components/Footer'
import Auth from './Auth'

import EventIndexPage from './pages/EventIndexPage'
import NewEvent from './pages/EventNewPage'
import ArtistShowPage from './pages/ArtistShowPage';
import EventShowPage from './pages/EventShowPage';
import EventsCalendar from './pages/EventsCalendar';
import LandingPage from './pages/LandingPage'
import SearchBar from './components/searchbar/SearchBar';
import EventNewPage from './pages/EventNewPage';
import Profile from './components/Profile'
// import EventNewPage from './pages/EventNewPage';
// import EventShowPage from './pages/EventShowPage';

function App() {
    return (
        <Router>
           <header>
            <Header />
           </header>
            <div className="flex justify-center bg-black text-white min-h-screen p-4 flex-col items-center">
                <Routes>
                <Route path="/" element={<LandingPage />} /> 
                    <Route path="/home" element={<HomePage />} /> 
                    <Route path="/login" element={<Auth />} />
                    <Route path="/signup" element={<Auth />} />
                    <Route path="/artists" element={<ArtistList />} />
                    <Route path="/calendar" element={<EventsCalendar />} />
                     <Route path="/events/new" element={<EventNewPage/>}/> 
                     <Route path="/events/:id" element={<EventShowPage/>}/>
                    <Route path="/user/:id" element={<Profile/>}/>
                    <Route path="/artist/:id" element={<ArtistShowPage />} />
                    <Route path="/artists/create" element={<CreateArtist />} />
                    <Route path="/events/list" element={<EventIndexPage />} />
                    <Route path="/search" element={<SearchBar />} />
        
                </Routes>
            </div>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
}

export default App