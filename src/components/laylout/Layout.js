import React from 'react';
import Header from './Header';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div className={classes.outer}>
      <Header></Header>
      {props.children}
    </div>
  );
}

export default Layout;
