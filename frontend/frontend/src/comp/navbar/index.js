import React from 'react';
import logo from './1.svg';
import menu from './menu.svg';
import {Nav, NavLink1, NavBtn, NavBtnLink1, NavBtnLink3, Menu, NavBtnLink2} from './elements';
import Popup1 from './popup/popup1';
import { useState } from 'react';
import style from './elements.css';
import closepic from './close.png';


const Navbar = () => {
    const [ButtonPopup1, setButtonPopup1] = useState(false);
    const [Button1, setButton1] = useState(true);
    const [Button2, setButton2] = useState(true);
  return (
    <div className="ContainerNav">
            <div className="LeftNav">
                    <img src={logo}></img>
            </div>
            <div className="RightNav">
                <NavBtnLink1 trigger={Button1}> Logare </NavBtnLink1>
                <NavBtnLink2 trigger={Button2}> Creare cont </NavBtnLink2>
            </div>
    </div>
  )
}

export default Navbar