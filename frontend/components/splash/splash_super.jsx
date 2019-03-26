import SplashLoggedIn from './splash_loggedin_container';
import SplashLoggedOut from './splash_page_loggedout';
import React from 'react';

export default (props) =>{

  if (!props.currentUser){
    return <SplashLoggedOut />
  } else {
    return <SplashLoggedIn />
  }

}