import { forwardRef } from 'react'

const Matches = forwardRef(({matches, totalMatches}, ref)=>{
    return (
        <h3 id="matched" ref={ref}>Matches: {matches} / {totalMatches}</h3>
    )
})

export default Matches