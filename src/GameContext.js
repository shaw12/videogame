import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameContext = React.createContext();

const GameContextProvider = ({children}) => {

    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(10);
    const [name, setName] = useState('');
    const [score, setScore] = useState(''); 

    const [isActive, setIsActive] = useState(true)
    const [isVisible, setIsVisible] = useState(false)
    const [selected, setSelected] = useState("Release Date")

    const dropDownStates = {
        isDate: true,
        isScore: false,
        isName: false
    }
    const [values, setValues] = useState(dropDownStates)
  
    useEffect(() => {
      const fetchGames = async () => {
        setLoading(true);
        const res = await axios.get('https://public.connectnow.org.uk/applicant-test/');
        setGames(res.data);
        setLoading(false);
      };
  
      fetchGames();
    }, []);

    return (
        <GameContext.Provider
            value={{games, setGames, loading, setLoading, currentPage, setCurrentPage, gamesPerPage, setGamesPerPage, name, setName, score, setScore, isActive, setIsActive, isVisible, setIsVisible, selected, setSelected, values, setValues}}
        >
            {children}
        </GameContext.Provider>
    )
}

export { GameContextProvider , GameContext}
