import { forwardRef } from 'react'
//forwardRef lets your component expose a DOM node to the parent component with a ref. In this case, I want to expose the matches div to the parent component so that I can add and remove the highlight class when the user gets a match. I also have refs for the first and second card selected so that I can unflip them if they dont match.
const Matches = forwardRef(({matches, totalMatches}, ref)=>{
    return (
        <h3 id="matched" ref={ref}>Matches: {matches} / {totalMatches}</h3>
    )
})

export default Matches