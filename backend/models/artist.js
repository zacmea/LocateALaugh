const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
  name: String,
//   genre: String,
  created_by: {type: mongoose.Types.ObjectId, ref:"user"}
})

const Artists = mongoose.model('Artists', artistSchema)
module.exports = Artists;