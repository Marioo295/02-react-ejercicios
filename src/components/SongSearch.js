import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (data) => {
        setSearch(data);
    };

    return (
        <div>
            <h2>BUSCADOR DE CANCIONES</h2>
            {loading && <Loader></Loader>}
            <SongForm handleSearch={handleSearch}></SongForm>
            <SongDetails search={search} lyric={lyric} bio={bio}></SongDetails>
        </div>
    );
};

export default SongSearch