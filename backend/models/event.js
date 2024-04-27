const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: String,
    url: String,
    dateStartLocalTime: Date,
    // startLocalTime: Date,
    description: String,
    address: String,
    city: String,
    addressState: String,
    zip: String,
    attractionNames: [String],
    imageURL: String,
    placeName: String,
    tmID: String,  //TicketMaster ID
    genreClassifications: String,
    userGenerated: Boolean,
    // lalUsersAttending: Number,
    createdBy: [{ type: mongoose.Types.ObjectId, ref: 'user'}],
});

const Events = mongoose.model('Event', eventSchema);
module.exports = Events;