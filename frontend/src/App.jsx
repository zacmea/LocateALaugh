import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtistList from './pages/ArtistIndexPage';
import CreateArtist from './pages/CreateNewArtistPage';
import Header from './components/Header'
import Footer from './components/Footer'
import Auth from './Auth'
import Scheduler from './components/Calendar';
import Profile from './components/Profile'
// import UserDashboard from './pages/UserDashboardPage'

function App() {
    return (
        <Router>
           <header>
            <Header />
           </header>
            <div className="flex justify-center bg-black text-white min-h-screen p-4 flex-col items-center">
                <Routes>
                    <Route path="/" element={<HomePage />} /> 
                    {/* Change the element to the About page (+ Nav bar a link to the log in & add the logout when the user is logged in) */}
                    {/* <Route path="/home" element={<UserDashboard/>} /> */}
                    {/* Zach to look into the userdashboard */}
                    <Route path="/login" element={<Auth />} />
                    {/* Aleena to look into the form submission for login and sign up */}
                    <Route path="/artists" element={<ArtistList />} />
                    {/* The path above has the edit and delete */}
                    <Route path="/user/find/:id" element={<Scheduler/>}/>
                    {/* Aleena to complete incoporating the events to the calendar view */}
                    {/* <Route path="/events/new" element={<EventNewPage/>}/> */}
                    {/* <Route path="/events/search" element={<SearchBar/>}/> */}
                    {/* <Route path="/events/:id" element={<EventShowPage/>}/> */}
                    {/* <Route path="/artists/:id" element={<ArtistShowPage/>}/> */}
                    <Route path="/user/:id" element={<Profile/>}/>
                    {/*    */}
                    {/* The path above will have the edit and delete for the events */}
                    <Route path="/artists/create" element={<CreateArtist />} />
                    {/* <Route path="/artists/search" element={<SearchBar/>}/> */}
        
                </Routes>
            </div>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
}

export default App