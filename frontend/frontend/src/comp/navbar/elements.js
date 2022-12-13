import styled from 'styled-components';
import menu from './menu.svg';
import styles from './elements.css';




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

  
export function CloseBtnPopup () {
    return (
      <div className="CloseBtnPopup">
      </div>
    )
};





