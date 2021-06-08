import React,{useRef,useEffect,useState} from 'react';
import Details from './Details';
import Control from './Control';

function Player(props){
  const audioElement = useRef(null);
  const [isPlaying,setIsPlaying] = useState(false);

  useEffect(()=>{
    if(isPlaying){
      audioElement.current.play();
    }else{
      audioElement.current.pause();
    }
  });
   const skipSong = (forward = true) => {
     if(forward){
       props.setCurrentSongIndex(()=> {
         let temp = props.currentSongIndex;
         temp++;

         if(temp>props.songs.length-1){
           temp = 0;
         }
         return temp;
       });
     }else {
       props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
     }
   }
  return (
    <div className="player">
    <h3>Playing Now</h3>
    <Details
    songDetail = {props.songs[props.currentSongIndex]}
    />
    <Control
      isPlaying = {isPlaying}
      setIsPlaying = {setIsPlaying}
      skipSong = {skipSong}
    />
    <audio
    className="player_music"
    src={process.env.PUBLIC_URL + props.songs[props.currentSongIndex].audio_src}
    controls
    ref={audioElement}>
    </audio>
    <p>Next Up: <span>{props.songs[props.nextSongIndex].title}
    {" "} by {" "}{props.songs[props.nextSongIndex].artist}
    </span></p>
    </div>
  )
}

export default Player;
