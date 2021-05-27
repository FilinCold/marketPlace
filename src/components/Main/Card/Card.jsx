import React from "react";

import icon from '../../../img/image 24.png';
import girl from '../../../img/girl.svg';
import square from '../../../img/square.svg'

const Card = (props) => {

  return (
    <div className='wrapper__card'>
      <div className='card'>
        <div className="container__img">
          <img className='mainImg' src={icon} alt=""/>
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
        <div className="author">
          by <span> Amy</span>
        </div>
        <div className="cost-buy">
          <div className="cost">
            <div>0.5ETH</div>
            <div>( $985.56 USD )</div>
          </div>
          <div className="buy">
            <button>BID</button>
          </div>
        </div>
        <div className="date-publicate">
          <span>22 Hrs 15 Min Remaining</span>
        </div>
      </div>
    </div>

  )
};

export default Card;


