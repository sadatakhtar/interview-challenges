import React from 'react'
import './HeaderComponent.css'
import  bell  from '../../assets/bellIcon.png'
import NotificationsIcon from '@material-ui/icons/Notifications';



function HeaderComponent() {
  return (
    <div className="header_wrapper">
      <div className="header_wrapper_greet" >
        <div className="header_wrapper_name">
          <h1>Hi, John!</h1>
        </div>
        <div className="header_wrapper_date">
          <p>25 Jan, 2021</p>
        </div>
      </div>
      <div className="header_wrapper_icon">
        <NotificationsIcon fontSize='large'/>
      </div>
    </div>
  );
}

export default HeaderComponent

