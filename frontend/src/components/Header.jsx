import { Link } from "react-router-dom";
import { FaUser } from 'react-icons/fa'

const Header = () => {
    // To be replaced with tailwind css
    const navStyle = { 
        display: "flex",
        justifyContent: "space-around",
        broder: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
    }
    return(
        <header>
            <h1>Locate A Laugh</h1>
            <nav style = {navStyle}>
                <Link to="/home">
                    <div>HOME</div>
                </Link>
                <Link to="/events"> 
                    <div>VIEW YOUR EVENTS</div>
                </Link>
                <Link to="/artists">
                    <div>VIEW OUR ARTISTS</div>
                </Link>
                <Link to="/user">
                    <FaUser id="user-icon"/>
                    <div>USER</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header
