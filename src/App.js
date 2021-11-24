import React, { useState } from "react";
import Initial from "./components/initial";
import LeftBar from "./components/leftbar";
import './app.css'
import Card from "./components/Card";
import data from './services/data.json'
import About from "./components/about";

function App() {
const [initial,setInitial] = useState(false)
const [info,setInfo] = useState()


useState(()=>{
  window.setTimeout(function(){setInitial(true)},2000)
})
  return (
    <div className="main">
      {initial ? 
      <>
      <LeftBar info={info} setInfo={setInfo}/>
      <div className="main-info">
      <div className="about">
      <h1>This is a website about, lyrics</h1>
      <p>Here you find my personal favorites lyrics,<a href="https://github.com/fireblaze267"> But who i am?</a></p>
        <div className="content">
          { data.map((e,index)=>{
           return <Card key={index} data={e}/> 
          })
          }
          
        </div>
      </div>
    </div>
    </>
      : <Initial/>}
     
      {info === true ? <About/>:null}
   </div>
     
  );
}

export default App;
