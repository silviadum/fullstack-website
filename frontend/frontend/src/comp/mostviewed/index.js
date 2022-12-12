import React from 'react';
import styles from './mostviewed';


const mostviewed = () => {
  return (
    <div className="ContainerMostViewed">
        <div className="TextMostViewed"> Most Viewed</div>
        <div className="PicsMostViewed">
            <img src="pic1.png"></img>
            <img src="pic2.png"></img>
            <img src="pic3.png"></img>
        </div>
    </div>
  )
}

export default mostviewed