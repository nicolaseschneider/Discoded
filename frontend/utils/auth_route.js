import {connect} from 'react-redux';
import React from 'react';
import { Redirect, withRouter, Route } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn, exact}) => {
  return <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
};

const msp = state => (
  { loggedIn: Boolean(state.session.currentUser) }
);
export default withRouter(connect(msp, null)(Auth));