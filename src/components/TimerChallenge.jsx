import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title,targetTime}) {
const timer=useRef();

const [timeExpired,setTimeExpired]=useState(false);
const [timerStarted,setTimerStarted]=useState(false);

 function handleTime() {
  timer.current = setTimeout(()=> {
        setTimeExpired(true)
    }, targetTime*1000)

     setTimerStarted(true);
 }
  function handleStop() {
    clearTimeout(timer.current);
  }
   

    return (
        <>
        {timeExpired && <ResultModal targetTime={targetTime} result="lost" />}
        <section className="challenge">
            <h2>{title}</h2>
         
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's': ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleTime}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
              {timerStarted ? "Time is running..." : "Timer inactive"} 
            </p>

        </section>
        </>
    )
}