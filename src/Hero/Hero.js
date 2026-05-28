import React from "react";
import matchLogo from "../assets/logo.png"

export default function Hero(){
    return(
    <div id="hero">
    <h1>Dess's Match Game</h1>
    <img id="matchLogo" src={matchLogo} alt="logo"/>
    <p id="instructions">Test your memory with this classic version of a match game. Select a level (easy, medium, or hard) Then, click on a card to start the game and find it's match. The timer starts at 10 minutes. Good Luck!</p>
    </div>
    )
}