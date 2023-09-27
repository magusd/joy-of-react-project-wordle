import React from 'react';

function GuessInput({ guessIt, guess, setGuess }) {
  
  function handleSubmit(event) {
    event.preventDefault();
    guessIt(guess);
    console.log(guess);
    setGuess('');
  }
  return <form className="guess-input-wrapper" onSubmit={handleSubmit} >
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input"
      pattern="^[A-Z]{5}$" maxLength="5" value={guess} onChange={event => setGuess(event.target.value.toUpperCase())} type="text" />
  </form>;
}

export default GuessInput;
