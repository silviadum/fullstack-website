import React from 'react';
import logo from './1.svg';
import menu from './menu.svg';
import {Nav, NavLink1, NavLink2, NavBtn, NavBtnLink1, NavBtnLink3, Menu, NavBtnLink2} from './elements';
import Popup1 from './popup/popup1';
import { useState } from 'react';
import style from './elements.css';
import closepic from './close.png';


const Navbar = () => {
    const [ButtonPopup1, setButtonPopup1] = useState(false);
    const [Button1, setButton1] = useState(true);
    const [Button2, setButton2] = useState(true);
    const [Closebtn, setClosebtn] = useState(false);
    return (
    <div>
        <Nav>
            <NavLink1 to="/">
                <img src={logo} alt="/"></img>
            </NavLink1>
            <NavLink2 to="/">
                <img src={logo} alt="/"></img>
            </NavLink2>

            <Menu>
                <img src={menu} alt="/"></img>
            </Menu>
            <NavBtn>
                <NavBtnLink1 trigger={Button1}>
                <p onClick={() =>[setButton2(false), setButton1(false), setButtonPopup1(true), setClosebtn(true)]}
                
                > Logare </p>
                </NavBtnLink1>
        
                <NavBtnLink2 
                trigger={Button2}> 
                <p> Creare cont </p>
                </NavBtnLink2>

                <NavBtnLink3 trigger={Closebtn}>
                    <img src={closepic}/>
                </NavBtnLink3>

            </NavBtn>

        </Nav>

        <Popup1 trigger={ButtonPopup1}>
            <h1> 123</h1>
        </Popup1>
    </div>
  )
}

export default Navbar