import React from 'react';
import styles from './popup1.css';
import { CloseBtnPopup } from '../elements';
import logo from '../1.svg';
import close from '../close.png';
import { useState } from 'react';
import { useRef } from 'react';

function Popup1 (props) {
  const email=useRef()
  const password=useRef()
  const handleSubmit=()=>{
    if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
        localStorage.setItem("emailData","abc@gmail.com")
        localStorage.setItem("passwordData","12345")
    }
  }

  return (props.trigger) ? (
   <div className="AbsolutePopup1">
    <div className="ContainerPopup1">
      <div className="BarPopup1">
        <div className="LogoBarPopup1">
          <img src={logo}></img>
        </div>
        <div className="CloseBtnPopup">
            <img src={close} onClick={() => props.setTrigger(false)}></img>
        </div>
      </div>
      <div className="MainPopup1">
        <form className="BoxPopup1" onSubmit={handleSubmit}>
        
          <div className="Text1Popup1"> Welcome back </div>
          <div className="Text2Popup1"> Username </div>
          <input type="text" className="InputPopup1" ref={email} placeholder="username"></input>
          <div className="Text2Popup1"> Parola </div>
          <input type="password" className="InputPopup1" ref={password} placeholder="parola"></input>
          <div className="BtnPopup1"> Logare </div>
        
        </form>
      </div>
    </div>
   </div>
  )  : "";
}

export default Popup1