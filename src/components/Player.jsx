import { useRef, useState } from "react";


export default function Player() {

  const playerName=useRef();

  const [enteredPlayerName,setEnteredPlayerName]=useState(null);
 
  function clickHandler() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unkown entity" }</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
