import React from 'react'
import classes from './BuildControl.css'
const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.label}>{props.label}</div>
    <button onClick={props.removed} className={classes.less}>Less</button>
    <button onClick={props.added} className={classes.more}>More</button>
  </div>
)

export default buildControl;
