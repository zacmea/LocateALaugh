import { Link } from "react-router-dom";
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from "react";

const Header = () => {
        const [id, setId] = useState([])
        const [userName, setUserName] = useState([])

        useEffect (() => {
          setId(localStorage.getItem("id"))
          setUserName(localStorage.getItem("name"))
        }, [])
console.log(localStorage.getItem("name"))
    return(
        <header className="bg-gradient-to-r from-blue-500 to-fuchsia-500 ">
             <h1 className="inline-flex sm:justify-center sm:items-stretch text-4xl w-full font-bold bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white">Welcome to Locate a Laugh {userName}!</h1>
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
                <Link to="/login">
                    {/* <FaUser id="user-icon" alt-text="User"/> */}
                    <div>USER</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header
