import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Salad', type: 'bacon'},
  { label: 'Salad', type: 'cheese'},
  { label: 'Salad', type: 'meat'},
]
const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => {
      return (<BuildControl
        key={ctrl.label}
        label={ctrl.label}
        type={ctrl.type}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => {props.ingredientRemoved(ctrl.type)}}/>
      )
    })}
  </div>
);

export default buildControls;
