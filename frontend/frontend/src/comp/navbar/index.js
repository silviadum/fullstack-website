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
        <Nav className="">
            <NavLink1 to="/">
                <img src={logo} alt="/"></img>
            </NavLink1>
            <NavLink2 to="/">
                <img src={logo} alt="/"></img>
            </NavLink2>
            

            <NavBtn>
                <NavBtnLink1 trigger={Button1}>
                <p onClick={() =>[setButton2(false), setButton1(false), setButtonPopup1(true), setClosebtn(true)]}
                
                > Logare </p>
                </NavBtnLink1>
        
                <NavBtnLink2 trigger={Button2}> 
                <p> Creare cont </p>
                </NavBtnLink2>

                <NavBtnLink3 trigger={Closebtn}>
                    <img onClick={() =>[setButton1(true), setButton2(true), setButtonPopup1(false), setClosebtn(false)]}src={closepic}></img>
                </NavBtnLink3>

                <Menu>
                    <img src={menu}></img>
                </Menu>

            </NavBtn>
            
        
        </Nav>

        <Popup1 trigger={ButtonPopup1}>
            <h1> Welcome back </h1>
            <p1> Username </p1>
            <br></br> <br></br>
            <input id="username" name="username" className="input1"/>
            <br></br> <br></br>
            <p1> Username </p1>
            <br></br> <br></br>
            <input id="username" name="username" className="input1"/>
        </Popup1>
    </div>
  )
}

export default Navbar