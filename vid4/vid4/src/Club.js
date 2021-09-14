import React from 'react';

const Club = ({name, from}) => {

    return(
        <div>
            <h3>{name}</h3>
            <p>{from}</p>
        </div>
    );
};

export default Club;