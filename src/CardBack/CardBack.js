import React from "react";
import backofCard from "../assets/back.png"

export default function CardBack({func, value, id, className}){
  return (
  <div className="cardHolder" onClick={func}>
        <img className={className}  id={id} src= {backofCard} alt="backOfCard" value={value}/>
    </div>
    )
}