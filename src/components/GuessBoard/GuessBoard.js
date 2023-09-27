import React from 'react';
import { checkGuess } from '../../game-helpers';
function GuessBoard({ guesses, answer }) {

  function generateCells(guess, answer) {
    if (guess === '     ') {
      return guess.split('').map((char, index) => {
        return <span className="cell" key={index}>{char.letter}</span>
      })
    }
    console.log('pewpew ')
    return checkGuess(guess, answer).map((char, index) => {
      return <span className={`cell ${char.status}`} key={index}>{char.letter}</span>
    })
  }

  return <div className="guess-results">
    {guesses.map((guess) => (
      <p key={Math.random()} className="guess">
        {generateCells(guess, answer)}
      </p>
    ))}
  </div>;
}

export default GuessBoard;
