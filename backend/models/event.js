const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    url: String,
    date: Date,
    startLocalTime: Number,
    description: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    attractionNames: [String],
    imageURL: String,
    placeName: String,
    tmID: String,  //TicketMaster ID
    genreClassifications: [String],
    lalUsersAttending: Number,
    createdBy: [{ type: mongoose.Types.ObjectId, ref: 'user'}],
});

const Events = mongoose.model('Event', eventSchema);
module.exports = Events;