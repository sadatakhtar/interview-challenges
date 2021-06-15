import React from 'react'
import './HowYouFeel.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function HowYouFeel() {
  return (
    <div className="feel_container">
      <div className="feel_subheading">
        <h2>How do you feel?</h2>
        <div className="feel_subheading_dots">
          <FiberManualRecordIcon />
          <FiberManualRecordIcon />
        </div>
      </div>
      <div className="feel_faces_container">
        <div>
          <h4>images here</h4>
        </div>
        <div>
          <h4>images here</h4>
        </div>
        <div>
          <h4>images here</h4>
        </div>
        <div>
          <h4>images here</h4>
        </div>
      </div>
    </div>
  );
}

export default HowYouFeel
