import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import menu from './menu.svg';
import styles from './elements.css';


export function Nav (props) {
  return (
    <div className="Nav">
            {props.children}

    </div>
  )
};

export function NavLink1 (props) {
    return (
      <div className="NavLink1">
              {props.children}

      </div>
    )
  };

export function NavLink2 (props) {
    return (
      <div className="NavLink2">
              {props.children}

      </div>
    )
  };

export function Menu (props) {
    return (
      <div className="menu">
              {props.children}

      </div>
    )
  };



export function NavBtnLink1(props) {
    return (props.trigger) ? (
      <div className="NavBtnLink1">
              {props.children}

      </div>
    )  : " ";

  };

export function NavBtnLink2 (props) {
    return (props.trigger) ? (
      <div className="NavBtnLink2">
              {props.children}

      </div>
    )  : "";
  };

export function NavBtnLink3 (props) {
    return (props.trigger) ? (
      <div className="NavBtnLink3">
              {props.children}

      </div>
    )  : "";
};

export function NavBtn (props) {
    return (
      <div className="NavBtn">
              {props.children}

      </div>
    )
  };



