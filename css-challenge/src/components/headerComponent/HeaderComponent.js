import React from 'react'
import './HeaderComponent.css'
import  bell  from '../../assets/bellIcon.png'


function HeaderComponent() {
  return (
    <div className="header_wrapper">
      <div className="header_wrapper_greet" >
        <div className="header_wrapper_name">
          <h1>Hi, John!</h1>
        </div>
        <div className="header_wrapper_date">
          <p>23 Jan, 2021</p>
        </div>
      </div>
      <div className="header_wrapper_icon">
        <img  id="bell" src={bell} alt="bell" width="100" style={{backgroundColor: "blue"}}/>
      </div>
    </div>
  );
}

export default HeaderComponent

