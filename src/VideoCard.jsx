import { useState } from "react";
import "./Home.css"
let VideoCard=()=>{

    let [boxOpen,setBoxOpen]=useState(false);
    let [palying,setPlaying]=useState(true);
return(
    
    <div className="video-card">
      <video onClick={
          (e)=>{
              if(palying){
                  setPlaying(false);
                  e.currentTarget.pause();
              }
              else{ 
                  setPlaying(true)
                  e.currentTarget.play();
              }
          }
      }src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4"></video>
      <span className="material-icons-outlined like">favorite_border</span>
      <span className="material-icons-outlined comment" onClick={
          ()=>{
              if(boxOpen) setBoxOpen(false);
              else setBoxOpen(true);
          }
         }>chat_bubble</span>
        <p className="username"><b>@UserName</b></p>
        <p className="song">
        <span class="material-icons-outlined">music_note</span>
        <marquee>Some Song</marquee>
        </p>

    {
    boxOpen?(<div className="coment-box">

    <button className="cmnt-close-btn" onClick={()=>{
        setBoxOpen(false);
         }}>close</button>

        <div csutural NowU IlassName="all-comment"></div>

        <div className="comment-form">
        <input type="text" />
        <button>post</button>
        </div>

    </div>):("")
    }
        
    </div>
);} 


export default VideoCard;