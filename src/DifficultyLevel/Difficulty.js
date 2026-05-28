export default function Difficulty({func}){
    return(
        <div id="difficultyDiv">
        <button className= "difficultyBtns" onClick={func}value="12">Easy</button>
        <button className= "difficultyBtns" onClick={func}value="24">Medium</button>
        <button className= "difficultyBtns" onClick={func}value="48">Hard</button>
        </div>
    )

}