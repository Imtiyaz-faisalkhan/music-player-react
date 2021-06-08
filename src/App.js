import React,{useEffect,useState} from 'react';
import Player from './Player';


function App() {

const [songs] = useState([
  {
      title: "Titaliya",
      artist: "Hardy Sandhu",
      img_src: "/images/titaliya.jpg",
      audio_src: "/songs/Titliaan Warga.mp3",
    },
    {
      title: "Nach Meri Rani",
      artist: "Yo Yo Honey Singh",
      img_src: "/images/nach-meri-rani.jpg",
      src: "/songs/Naach Meri Rani.mp3",
    },
    {
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh",
      img_src: "/images/care-ni-karda.jpg",
      src: "/songs/Care Ni Karda.mp3",
    },
    {
      title: "Burj Khalifa",
      artist: "Shashi",
      img_src: "/images/burjkalifa.jpg",
      src: "/songs/BurjKhalifa.mp3",
    },
    
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
},[currentSongIndex, songs.length])



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
