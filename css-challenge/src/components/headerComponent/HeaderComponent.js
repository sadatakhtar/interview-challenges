import React, {useState} from 'react';
import './HeaderComponent.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DateTime from '../dateTime/DateTime'

function HeaderComponent() {
  const [myDate, setMyDate] = useState(new Date());

  return (
    <div className="header_wrapper">
      <div className="header_wrapper_greet">
        <div className="header_wrapper_name">
          <h1>Hi, John!</h1>
        </div>
        <div className="header_wrapper_date">
          <DateTime />
        </div>
      </div>
      <div className="header_wrapper_icon">
        <NotificationsIcon fontSize="large" />
      </div>
    </div>
  );
}

export default HeaderComponent;
