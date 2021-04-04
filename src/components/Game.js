import React, { useContext } from 'react'
import {GameContext} from '../GameContext'
import Card from './Card';
import Oops from './Oops';
import Pagination from './Pagination';

const Game = () => {

    const {games, currentPage, gamesPerPage, name, score, isActive, setIsActive, isVisible, setIsVisible, selected, setSelected, values, setValues} = useContext(GameContext)

    if(values.isDate){
        if(isActive){
            games.sort(function(a,b){
                return  new Date(a.first_release_date) - new Date(b.first_release_date);
            });
        } else{
            games.sort(function(a,b){
                return new Date(b.first_release_date) - new Date(a.first_release_date);
            });
        }
    }

    if(values.isScore){
        if(isActive){
            games.sort(function(a,b){
                if(Math.ceil(a.rating * 0.1) < Math.ceil(b.rating * 0.1)) { return -1; }
                if(Math.ceil(a.rating * 0.1) > Math.ceil(b.rating * 0.1)) { return 1; }
                return 0;
            });
        } else{
            games.sort(function(a,b){
                if(Math.ceil(a.rating * 0.1) > Math.ceil(b.rating * 0.1)) { return -1; }
                if(Math.ceil(a.rating * 0.1) < Math.ceil(b.rating * 0.1)) { return 1; }
                return 0;
            });
        }
    }

    if(values.isName){
        if(isActive){
            games.sort(function(a,b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            });
        } else{
            games.sort(function(a,b){
                if(a.name > b.name) { return -1; }
                if(a.name < b.name) { return 1; }
                return 0;
            });
        }
    }


    
    
    const newGames = games
    .filter((d) => {
        if(name === '') return d

        if(d.name
            .toString()
            .toLowerCase()
            .includes(name.toString().toLowerCase())
        ){
            return d
        } else {
            return null
        }
    })
    .filter((d) => {
        if(score === '') return d

        if(score == Math.ceil(d.rating * 0.1)) return d
    })
    
    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;

    
    const currentGames = newGames.slice(indexOfFirstGame, indexOfLastGame);
    
    return (
        <div>
            { currentGames.length ?
             <div>
                <Card gamez={currentGames} />
                <Pagination gamez={newGames} />
             </div>
            :
            <Oops />
        }
        </div>
    )
}

export default Game
