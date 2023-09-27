import React from 'react';
import { checkGuess } from '../../game-helpers';

const rows = [
  "QWERTYUIOP",
  "ASDFGHJKL",
  "ZXCVBNM"
];

function Keyboard({ keyPress = () => { }, guesses, answer }) {
  const keyboardColors = {}
  function buildKeyboardColors() {
    guesses.forEach(guess => {
      checkGuess(guess, answer).forEach((char, i) => {
        if (keyboardColors[char.letter] === undefined) {
          keyboardColors[char.letter] = char.status;
          return;
        }
        const currentStatus = keyboardColors[char.letter];
        if (currentStatus === 'correct' || currentStatus === char.status) return;
        if (char.status === 'correct') {
          keyboardColors[char.letter] = char.status;
          return;
        }
      });
    })
  }

  function getClass(key) {
    if (keyboardColors[key] === undefined) return '';
    return keyboardColors[key];
  }
  buildKeyboardColors();
  return <div className='keyboard'>
    {rows.map((row, i) => <div key={i}>
      <div className='keyboard-row'>
        {row.split('').map((letter, j) => (
          <button onClick={() => keyPress(letter)} className={`key ${getClass(letter)}`} key={j}>{letter}</button>)
        )}
      </div>
    </div>)}
    <div className='keyboard-row'>
      <button onClick={() => keyPress("enter")} className='key' >Enter</button>
      <button onClick={() => keyPress("backspace")} className='key' >Del</button>
    </div>
  </div>;
}

export default Keyboard;
