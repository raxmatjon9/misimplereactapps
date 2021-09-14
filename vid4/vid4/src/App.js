import React from 'react';
import './App.css';
import ClubList from './ClubList'
import Nav from './Nav'
import AddClub from './AddClubs'
import {ClubProvider} from './ClubContext';

function App() {

  return (
    <ClubProvider >
      <div className="App">
        <Nav />
        <AddClub />
        <ClubList />
      </div>
    </ClubProvider>
  );
}

export default App;
