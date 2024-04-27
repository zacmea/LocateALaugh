// Referenced the documentation for sequential fetch calls and promise all in https://stackoverflow.com/questions/73306325/react-nested-fetch-json and debugged with chatGpt
import React from "react";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Profile = () => {

  const [user, setUser] = useState({})
  const [userArtist, setUserArtist] = useState({})
  const [userEvent, setUserEvent] = useState({})

const fetchUserProfile = async () => {
  
  try {
  const token = localStorage.getItem('token')
  const id = localStorage.getItem('id')
  const fetchUser = await fetch(`https://localhost:3000/user/find/${id}`, {
    method:'GET',
    headers: {'Authorization': `Bearer ${token}`}
  });
  const userDetails = await fetchUser.json();
  setUser(userDetails)
    
const [getEvents, getArtists] = await Promise.all([
  fetch(`https://localhost:3000/events/${userDetails.registered_events}`, {
    method:'GET',
    headers: {'Authorization': `Bearer ${token}`}
  }),
  fetch (`https://localhost:3000/artists/${userDetails.artists_followed}` , {
    method:'GET',
    headers: {'Authorization': `Bearer ${token}`}
  }),
])
const userEvents = await getEvents.json();
const userArtists = await getArtists.json();

setUserArtist(userArtists)
setUserEvent(userEvents)
  }
  catch (error){
    console.log(error)
  }
}
useEffect(() => {
  fetchUserProfile()
}, [])

    return (
     <>
      <div>
      <h2>{user?.username}</h2>
      <br />
      <br />
      <img src={'/bogomil-mihaylov-ekHSHvgr27k-unsplash.jpg'} alt={user?.username}/>
      <br />
      <br />
      <h3>Artists followed</h3>
       <h3>{userArtist?.artists_followed}</h3>
      <br />
      <br />
      <h3>Registered Events</h3>
      <h3>{userEvent?.registered_events}</h3>
      <Link to="/home">
        <h3>HOME</h3>
      </Link>
      </div>
  </>
  )
    }
  export default Profile;
  