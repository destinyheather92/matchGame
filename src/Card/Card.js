
import React from "react";


export default function Card({src, value, id, className}){
    return (
        <div className="cardHolder">
            <img id={id} className={className} src={src} alt="card" value={value} />
        </div>
    )
};