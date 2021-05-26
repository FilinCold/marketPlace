import React from "react";
import {NavLink} from "react-router-dom";

import iconLogo from '../../img/icon_color 7.svg'
import iconUser from '../../img/image 186.svg'

const Header = (props) => (

  <header>
    <div className="container__search-nav">

      <div className="container__search">
        <div className="search__icon">
          <img src={iconLogo} alt=""/>
        </div>
        <div className="search__input">
          <input type="text" placeholder='Search'/>
        </div>
      </div>

      <div className="container__nav">
        <div className='nav'>
          <nav>
            <ul className="nav-list">
              <li><NavLink to="1">marketplace</NavLink></li>
              <li><NavLink to="2">picks</NavLink></li>
              <li><NavLink to="3">help</NavLink></li>
              <li><NavLink to="4">wallet</NavLink></li>
            </ul>
          </nav>
        </div>


        <div className="nav__img">
          <img src={iconUser} alt=""/>
        </div>

      </div>

    </div>

  </header>
);

export default Header;
