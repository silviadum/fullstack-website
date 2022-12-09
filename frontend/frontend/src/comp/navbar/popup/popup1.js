import React from 'react';
import styles from './popup1.css';

const popup1 = (props) => {
  return (props.trigger) ? (
    <div className="popup1">
        <div className="popup1-inner">
            {props.children}
        </div>

    </div>
  )  : "";
}

export default popup1