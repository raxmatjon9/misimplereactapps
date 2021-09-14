import React, { useContext } from 'react';
import {ClubContext} from './ClubContext';
import style from './App.css';

const Nav = () => {
    const [Clubs, setClubs] = useContext(ClubContext);
    return (
        <nav>
            <h3>ufo607</h3>
    <p>List of Clubs: {Clubs.length}</p>
        </nav>
    );
};

export default Nav;