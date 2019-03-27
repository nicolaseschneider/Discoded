import React from 'react';
import { Link } from 'react-router-dom';
class Splash extends React.Component{
  


  render () {
      
      if(this.props.currentUser){
        return (
          <div>
            <h1>Welcome user #{this.props.currentUser}</h1>
            <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div className="splash-page-wrapper">
          <header className="splash-header">
            <div className="splash-logo">
              <img className="splash-img" src={window.logoURL}/>
              <img className="typeface" src={window.logoTYPE} />
            </div>
            <ul className="splash-header-left">

              <li>
                <a href="https://github.com/NicolasESchneider/Discoded"> View on Github</a>
              </li>
              <li>
                Project Wiki  <i className="fas fa-chevron-circle-down"></i>
              </li>
            </ul>
            <ul className="splash-header-right">
              <li>
                <a className='nav-icon' href="https://www.linkedin.com/in/nicolas-schneider-01/" ><i className="fab fa-linkedin"></i></a>
              </li>
              <li>
                <a className='nav-icon' href="https://github.com/NicolasESchneider"><i className="fab fa-github-square"></i></a>
              </li>
              <li>
                <Link className="splash-login-link" to='/login'>Login</Link>
              </li>
            </ul>
          </header>



          <div className="splash-content">
            <h1>It's time to ditch Skype and TeamSpeak.</h1>
            <p>
              All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.
              Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.
            </p>
          </div>

        </div>  
      );
    }
    
  };
}

export default Splash;