import React from 'react';
import { AuthRouteLoggedOut, AuthRouteLoggedIn } from '../utils/auth_route';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import Splash from './Auth_test_container';
import { Route, Switch } from 'react-router-dom';
import HomePageContainer from './@me/home_page_container';
import VideoCall from '../chat/WebRTC/videocall';


const App = () => (
  <div className='app'>

      <AuthRouteLoggedOut path="/login" component={LoginFormContainer} />
      <AuthRouteLoggedOut path="/signup" component={SignUpFormContainer} />
      <Route exact path="/" component={Splash} />
      <AuthRouteLoggedIn path="/@me/:userId" component={HomePageContainer} />
      <Route exact path="/testingvideo" component={VideoCall}  />
  </div>
);

export default App;
