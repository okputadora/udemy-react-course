import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    {/* boolean props can be added but just including the prop without a value (set to true) */}
    <NavigationItem link="/" active>BUrger BUilder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </ul>
)

export default navigationItems;
