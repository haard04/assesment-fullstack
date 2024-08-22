const express = require('express');
const { createPlaylist, getUserPlaylists } = require('../controllers/playlistController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createPlaylist).get(protect, getUserPlaylists);

module.exports = router;
