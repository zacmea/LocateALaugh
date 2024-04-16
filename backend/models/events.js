const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    startLocalTime: int32,
    endLocalTime: int32,
    description: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    attractionNames: [String],
    imageURL: String,
    tmID: String,
    genreClassifications: [String],
    lalUsersAttending: int32,
    : [{ type: mongoose.Types.ObjectId, ref: 'events'}],
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;