import React from 'react'
// this auxilliary component simply wraps everything
// so out elements aren't adjacent to each other.
import Aux from '../../hoc/Auxil'
import classes from './Layout.css'
// wrapper component -- we pass the children to the main section
const layout = (props) => (
  <Aux>
    <div>Toolbar, sideDrawer, backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout
