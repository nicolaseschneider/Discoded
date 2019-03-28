import React from 'react';
import { Link } from 'react-router-dom';
class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dropped: false };
    this.mouseOnDropDown = this.mouseOnDropDown.bind(this);
    this.mouseOutDropDown = this.mouseOutDropDown.bind(this);
  }


  mouseOnDropDown() {
    this.setState({ dropped: true });
  }

  mouseOutDropDown() {
    this.setState({ dropped: false });
  }

  render() {
    //logged in splash page
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome user #{this.props.currentUser}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );

    } else {
      //splash page! stylish!
      return (
        <div className="splash-page-wrapper">
          <header className="splash-header">
            <div className="splash-logo">
              <img className="splash-img" src={window.logoURL} />
              <img className="typeface" src={window.logoTYPE} />
            </div>

            <ul className="splash-header-left">

              <li>
                <a href="https://github.com/NicolasESchneider/Discoded"> View on Github</a>
              </li>
              <li onMouseEnter={this.mouseOnDropDown}>
                Project Wiki <i className="fas fa-chevron-circle-down"></i>
                <ul
                  className={this.state.dropped ? "splash-drop-down" : "splash-drop-down-hidden"}
                  onMouseLeave={this.mouseOutDropDown}>
                  <li> MVP </li>
                  <li> SCHEMA </li>
                  <li> FRONT END STATE </li>
                  <li> BACK END ROUTES </li>
                  <li> FRONT END ROUTES </li>
                </ul>
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