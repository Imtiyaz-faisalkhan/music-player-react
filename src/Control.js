import React from 'react';
import { faBackward, faPause, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Control(){
  return (
    <div className="control">
      <button className='control_skip'>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className='control_playButton'>
        <FontAwesomeIcon icon={faPause} />
      </button>
      <button className='control_skip'>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  )
}

export default Control;
