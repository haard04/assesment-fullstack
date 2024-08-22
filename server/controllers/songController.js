const Song = require('../models/Song');

const getSongs = async (req, res) => {
  const songs = await Song.find({});
  res.json(songs);
};

module.exports = { getSongs };
