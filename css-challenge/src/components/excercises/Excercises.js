import React from 'react'
import './Excercises.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Excercises() {
  return (
    <div className="excercises_container">
      <div className="excercises_title">
        <h2>Excercises</h2>
        <div className="excercises_subheading_dots">
          <FiberManualRecordIcon fontSize="small" />
          <FiberManualRecordIcon fontSize="small" />
        </div>
      </div>
      <div className="excercises_skills">
        <div className="excersises_speaking">
          <div className="excersices_speaking_logo">
            <FavoriteIcon fontSize="large" />
          </div>
          <div className="excercises_speaking_title">
            <div className="excercises_speaking_title_dots">
              <h2>Speaking Skills</h2>
              <div className="excercises_subheading_dots">
                <FiberManualRecordIcon fontSize="small" />
                <FiberManualRecordIcon fontSize="small" />
              </div>
            </div>

            <p>16 Excercises</p>
          </div>
        </div>
        <div className="excersises_reading">
          <div className="excersices_reading_logo"></div>
          <div className="excersices_reading_title"></div>
        </div>
        <div className="excercises_listening">
          <div className="excersices_listening_logo"></div>
          <div className="excersices_listening_title"></div>
        </div>
      </div>
    </div>
  );
}

export default Excercises
