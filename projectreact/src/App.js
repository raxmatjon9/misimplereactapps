import React, {useState} from 'react';
import Tweet from "./tweet"


function App() {
    const [users, setUsers] = useState([
        {name : "Roma", year : "2004"},
        {name : "Ufo", year : "2000"},
        {name : "John", year : "1999"}
    ])

    return(
        <div className="App">
            {users.map(user =>(
                <Tweet name={user.name} about={user.year}/>
            ))}
        </div>
    )
}

export default App;