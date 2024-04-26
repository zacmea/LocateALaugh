import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

const EventDetailsCard = (props) => {
    //Code
    const params = useParams();
    const {
        selectedEvent,
        url,
        name,
        dateStartLocalTime,
        // startLocalTime,
        imageURL,
        attractionNames,
        placeName,
        _id,
    } = props;

    let wordDate = new Date(dateStartLocalTime).toUTCString();
// place-content-center
    //HTML return
    //note that the image might need some additional styling to make it display on the left side of the card
    return (
        // <Link to={`/events/{params.id}`}>
            <Card style={{ display: "flex", maxWidth: "75%", alignItems: "center" }} className="ml-auto mr-auto mb-8 p-5 w-screen h-100 bg-gray-800 rounded-lg shadow-md flex justify-center ">
                <Card.Img className="mr-3 rounded-2xl flex justify-center "
                    variant="top"
                    src={imageURL}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <Card.Body >
                    <Card.Title className="text-lg font-bold  w-full">{attractionNames}</Card.Title>
                    <Card.Subtitle>{name}</Card.Subtitle>
                    <Card.Text className="">{wordDate} </Card.Text>
                        <hr />
                        {/* or */
                        /* <p className="">{localDate}</p> */
                        /* <p className="flex justify-center">{startLocalTime}</p> */}
                        <Card.Text className="italic text-wrap max-w-64">Venue:{placeName}
                    </Card.Text>
                </Card.Body>
            </Card>
        // </Link>
    );
};

export default EventDetailsCard;
