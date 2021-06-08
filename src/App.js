import React,{useRef,useEffect,useState} from 'react';
import Player from './Player';

function App() {

const [songs] = useState([
  {
    title : "Titaliya Warga ",
    artist : "Hary Alina",
    audio_src : "Titliaan Warga.mp3",
    img_src : "titaliya.jpg"
  },

  {
    title : "burjkalifa",
    artist : "Badsha",
    audio_src : "BurjKhalifa.mp3",
    img_src : "burjkalifa.jpg"
  },

  {
    title : "Care Ni Karda ",
    artist : "Honey Singh",
    audio_src : "Care Ni Karda.mp3",
    img_src : "care-ni-karda.jpg"
  },

  {
    title : "Naach Meri Rani ",
    artist : "Milka singh",
    audio_src : "Naach Meri Rani.mp3",
    img_src : "nach-meri-rani.jpg"
  }
])

const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(0);

useEffect(() => {
  setNextSongIndex(()=>{
  if(currentSongIndex+1 > songs.length-1){
    return 0;
  }else{
    return currentSongIndex+1;
  }
})
},[currentSongIndex,songs.length])

  return (
    <div className="App">
      <Player
      currentSongIndex = {currentSongIndex}
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex = {nextSongIndex}
      songs = {songs}
      />
    </div>
  );
}

export default App;
