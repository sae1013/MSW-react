import React from 'react';
import Header from './Header';
import classes from './Layout.module.css';

interface LayoutProps {
  children:JSX.Element
}

function Layout(props:LayoutProps) {
  return (
    <div className={classes.outer}>
      <Header></Header>
      {props.children}
    </div>
  );
}

export default Layout;

