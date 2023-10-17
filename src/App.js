import { useState } from 'react';
import './normalize.css';
import './App.css';
import OptionsGenerator from './parts/emoji-generator';
import GetWinner from "../src/parts/showing-results-app";


function App() {

  let [winner, setWinner] = useState('');

  function uptadeData(value){
    setWinner(value);
}


let winnerId = winner.id;
let itemClass ="";
if(winner.class){
  itemClass = winner.class;
} else {
  itemClass = "-hidden";
}
  return (
    <div className="App">
      <div className='container'>
        <h1 className='vote-title'>Choose your favourite emoji!</h1>
        <div className='votes-content'>
          <OptionsGenerator idOfEmoji = {1}/>
          <OptionsGenerator idOfEmoji = {2}/>
          <OptionsGenerator idOfEmoji = {3}/>
          <OptionsGenerator idOfEmoji = {4}/>
        </div>
        <GetWinner uptadeData = {uptadeData} />
        <div className={`winner-item ${itemClass}`}>
          <h2 className='winner-heading'>Winner:</h2>
          <div className='winner-image'>
            <img className='winner-image__pic' src={`images/smile${winnerId}.png`} alt='smile'></img>
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
