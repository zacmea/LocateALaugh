import { Link, useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from "react";

const Header = () => {
        const [id, setId] = useState([])
        const [userName, setUserName] = useState([])
const navigate = useNavigate();

        useEffect (() => {
          setId(localStorage.getItem("id"))
          setUserName(localStorage.getItem("name"))
        }, [])
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("id"))

// Reference the doucmentaion in https://www.geeksforgeeks.org/how-to-log-out-user-from-app-using-reactjs/ and debugged with chatGPT
const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    setId(null)
    setUserName(null)
    navigate('/home')
}


    return(
        <header className="bg-gradient-to-r from-blue-500 to-fuchsia-500 ">
             <h1 className="inline-flex sm:justify-center sm:items-stretch text-4xl w-full font-bold bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white">Welcome to Locate a Laugh {userName? userName : "Guest"}!</h1> 
             {/* Added the "? userName: "Guest" after debuuging with chatGpt*/}
            <nav className="inline-flex sm:justify-center sm:items-stretch space-x-10 text-2xl w-full font-bold my-6 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white py-2 px-4">
                <Link to="/home">
                    <div>HOME</div>
                </Link>
                <Link to="/calendar">
                    <div>YOUR EVENTS</div>
                </Link>
                <Link to="/artists">
                    <div>YOUR ARTISTS</div>
                </Link>
{/* // Reference the doucmentaion in https://www.geeksforgeeks.org/how-to-log-out-user-from-app-using-reactjs/ and debugged the toggle with chatGPT */}
                {userName? (
                <>
                <Link to={`/user/${id}`}>
                <div>USER PROFILE</div>
                </Link>
                <button onClick={handleLogout}>LOGOUT</button>
                </>
                ): (
                   <Link to='/login'>
                    <div>LOGIN</div>
                </Link>
        
                )}
            </nav>
        </header>
    )
}

export default Header
