import React from 'react';
import img from './img.svg';
import styles from './main.css';

const main = () => {
  return (
    <div>
      <div className="cont">
        <div className="left">
            <div className="text1"> Partajarea de meme-uri nu a fost niciodată mai simplă!  </div>
            <div className="text2"> Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.  </div>
            <br></br> <br></br>
            <a className="btn" href="#down"> Upload a MEME </a> 
        </div>
        <div className="img1"> 
          <img src={img}></img> 
        </div>
      </div> 
      <div className="emty" id="down"> </div> 
    </div>
  )
}

export default main