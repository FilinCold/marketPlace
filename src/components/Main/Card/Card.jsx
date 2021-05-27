import React from "react";

import icon from '../../../img/image 24.png';
import girl from '../../../img/girl.svg';
import square from '../../../img/square.svg'

const Card = (props) => {

  return (
    <div className='card'>
      <div className="container__img">
        <img src={icon} alt=""/>
        <div className="icon-user">
          <div className='rectangle'>
            <img className='user_icon' src={girl} alt=""/>
          </div>
          <div className='rectangle2'>
            <img className='user_icon2' src={square} alt=""/>
            <span>3/5</span>
          </div>
          <div className="type-card">
            <div className='rectangle3'>
              Alimation Character
            </div>
          </div>
        </div>

      </div>
      <div className="author">by Amy</div>

    </div>
  )
};

export default Card;


