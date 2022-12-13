import React from 'react';
import styles from './popup1.css';
import { CloseBtnPopup, NavBtnLink2 } from '../elements';
import logo from '../1.svg';
import close from '../close.png';
import { useState } from 'react';
import { useRef } from 'react';
import Navbar from '..';
import { NavBtnLink3 } from '../elements';

function Popup1 (props) {
  const email=useRef()
  const password=useRef()
  const getEmail=localStorage.getItem("emailData")
  const getPassword=localStorage.getItem("passwordData")
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
          <button className="BtnPopup1"> Logare </button>
        
        </form>
      
      </div>
    </div>
   </div>
  )  : "";
}

export default Popup1