import React from 'react';
import styles from './footer.css';
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';

const footer = () => {
  return (
    <div className="ContainerFooter">
        <div className="LinksFooter">
            <img src={icon1}></img>
            <img src={icon2}></img>
            <img src={icon3}></img>
        </div>
        <div className="TextFooter"> Copyright 2022 | La muncă, nu la întins mâna.</div>
    </div>
  )
}

export default footer