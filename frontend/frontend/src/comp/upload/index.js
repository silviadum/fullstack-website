import React from 'react';
import styles from './upload.css';

const upload = () => {
  return (
    <div className="containupl" id="down">
      <div className="boxupl">
        <div className="lefttextupl">
          <div className="textupl1"> Ai tupeu și crezi că ești amuzant?</div>
          <br></br>
          <div className="textupl2"> Trimite-ne un mail și poate ai noroc să ne apuce râsul când îți vedem meme-ul.</div>
        </div>
        <div className="rightforms">
          <div className="righttextupl"> Descriere </div>
          <input type="text" className="InputUpload1" placeholder="descriere"></input>
          <br></br>
          <div className="righttextupl"> Meme (jpg, jpeg, png, gif)</div>
          <input className="InputUpload2" placeholder="drag & drop image or click to upload" ></input>
          <br></br>
          <div className="ButonUpload"> Trimite </div>
        </div>
      </div>
    </div>
  )
}

export default upload