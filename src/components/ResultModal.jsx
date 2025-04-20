import { useImperativeHandle,useRef } from "react"
export default function ResultModal({targetTime,ref, onReset,remainingTime}) {
   const dialog=useRef();

   const lost = remainingTime <= 0;
   const formattedTime=(remainingTime/1000).toFixed(2);
   const score=Math.round((1 - remainingTime / (targetTime*1000))* 100);


    useImperativeHandle(ref, ()=> {
      return { 
        open() {
          dialog.current.showModal();
        }
       }
    });

    return (
        <dialog className="result-modal" ref={dialog}>
          {lost && <h2>You lost</h2>}
          {!lost && <h2>Your score is {score}</h2>}
         <p>Target time was <strong>{targetTime} seconds.</strong></p>
         <p>You stopped the time with <strong>{formattedTime} seconds left.</strong></p>
         <form  method="dialog" onSubmit={onReset}>
            <button>Close</button>
         </form>
        </dialog>
    )
}