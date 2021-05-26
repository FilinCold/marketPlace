import React from "react";

import icon from '../../../img/image 24.png';
import girl from '../../../img/girl.svg';
import rec from '../../../img/Rectangle 122 (1).png';

const Card = (props) => {

  return (
    <div className='card'>
      <div className="container__img">
        <img src={icon} alt=""/>
        <div className="icon-user">
          <div className='rectangle'>
            <img className='user_icon' src={girl} alt=""/>
          </div>

        </div>
        <div className="count-img"></div>
        <div className="type-card"></div>
      </div>
      <div className="author">by Amy</div>

    </div>
  )
};

export default Card;


