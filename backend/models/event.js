const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    // startLocalTime: int32,
    // endLocalTime: int32,
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
    // lalUsersAttending: int32, lal = LocateALaugh
    createdBy: [{ type: mongoose.Types.ObjectId, ref: 'user'}],
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;