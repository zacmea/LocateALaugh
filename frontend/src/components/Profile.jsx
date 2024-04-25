import React from "react";

const Profile = () => {
  const [user, setUser] = useState()
  useEffect (() => {
    fetch(`https://localhost:3000/user/find/${id}`)
    .then (response =>
       response.json())
       .then(data =>{
        setUser(data.data)
       })
       
}, [])
    return (
     <>
      <div>
      <h2>{user.username}</h2>
      <br />
      <br />
      <img src={process.env.PUBLIC_URL+'/bogomil-mihaylov-ekHSHvgr27k-unsplash.jpg'} alt={user.username}/>
      <br />
      <br />
      <h3>Artists followed</h3>
       <h3>{user.artists_followed}</h3>
      <br />
      <br />
      <h3>Registered Events</h3>
      <h3>{user.registered_events}</h3>
      <Link to="/home">
        <h3>HOME</h3>
      </Link>
      </div>
  </>
  )
    }
  export default Profile;
  