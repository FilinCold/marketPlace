import React from "react";

const Main = (props) => (
  <main>
    <div className="container__sidebar-card">
      <div className="container__sidebar">
        <div className="sidebar__choice">
          <h2>status</h2>
          <div className='line'></div>
          <ul>
            <li><input type="checkbox" className="checkbox"/><div>On Auction</div></li>
            <li><input type="checkbox" className="checkbox"/><div>Buy Now</div></li>
            <li><input type="checkbox" className="checkbox"/><div>Make Offer</div></li>
          </ul>
        </div>
        <div className="sidebar__choice">
          <h2>type</h2>
          <div className='line'></div>
          <ul>
            <li><input type="checkbox" className="checkbox"/><div>Images</div></li>
            <li><input type="checkbox" className="checkbox"/><div>GIF</div></li>
            <li><input type="checkbox" className="checkbox"/><div>Video</div></li>
            <li><input type="checkbox" className="checkbox"/><div>Audio</div></li>
            <li><input type="checkbox" className="checkbox"/><div>3D</div></li>
          </ul>
        </div>
      </div>
      <div className="container__card">
        <div className="container__results-search">
          <div className="results">
            <span>1,230,098 Results</span>
          </div>
          <div className="sort">

          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Main;
