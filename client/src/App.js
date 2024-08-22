import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import SongList from './components/Songs/SongList';
import Playlist from './components/Playlists/Playlist';
import Player from './components/MusicPlayer/Player';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<SongList />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
