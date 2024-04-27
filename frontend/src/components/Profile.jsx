//References:
//Referenced the documentation for sequential fetch calls and promise all in https://stackoverflow.com/questions/73306325/react-nested-fetch-json and debugged issues in the fetch calls to the events and artists schemas && the using params vs localstorage with chatGpt; debugged the handleeditstate and handleusernamechange with chatGPT; Used conditional the same as the header logic researched and debugged the input tag, editstate and handle with chatGpt; debugged some styling of the CSS 
import React from "react";
import { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";

const Profile = () => {

  const [user, setUser] = useState({})
  const [userArtist, setUserArtist] = useState({})
  const [userEvent, setUserEvent] = useState({})
  const [editState, setEditState] = useState(false)

  const {id} = useParams();


const fetchUserProfile = async () => {
  
  try {
  const token = localStorage.getItem('token')
  const userID = localStorage.getItem('id')

console.log(localStorage.getItem('token'))
console.log(localStorage.getItem('id'))

  const fetchUser = await fetch(`${import.meta.env.VITE_BASE_URL}user/${id}`, {
    method:'GET',
    headers: {'Authorization': `Bearer ${token}`}
  });
  const userDetails = await fetchUser.json();
  setUser(userDetails)
    
const [getEvents, getArtists] = await Promise.all([
  fetch(`${import.meta.env.VITE_BASE_URL}events/${userDetails.registered_events}`, {
    method:'GET',
    headers: {'Authorization': `Bearer ${token}`}
  }),
  fetch (`${import.meta.env.VITE_BASE_URL}artists/${userDetails.artists_followed}` , {
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
}, [id])

const handleEditState = () =>{
  setEditState(true); 
}

const handleUsernameChange = (e) => {
  setUser({...user, username: e.target.value}) 
}

const handleUpdate = async () => {
  try {
      await fetch(`${import.meta.env.VITE_BASE_URL}user/${id}`, {
      method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      body: JSON.stringify({username: user.username}),
  })
  setEditState(false)
  }
  catch(error){
      console.error(error);
  };
}
    return (
     <>
       <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {editState?  (
        <div className="flex flex-col items-center">
        <input className="text-black p-1 border rounded"
        type="text"
        value={user?.username || ""}
        onChange={handleUsernameChange} 
        />
        <br />
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpdate}>Update</button>
        </div>
      ): (
        <div className="text-center">
        <h2 className="text-lg font-bold">Username:"{user?.username}"</h2>
        {localStorage.getItem('id') === id && !editState && (
          <button className="mt-2 text-blue-500 hover:text-blue-700" onClick={handleEditState}>Edit</button>
        )}
       </div>
      )
      }
<br />
      <br />
      <img className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full border-4 border-gray-300 my-4" src={'/bogomil-mihaylov-ekHSHvgr27k-unsplash.jpg'} alt={user?.username}/>
      <br />
      <br />
      <h3 className="text-lg font-bold">Artists followed</h3>
       <h3>{userArtist?.name}</h3>
      <br />
      <br />
      <h3 className="text-lg font-bold">Registered Events</h3>
      <h3>{userEvent?.name}</h3>
      <br />
      <br />
      <Link to="/home">
      <button className="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 rounded">HOME</button>
</Link>
      </div>
  </>
  )
    }

  export default Profile;
  