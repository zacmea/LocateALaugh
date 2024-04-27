// ***Remember that all routes in this file are prefixed with /events

// Require necessary modules
const express = require('express');
const router = express.Router();
const Events = require('../models/event');
const {checkToken} = require('./userController')


// router.use(checkToken)


//Index Route - GET all /events
router.get('/', function (req, res) {
    try {
    Events.find({})
        .then(events => {
            res.json(events);
        });
    }
    catch (err) {
        res.status
    }
})



//New Route - handled in front end


//Delete Route - DELETE /events/:id
router.delete('/:id', function (req, res) {
    Events.findByIdAndDelete(req.params.id)
        .then(() => res.send("Event deleted successfully"))
        .catch(err => res.send("Error deleting event"));
})

//Update Route - PUT /events/:id
router.put('/:id', async (req, res) => {
    const updatedEvent = {...req.body};
    await Events.findByIdAndUpdate(req.params.id, updatedEvent, {new: true})
    .then((event) => {
        res.json(event);
    })
    .catch((err) => {
        res.send("Error updating event");
    })
})

//Create Route - POST /events
router.post('/', async (req, res) => {
    try {
        const newEventInfo = {...req.body};
        const newEvent = await Events.create(newEventInfo);
        res.json({newEvent});
    }
    catch (err) {
        res.status(400).send("Error creating event");
    }
})


//Edit Route - handled in front end

//Show route - 
// router.get('/:id', function (req, res) {
//     Events.findById(req.params.id)
//         .then(selectedEvent => res.json(selectedEvent))
//         .catch(err => res.send("Error finding event"));
//         console.log(selectedEvent);
// })
module.exports = router;