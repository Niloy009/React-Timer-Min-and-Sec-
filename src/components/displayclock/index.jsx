import React from "react";

const DisplayClock = ({ min, sec }) => (
  <>
    <span>{min < 10 ? `0${min} m : ` : `${min} m : `}</span>

    <span>{sec < 10 ? `0${sec} s ` : `${sec} s `}</span>
  </>
);

export default DisplayClock;
