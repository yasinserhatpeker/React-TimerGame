import { useState } from "react"

export default function TimerChallenge({title,targetTime}) {
const [timeExpired,setTimeExpired]=useState(false);
const [timerStarted,setTimerStarted]=useState(false);

 function handleTime() {
    setTimeout(()=> {
        setTimeExpired(true)
    }, targetTime*1000)

     setTimerStarted(true);
 }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timeExpired &&  <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's': ''}
            </p>
            <p>
                <button onClick={handleTime}>{timerStarted ? 'Stop' : 'Start'} Challenge</button>
            </p>
            <p className={timerStarted ? "active" : undefined}>
              {timerStarted ? "Time is running..." : "Timer inactive"} 
            </p>

        </section>
    )
}