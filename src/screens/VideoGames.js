import React from 'react'
import FilterPage from '../components/FilterPage'
import Game from '../components/Game'
import Pagination from '../components/Pagination'

function VideoGames() {
    return (
        <div className="videogame">
            <FilterPage />
            <div className="videogame__game">
                <Game />
            </div>
        </div>
    )
}

export default VideoGames
