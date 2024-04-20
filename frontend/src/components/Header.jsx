import {Link} from "react-router-dom";

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
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/events"> 
                {/* Confirm correct route */}
                    <div>VIEW OUR EVENTS</div>
                </Link>
                <Link to="/artists">
{/* Confirm the correct route */}
                    <div>VIEW OUR ARTISTS</div>
                </Link>
            </nav>
        </header>
    )
}

export default Header
