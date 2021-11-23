import React, { useEffect, useState, useCallback } from 'react';
import classes from './Header.module.css';

function Header() {
  const [timeString, setTimeString] = useState<string>('');

  const getClock = useCallback(():void => {
    const date = new Date();
    let hour: string|number = date.getHours();
    let minute: string|number = date.getMinutes();
    let seconds: string|number = date.getSeconds();
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    const FormattedTime:string = `${hour}:${minute}:${seconds}`;
    setTimeString(FormattedTime);
  },[]);
  
  useEffect(() => {
    const intervalId = setInterval(getClock, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  return (
    <div className={classes.container}>
      <p className={classes.clock}>{timeString}</p>
    </div>
  );
}

export default Header;
