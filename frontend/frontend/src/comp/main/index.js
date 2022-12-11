import React from 'react';
import img from './img.svg';
import styles from './main.css';

const main = () => {
  return (
    <div className="body">
      <br></br>
      <div className="cont">
        <div className="left">
            <div className="text1"> Partajarea de meme-uri nu a fost niciodată mai simplă!  </div>
            <div className="text2"> Platforma ideală pentru studenții de la Politehnică, amuzați de câte materii o să pice semestrul asta.  </div>
            <br></br> <br></br>
            <div className="btn"> Upload a MEME </div>
        </div>
        <div> <br></br> <br></br> <br></br> <br></br> <br></br>
          <img classname="img1" src={img}></img> </div>
      </div>
    </div>
  )
}

export default main