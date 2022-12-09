import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import menu from './menu.svg';
import styles from './elements.css';

export const Nav = styled.nav`
  background-color: #fff;
  height: ;
  display: flex;
  justify-content: space-between;
  padding: 2%;
  z-index: 10%;
`;

export const NavLink1 = styled(Link)`
  color: #fff;
  display: flex;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    cursor: pointer;
  }
`;

export const NavLink2 = styled(Link)`
  color: #fff;
  display: none;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    transform: translate(15%, 30%);
    cursor: pointer;
  }
`;

export const Menu = styled(Link)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    cursor: pointer;
  }
`;

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

export const NavBtn = styled.nav`
  display: flex;
  justify-content: space-evenly;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


