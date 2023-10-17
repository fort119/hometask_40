import { useState } from 'react';
import './showing-results.css';


function GetWinner({uptadeData}){
  let allOptionsToVote = document.querySelectorAll(".emoji-option__counter");
  let arrOfElements = [{id:"x", amountOfVotes:"x"}];

  let [winnerItem, setWinner] = useState("");

  function getAmountOfVotes(){
      for (let element of allOptionsToVote){
        let item = {};
        item.id = element.id;
        item.amountOfVotes = +element.textContent;
        item.class = "-active";
        arrOfElements.push(item);
      }
      
  }  


  function checkMaxAmountOfVotesAndShowId (){
    let max = arrOfElements.reduce((prev, cur) => {
      if (prev.amountOfVotes > cur.amountOfVotes) {
        return prev
      }
      return cur
    })

  function showWinner(){
    setWinner(
      winnerItem = max
    )
  }
  showWinner();

  uptadeData(max);
  }

  return(
    <div className="button-div">
      <p className='winner-text -hidden'>Winner:</p>
      <button type="button" className="show-winner-button" onClick={() => {getAmountOfVotes();checkMaxAmountOfVotesAndShowId();}}>Show the winner!</button>
    </div>
  )
}

export default GetWinner;