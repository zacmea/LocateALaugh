const express = require('express');
const router = express.Router();
const Artists = require('../models/atist');

//INDEX PAGE
router.get('/', function (req, res) {
    db.Artist.find({})
    .then((artists) => res.json(artists))
    .catch((err) => res.json({ error: err.message }));
});

//CREATE ROUTE
router.post('/', async (req, res) => {
    try{
        currentUser = req.session.currentUser
        console.log(req.session);
        const newArtistInfo= {...req.body}
        const newArtist = await Artists.create(newArtistInfo)
        res.json({newArtist})
        console.log(newArtist);
        
        } catch(err) {
        console.log(err);
        }
});

//SHOW ROUTE
router.get("/:id", (req, res) => {
    db.Artist.findById(req.params.id)
      .then((artist) => {
        if (!artist) res.status(404).json({ error: "Artist is not found" });
        else res.json(artist);
      })
      .catch((err) => res.json({ error: err.message }));
});

//UPDATE ROUTE
router.put("/:id", async (req, res) => {
    const updateArtistInfo = {...req.body}
    await Artists.findByIdAndUpdate(req.params.id, updateArtistInfo, {new: true})
     .then((artist) => res.json(artist)
     );
});

//DELETE ROUTE
router.delete("/:id", (req, res) => {
    Artists.findByIdAndDelete(req.params.id)
    .then(() => res.send("Artist deleted successfully"))
    .catch(() => res.send('Failed to delete artist'))
});


module.exports = router