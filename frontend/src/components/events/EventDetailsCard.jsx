import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const EventDetailsCard = (props) => {
    //Code
    const params = useParams();
    const {
        selectedEvent,
        name,
        date,
        startLocalTime,
        imageURL,
        attractionNames,
        userUpcomingEvents,
        comingSoonNearUser,
        userMightLike,
    } = props;

    //HTML return
    //note that the image might need some additional styling to make it display on the left side of the card
    return (
        <Link to={`/event/${params.id}`}>
            <Card style={{ display: "flex", alignItems: "center" }}>
                <Card.Img
                    variant="top"
                    src={imageURL}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <Card.Body>
                    <Card.Title>{attractionNames}</Card.Title>
                    <Card.Subtitle>{name}</Card.Subtitle>
                    <Card.Text>
                        <p>{date}</p>
                        <p>{startLocalTime}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default EventDetailsCard;
