import React from 'react';
import './Navigation.css';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';

function Navigation() {
  return (
    <div className="navigation_container">
      <div className="navigation_home_icon">
        <HomeIcon fontSize="large" />
      </div>
      <div className="navigation_squares_icon">
        <DashboardIcon fontSize="large" />
      </div>
      <div className="navigation_messages_icon">
        <EmailIcon fontSize="large" />
      </div>
      <div className="navigation_person_icon">
        <PersonIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Navigation;
