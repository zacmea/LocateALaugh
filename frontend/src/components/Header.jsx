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
        <header className="bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white p-3">
        <div className="container mx-auto items-center justify-between">
            <div className="text-center block md:flex-none">
                <h1 className="block text-lg md:text-xl font-bold justify-center">{`Welcome to Locate a Laugh ${userName ? userName : "Guest"}`}</h1>
            </div>
             {/* Added the "? userName: "Guest" after debuuging with chatGpt*/}
             <nav className="flex-grow md:flex sm:flex md:justify-center md:items-center text-sm md:text-base">
                    <Link to="/home" className="block md:inline-block hover:text-gray-300 px-3 py-2 rounded-lg md:p-2">HOME</Link>
                    <Link to="/calendar" className="block md:inline-block hover:text-gray-300 px-3 py-2 rounded-lg md:p-2">YOUR EVENTS</Link>
                    <Link to="/artists" className="block md:inline-block hover:text-gray-300 px-3 py-2 rounded-lg md:p-2">YOUR ARTISTS</Link>
{/* // Reference the doucmentaion in https://www.geeksforgeeks.org/how-to-log-out-user-from-app-using-reactjs/ and debugged the toggle with chatGPT */}
{userName ? (
                        <>
                            <Link to={`/user/${id}`} className="block md:inline-block hover:text-gray-300 px-3 py-2 rounded-lg md:p-2">USER PROFILE</Link>
                            <button onClick={handleLogout} className="block md:inline-block hover:text-gray-300 px-3 py-2 rounded-lg md:p-2 flex items-center">
                                LOGOUT
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="block md:inline-block hover:text-gray-300 px-3 py-2 rounded-lg md:p-2 flex items-center">
                            <FaUser className="mr-1"/>
                            LOGIN
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header
