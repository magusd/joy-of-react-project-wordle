import React from 'react';

function Reset({ resetGame }) {
  return <div>
    <div className='reset'>
      <button onClick={resetGame}>Reset</button>
    </div>
  </div>;
}

export default Reset;
