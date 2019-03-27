import React from 'react';
import { AuthRouteLoggedOut, AuthRouteLoggedIn } from '../utils/auth_route';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import Splash from './Auth_test_container';
import { logout } from '../actions/session_actions';
import { Route } from 'react-router-dom';

const App = () => (
  <div className='app'>
    <AuthRouteLoggedOut path="/login" component={LoginFormContainer} />
    <AuthRouteLoggedOut path="/signup" component={SignUpFormContainer} />
    <Route exact path="/" component={Splash} />

  </div>
);

export default App;
