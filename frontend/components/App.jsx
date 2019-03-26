import React from 'react';
import { AuthRouteLoggedOut} from '../utils/auth_route';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SuperSplashPage from './splash/splash_super';

const App = (props) => (
  <div>
    <header>
      <h1> Discoded </h1>
    </header>
    {/* <SuperSplashPage currentUser={props.store.session.currentUser} /> */}
    <AuthRouteLoggedOut path="/login" component={LoginFormContainer} />
    <AuthRouteLoggedOut path="/signup" component={SignUpFormContainer} />

  </div>
);

export default App;
