import React from 'react';

const Player = ({ song }) => {
    return (
        <div>
            <h3>Now Playing: {song.title} - {song.artist}</h3>
            <audio controls>
                <source src={song.url} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default Player;
