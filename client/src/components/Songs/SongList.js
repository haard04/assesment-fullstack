import React, { useEffect, useState } from 'react';
import { fetchSongs, register } from '../../api';
import { Link } from 'react-router-dom';
import Login from '../Auth/Login';
import Playlist from '../Playlists/Playlist';
import Player from '../MusicPlayer/Player';

const SongList = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const getSongs = async () => {
            const { data } = await fetchSongs();
            setSongs(data);
        };

        getSongs();
    }, []);

    return (

        <div>
            <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '10px 20px',
    borderRadius: '8px'
}}>
            <Link to={Login}>Login </Link>
            <Link to={register}>Register </Link>
            <Link to={Playlist}>Playlists </Link>
            <Link to={Player}>Player</Link>
            </div>
            <h2>Songs Library</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song._id}>{song.title} - {song.artist}</li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
