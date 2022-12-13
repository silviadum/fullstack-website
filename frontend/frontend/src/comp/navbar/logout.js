import React from 'react';
import styles from './elements.css';

export function NavBtnLink3 ()  {
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div className="NavBtnLink2"><p onClick={handleClick}>Delogare</p></div>
  )
}

