import './app.css'
import GameBoard from "./game-board";

function App() {
  return (
    <div className='app-container'>
      <h1>Welcome to here</h1>
      <p>Do you want to play a game</p>
      <>
        <GameBoard secretWord='React'/>
      </>
    </div>
  );
}

export default App