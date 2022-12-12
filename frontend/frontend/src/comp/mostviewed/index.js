import React from 'react';
import styles from './mostviewed.css';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';


const mostviewed = () => {
  return (
    <div className="ContainerMostViewed"> 
        <div className="TextMostViewed"> Most Viewed</div>
        <div className="PicsMostViewed">
            <img src={pic1}></img>
            <img src={pic2}></img>
            <img src={pic3}></img>
        </div>
    </div>
  )
}

export default mostviewed