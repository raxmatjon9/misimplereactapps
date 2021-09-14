import React, {useState, useContext} from 'react';
import Club from './Club';
import {ClubContext} from './ClubContext'

const ClubList = () => {
    const [clubs, setClubs] = useContext(ClubContext);
    return(
        <div>
            {clubs.map(
                club => (
                <Club name={club.name} from={club.from} key={club.id}/>
                )
        )}
        </div>
    );
};

export default ClubList;