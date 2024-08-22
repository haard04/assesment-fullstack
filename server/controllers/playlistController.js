const Playlist = require('../models/Playlist');

const createPlaylist = async (req, res) => {
  const { name, songs } = req.body;

  const playlist = new Playlist({
    name,
    songs,
    user: req.user._id,
  });

  const createdPlaylist = await playlist.save();
  res.status(201).json(createdPlaylist);
};

const getUserPlaylists = async (req, res) => {
  const playlists = await Playlist.find({ user: req.user._id }).populate('songs');
  res.json(playlists);
};

module.exports = { createPlaylist, getUserPlaylists };
