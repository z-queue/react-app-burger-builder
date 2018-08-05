import React from 'react';

import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';


const sideDrawer = ( props ) => {
  let attachedClass = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClass = [classes.SideDrawer, classes.Open]
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClass.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
          
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  );
}


export default sideDrawer;
