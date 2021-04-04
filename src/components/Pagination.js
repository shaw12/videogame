import React, { useContext } from 'react';
import { GameContext } from '../GameContext';

const Pagination = ({gamez}) => {
  
    const { setCurrentPage, gamesPerPage } = useContext(GameContext)

    const totalGames = gamez.length;

    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <nav>
      <ul className='pagination'>
        { gamesPerPage !== 100 && pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;