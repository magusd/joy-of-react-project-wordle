import React from 'react';

function GameResultWin() {
  return <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>3 guesses</strong>.
    </p>
  </div>
}

function GameResultLose() {
  return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
  </div>
}

function GameResult({ win }) {
  return win ? <GameResultWin /> : <GameResultLose />;
}

export default GameResult;
