const express = require('express');
const router = express.Router();
const Artists = require('../models/artist');

// INDEX PAGE - Get all artists
router.get('/', function (req, res) {
    Artists.find({})
    .then((artists) => res.json(artists))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// CREATE ROUTE - Create a new artist
router.post('/', async (req, res) => {
    try {
        const newArtistInfo = {...req.body};
        const newArtist = await Artists.create(newArtistInfo);
        res.json({ newArtist });
    } catch(err) {
        console.log(err);
        res.status(400).json({ error: 'Failed to create artist.' });
    }
});

// UPDATE ROUTE - Update an existing artist
router.put("/:id", async (req, res) => {
    try {
        const updateArtistInfo = {...req.body};
        const updatedArtist = await Artists.findByIdAndUpdate(req.params.id, updateArtistInfo, { new: true });
        if (!updatedArtist) {
            return res.status(404).json({ error: 'Artist not found.' });
        }
        res.json(updatedArtist);
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to update artist.' });
    }
});

// DELETE ROUTE - Delete an artist
router.delete("/:id", async (req, res) => {
    try {
        const deletedArtist = await Artists.findByIdAndDelete(req.params.id);
        if (!deletedArtist) {
            return res.status(404).json({ error: 'Artist not found.' });
        }
        res.json({ message: "Artist deleted successfully" });
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Failed to delete artist.' });
    }
});

module.exports = router