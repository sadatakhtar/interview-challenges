import React from 'react';
import './HowYouFeel.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import sadFaceEmoji from '../../assets/Sad_Face_Emoji.png';
import grinnFaceEmoji from '../../assets/grinn_face_emoji.png';
import smileyFaceEmoji from '../../assets/smiley_face_emoji.png';
import excellentFaceEmoji from '../../assets/excellent_face_emoji.png';

function HowYouFeel() {
  return (
    <div className="feel_container">
      <div className="feel_subheading">
        <h2>How do you feel?</h2>
        <div className="feel_subheading_dots">
          <FiberManualRecordIcon fontSize="small" />
          <FiberManualRecordIcon fontSize="small" />
        </div>
      </div>
      <div className="feel_faces_container">
        <div>
          <div className="feel_emoji">
            <img src={sadFaceEmoji} alt="sad face" width="50" />
          </div>
          <div className="feel_emoji_feeling">
            <h3>Badly</h3>
          </div>
        </div>
        <div>
          <div className="feel_emoji">
            <img src={smileyFaceEmoji} alt="sad face" width="50" />
          </div>
          <div className="feel_emoji_feeling">
            <h3>Fine</h3>
          </div>
        </div>
        <div>
          <div className="feel_emoji">
            <img src={grinnFaceEmoji} alt="sad face" width="50" />
          </div>
          <div className="feel_emoji_feeling">
            <h3>Well</h3>
          </div>
        </div>
        <div>
          <div className="feel_emoji">
            <img src={excellentFaceEmoji} alt="sad face" width="50" />
          </div>
          <div className="feel_emoji_feeling">
            <h3>Excellent</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowYouFeel;
