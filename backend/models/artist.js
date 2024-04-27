const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
  name: String,
  description: String,
  webpage: String,
  followers: [String],
  imageUrl: String,
  created_by: {type: mongoose.Types.ObjectId, ref:"user"}
})

const Artists = mongoose.model('Artists', artistSchema)
module.exports = Artists;