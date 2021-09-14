import React,{useState, createContext} from 'react';
import ClubList from './ClubList';

export const ClubContext = createContext();

export const ClubProvider = props => {
    const [clubs, setClubs] = useState([

        {
            name: 'Juventus',
            ufc: '2',
            id: '1',
            from: 'IT'
        },
        {
            name: 'Manchester United',
            ufc: '3',
            id: '2',
            from: 'EN'
        },
        {
            name: 'Chelsea',
            ufc: '2',
            id: '3',
            from: 'EN'
        },
        {
            name: 'Barcelona',
            ufc: '5',
            id: '4',
            from: 'ES'
        }
    ])
    
    return(
        <ClubContext.Provider value={[clubs, setClubs]}>
            {props.children}
        </ClubContext.Provider>
    );
}