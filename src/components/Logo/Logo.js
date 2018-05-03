import React from 'react'
import burgerLogo from '../../assets/burger-logo.png';
import classes from './Logo.css'
const logo = (props) => (
  // because this logo will be used all over (potentially)
  // we need to set the path dynamically
  <div className={classes.Logo}><img src={burgerLogo} alt="MyBurger"></img></div>
)

export default logo;
