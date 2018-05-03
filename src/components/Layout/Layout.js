import React, { Component } from 'react'
// this auxilliary component simply wraps everything
// so out elements aren't adjacent to each other.
import Aux from '../../hoc/Auxil'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
// wrapper component -- we pass the children to the main section
class Layout extends Component{
  state = {
    showSideDrawer: false,
  }
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerOpenedHandler = () => {
    this.setState({showSideDrawer: true})
  }
  render () {
    return (
      <Aux>
        <Toolbar opened={this.sideDrawerOpenedHandler}/>
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
};

export default Layout;
