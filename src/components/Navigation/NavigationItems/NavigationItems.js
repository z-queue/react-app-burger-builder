import React from 'react';

import classes from './NavigationItems.css';

import NavItem from './NavigationItem/NavigationItem'

const navItems = () => (
  <ul className={classes.NavigationItems}>
    <NavItem link="/" exact>Burger Builder</NavItem>
    <NavItem link="/orders">Orders</NavItem>
  </ul>
);

export default navItems;