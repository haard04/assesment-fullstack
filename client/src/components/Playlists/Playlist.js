import React, { useEffect, useState, useContext } from 'react';
import { fetchPlaylists, createPlaylist } from '../../api';
import { AuthContext } from '../../context/AuthContext';

const Playlist = () => {
    const [playlists, setPlaylists] = useState([]);
    const [name, setName] = useState('');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getPlaylists = async () => {
            if (user) {
                const { data } = await fetchPlaylists();
                setPlaylists(data);
            }
        };

        getPlaylists();
    }, [user]);

    const handleCreatePlaylist = async (e) => {
        e.preventDefault();
        try {
            const { data } = await createPlaylist({ name, songs: [] });
            setPlaylists([...playlists, data]);
            setName('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Playlists</h2>
            <form onSubmit={handleCreatePlaylist}>
                <input
                    type="text"
                    placeholder="Playlist Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Create Playlist</button>
            </form>
            <ul>
                {playlists.map((playlist) => (
                    <li key={playlist._id}>{playlist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Playlist;
