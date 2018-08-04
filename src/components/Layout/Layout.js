import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    // Dont use this way to change state, because due to asynchronous nature of 
    // set state, this may lead to unexpected outcomes.
    // this.setState({showSideDrawer: !this.state.showSideDrawer});

    this.setState( (prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render () {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer 
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main> 
      </Aux>
    );
  }
};

export default Layout;