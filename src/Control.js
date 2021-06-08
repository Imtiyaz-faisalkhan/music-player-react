import React from 'react';
import { faBackward, faPause, faForward,faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Control(props){
  return (
    <div className="control">
      <button className='control_skip' onClick={() => props.skipSong(false)}>
        <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
      </button>
      <button className='control_playButton' onClick={() => props.setIsPlaying(!props.isPlaying)}>
        <FontAwesomeIcon icon={props.isPlaying?faPause:faPlay} />
      </button>
      <button className='control_skip'onClick={() => props.skipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  )
}

export default Control;
