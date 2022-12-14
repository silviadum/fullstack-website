import React from 'react';
import styles from './footer.css';
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';

const footer = () => {
  return (
    <div className="ContainerFooter">
      <div className="MiddleFooter">
        <div className="LinksFooter">
            <a href='https://www.instagram.com/lsacbucuresti/'><img src={icon1}></img> </a>
            <a href='https://www.twitch.tv/lsac_bucuresti'><img src={icon2}></img> </a>
            <a href='https://www.facebook.com/LsacBucuresti/'><img src={icon3}></img> </a>
        </div>
        <div className="TextFooter"> Copyright 2022 | La muncă, nu la întins mâna.</div>
      </div>  
    </div>
  )
}

export default footer