import React from 'react';
import styles from './popup2.css';
import { CloseBtnPopup } from '../elements';
import logo from '../1.svg';
import close from '../close.png';
import { useState } from 'react';

function popup2 (props) {
  return (props.trigger) ? (
   <div className="AbsolutePopup2">
    <div className="ContainerPopup2">
      <div className="BarPopup2">
        <div className="LogoBarPopup2">
          <img src={logo}></img>
        </div>
        <div className="CloseBtnPopup">
            <img src={close} onClick={() => props.setTrigger(false)}></img>
        </div>
      </div>
      <div className="MainPopup2">
        <div className="BoxPopup2">
          <div className="Text1Popup2"> Welcome  </div>
          <div className="Text2Popup2"> Username </div>
          <input type="text" className="InputPopup2" placeholder="username"></input>
          <div className="Text2Popup2"> Email </div>
          <input type="text" className="InputPopup2" placeholder="email"></input>
          <div className="Text2Popup2"> Parola </div>
          <input type="password" className="InputPopup2" placeholder="parola"></input>
          <div className="BtnPopup2"> Creare cont </div>
        </div>
      </div>
    </div>
   </div>
  )  : "";
}

export default popup2