import React from 'react';

function Details(props){
  return (
    <div className="details">
      <div className = "datails_img">
        <img src={props.songDetail.img_src} alt = "Song"/>
      </div>
      <h3 className="details_title">{props.songDetail.title}</h3>
      <h3 className="details_singer">{props.songDetail.artist}</h3>
     </div>
  )
}

export default Details;
