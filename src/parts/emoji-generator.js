import { useState } from "react";
import './emoji-generator.css';

function OptionsGenerator(idOfEmoji){
  let [vote, setVote] = useState(0);

  function addVotes(){
    setVote(++vote);
  }

  return (
        <div className="emoji-option">
          <div className="emoji-option__img">
            <img className="image" src={`images/smile${idOfEmoji.idOfEmoji}.png`}  alt="alt" onClick={addVotes}></img>
          </div>
          <p className="emoji-option__counter" id={`${idOfEmoji.idOfEmoji}`}>{vote}</p>
        </div>
      )
}
export default OptionsGenerator;