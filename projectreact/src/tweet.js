import React from "react";
import "./App.css"

function Tweet({name, about}){
    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>{about}</p>
            <h3>Number of likes</h3>
        </div>
    );
}

export default Tweet;