import React from "react";
import spotify from "../../assets/icons8-spotify.svg"
import play from "../../assets/play_arrow_white_24dp.svg"
import './styled.css'


function Card({data}){
return(
    <div className="card">
        <h1>{data.lyrics}</h1>
        <div className="artist">
        <img src={spotify} alt="spotify icon"/>
        <label>{data.artist}</label>
        </div>
        <div className="link"><a href={data.link}>
        <img src={play} alt="play icon"/>
        </a></div>
        
    </div>
)
}

export default Card