import React from 'react'
import './Excercises.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import HearingIcon from '@material-ui/icons/Hearing';
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
        <div className="excercises_speaking">
          <div className="excercises_speaking_logo">
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
        <div className="excercises_reading">
          <div className="excercises_reading_logo">
            <PersonIcon fontSize="large" />
          </div>
          <div className="excercises_reading_title">
            <div className="excercises_reading_title_dots">
              <h2>Reading Speed</h2>
              <div className="excercises_subheading_dots">
                <FiberManualRecordIcon fontSize="small" />
                <FiberManualRecordIcon fontSize="small" />
              </div>
            </div>
            <p>8 Excercises</p>
          </div>
        </div>
        <div className="excercises_listening">
          <div className="excercises_listening_logo">
            <HearingIcon fontSize="large" />
          </div>
          <div className="excercises_reading_title">
            <div className="excercises_reading_title_dots">
              <h2>Listening Skill</h2>
              <div className="excercises_subheading_dots">
                <FiberManualRecordIcon fontSize="small" />
                <FiberManualRecordIcon fontSize="small" />
              </div>
            </div>
            <p>5 Excercises</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Excercises
