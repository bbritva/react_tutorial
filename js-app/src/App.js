import { useState } from 'react';

import './app.css'
import GameBoard from "./game-board";
import WordSelect from './word-select';

function App() {
  const [secretWord, setSecretWord] = useState('')



  return (
    <div className='app-container'>
      <h1>Welcome to here</h1>
      <p>Do you want to play a game</p>
      
      <>
        <WordSelect
          isShown={!secretWord}
          wordSelected={val => setSecretWord(val)}
        />

        <GameBoard
          secretWord={secretWord}
          maxErrors={6}
          isShown={secretWord}
        />
      </>
    </div>
  );
}

export default App