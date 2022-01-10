import React from "react";
import './styled.css'
//icons
import homeIconWhite from '../../assets/home_white_24dp.svg'
import homeIconBlack from '../../assets/home_black_24dp.svg'
import infoIconWhite from '../../assets/info_white_24dp.svg'
import infoIconBlack from '../../assets/info_black_24dp.svg'

import MusicIcon from '../../assets/music_note_white_24dp.svg'



function LeftBar({info,setInfo}){
    const playlistLink = "https://open.spotify.com/playlist/0rXXhdpACJCsvCpCSa513D?si=89e4bb5f0be64c85"
    return( 
        <div className="left">
           
            <div onClick={()=>setInfo(false)} className={info === true ?  "option-left" : "option-left select"}>
                <img src={info === true ? homeIconWhite  : homeIconBlack} alt="home icon"/>
                <h1>Home</h1>
            </div>
            <a className="playlist-link" href={playlistLink}><div className="option-left">
                <img src={MusicIcon} alt="home icon"/>
                <h1>Playlist</h1>
            </div></a> 
            <div onClick={info === true ? ()=>setInfo(false) :()=>setInfo(true) } className={info ? "option-left select" : "option-left "}>
                <img src={info ? infoIconBlack : infoIconWhite } alt="home icon"/>
                <h1>Info</h1>
            </div>  
        </div>
    )
}

export default LeftBar