import React from 'react';

import { sample, range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessBoard from '../GuessBoard';
import GameResult from '../GameResult';
import Reset from '../Reset';
import Keyboard from '../Keyboard';

// To make debugging easier, we'll log the solution in the console.
function Game() {
  const [guesses, setGuesses] = React.useState(range(NUM_OF_GUESSES_ALLOWED).map(() => '     '));
  const [guessCount, setGuessCount] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [win, setWin] = React.useState(false);
  const [guess, setGuess] = React.useState('');

  function gameInit() {
    setGuesses(range(NUM_OF_GUESSES_ALLOWED).map(() => '     '));
    setGuessCount(0);
    setGameOver(false);
    setWin(false);
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    console.info({ newAnswer });
  }

  function guessIt(word) {
    if (gameOver) return;
    if (word.length !== 5) return;

    const newGuesses = [...guesses];
    newGuesses[guessCount] = word;
    setGuesses(newGuesses);
    setGuessCount(guessCount + 1);
    if (word === answer) {
      setGameOver(true);
      setWin(true);
    }
    if (guessCount === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameOver(true);
    }
  }

  function keyPress(key) {
    if (key === "enter") {
      guessIt(guess);
      setGuess("");
      return;
    }
    if (key === "backspace") {
      const newWord = guess.slice(0, -1);
      setGuess(newWord);
      return;
    }
    const newWord = guess + key;
    if (newWord.length === 6) return;
    setGuess(newWord);
  }

  if (answer === "") {
    gameInit();
  }
  return <>
    <GuessBoard guesses={guesses} answer={answer} />
    {gameOver ? <Reset resetGame={gameInit} /> : ""}
    <GuessInput guessIt={guessIt} guess={guess} setGuess={setGuess} />
    {gameOver ? <GameResult win={win} /> : ""}
    <Keyboard keyPress={keyPress} guesses={guesses} answer={answer} />

  </>;
}

export default Game;
