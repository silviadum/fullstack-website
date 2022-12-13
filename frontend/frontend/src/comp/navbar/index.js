import React from 'react';
import logo from './1.svg';
import menu from './menu.svg';
import {Nav, NavLink1, NavBtn, NavBtnLink1, NavBtnLink3, Menu, NavBtnLink2, CloseBtnPopup} from './elements';
import Popup1 from './popup1/popup1';
import { useState } from 'react';
import style from './elements.css';
import closepic from './close.png';
import Popup2 from './popup2/popup2';


const Navbar = () => {
    const [ButtonPopup1, setButtonPopup1] = useState(false);
    const [ButtonPopup2, setButtonPopup2] = useState(false);
    const [Button1, setButton1] = useState(true);
    const [Button2, setButton2] = useState(true);
    const [Button3, setButton3] = useState(false);
    const HandleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
  return (
    <>
    <div className="ContainerNav">
            <div className="LeftNav">
                    <img src={logo}></img>
            </div>
            <div className="RightNav">
                <NavBtnLink1 trigger={Button1}> <p onClick={() => setButtonPopup1(true)}> Logare </p> </NavBtnLink1>
                <NavBtnLink2 trigger={Button2}> <p onClick={() => setButtonPopup2(true)}> Creare cont </p> </NavBtnLink2>
                <NavBtnLink2 trigger={Button3}> <p onClick={HandleClick}> Delogare </p></NavBtnLink2>   
            </div>
    </div>
    <div className="Popup1">
        <Popup1 trigger={ButtonPopup1} setTrigger={setButtonPopup1} > </Popup1>
        <Popup2 trigger={ButtonPopup2} setTrigger={setButtonPopup2} > </Popup2>
    </div>
    </>
  )
}

export default Navbar