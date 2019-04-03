import {connect} from 'react-redux';
import React from 'react';
import { Redirect, withRouter, Route } from 'react-router-dom';

const isLoggedOut = ({component: Component, path, loggedIn, exact, userId}) => {
  return <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to={`/@me/${userId}/DMs`} />
    )
  )} />
};

const isLoggedIn = ({ component: Component, path, loggedIn, exact, userId}) => {
  return <Route path={path} exact={exact} render={(props) => (
    !!loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to={`/`} />
      )
  )} />
};


const msp = state => (
  { loggedIn: Boolean(state.session.currentUser),
    userId: state.session.currentUser
  }
);
export const AuthRouteLoggedOut =  withRouter(connect(msp, null)(isLoggedOut));
export const AuthRouteLoggedIn = withRouter(connect(msp, null)(isLoggedIn));