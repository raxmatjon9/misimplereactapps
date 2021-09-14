import React, {useState, useContext} from 'react';
import {ClubContext} from './ClubContext'

const AddClub = () => {
    const [name, setName] = useState('');
    const [ucl, setUcl] = useState('');
    const [from, setFrom] = useState('');
    const [clubs, setClubs] = useContext(ClubContext);

    const updateName = e => {
        setName(e.target.value);
    }
    const updateUcl = e => {
        setUcl(e.target.value);
    }
    const updateFrom = e => {
        setFrom(e.target.value);
        
    }
    const addClub = e => {
        e.preventDefault();
        setClubs(prevClubs => [...prevClubs, { name: name, ucl: ucl, from: from}]);
    }

    return(
        <form onSubmit={addClub}>
            <label htmlFor="name">Club Name:</label>
            <input type="text" name="name" value={name} onChange={updateName}/><br/>
            <label htmlFor="ucl">UCL wons:</label>
            <input type="text" name="ucl" value={ucl} onChange={updateUcl}/><br/>
            <label htmlFor="from">From:</label>
            <input type="text" name="from" value={from} onChange={updateFrom}/><br/>
            <button>Add</button>
        </form>
    )
}

export default AddClub;