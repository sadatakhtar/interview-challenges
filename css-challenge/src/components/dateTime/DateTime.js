import React from 'react';

function DateTime() {
  let showDate = new Date();
  let showTodaysDate =
    showDate.getDate() +
    ' ' +
    (showDate.getMonth() + 1) +
    ' ' +
    showDate.getFullYear();
  let dateToString = showDate.toDateString();
  return <div className="date_container">
    <p>{dateToString}</p>

  </div>;
}

export default DateTime;
