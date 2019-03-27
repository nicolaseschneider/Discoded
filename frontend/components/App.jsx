import React from 'react';
import { AuthRouteLoggedOut, AuthRouteLoggedIn } from '../utils/auth_route';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashTestContainer from './Auth_test_container';
import { logout } from '../actions/session_actions';

const App = () => (
  <div>
    <header>
      <h1> Discoded </h1>
    </header>
    <SplashTestContainer />
    <AuthRouteLoggedOut path="/login" component={LoginFormContainer} />
    <AuthRouteLoggedOut path="/signup" component={SignUpFormContainer} />


  </div>
);

export default App;
