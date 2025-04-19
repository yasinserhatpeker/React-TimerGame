import { useImperativeHandle } from "react"
export default function ResultModal({result, targetTime,ref}) {
    
    useImperativeHandle(ref);

    return (
        <dialog className="result-modal" ref={ref}>
         <h2>You {result}</h2>
         <p>Target time was <strong>{targetTime} seconds.</strong></p>
         <p>You stopped the time with <strong>X seconds left.</strong></p>
         <form  method="dialog">
            <button>Close</button>
         </form>
        </dialog>
    )
}