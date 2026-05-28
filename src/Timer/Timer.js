import { forwardRef } from "react";

const Timer = forwardRef(({minutes, seconds}, ref)=>{
       return (
              <h3 ref={ref}id="text">Time Remaining: {minutes}:{seconds} </h3>
             )
})

export default Timer
