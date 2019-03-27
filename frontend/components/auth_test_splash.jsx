import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  if(props.currentUser){
    return (
      <div>
        <h1>Welcome user #{props.currentUser}</h1>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div className="splashPageWrapper">
      <header className="splash-header"></header>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login!</Link>
      </div>  
    );
  }

};