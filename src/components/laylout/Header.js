import React, { useEffect, useState, useCallback } from 'react';
import classes from './Header.module.css';

function Header() {
  const [timeString, setTimeString] = useState('');

  const getClock = useCallback(() => {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    const FormattedTime = `${hour}:${minute}:${seconds}`;
    setTimeString(FormattedTime);
  });

  useEffect(() => {
    setInterval(getClock, 1000);

    return () => {
      clearTimeout(getClock);
    };
  }, []);
  return (
    <div className={classes.container}>
      <p className={classes.clock}>{timeString}</p>
    </div>
  );
}

export default Header;
