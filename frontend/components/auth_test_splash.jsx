import React from 'react';
import { Link } from 'react-router-dom';
class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dropped: false, chaching: false, clickEnabled: true };
    this.mouseOnDropDown = this.mouseOnDropDown.bind(this);
    this.mouseOutDropDown = this.mouseOutDropDown.bind(this);
    this.chaching = this.chaching.bind(this);
  }


  mouseOnDropDown() {
    this.setState({ dropped: true, chaching: false, clickEnabled: true });
  }

  mouseOutDropDown() {
    this.setState({ dropped: false, chaching: false, clickEnabled: true});
  }
  chaching(){
    if(this.state.clickEnabled){
      this.setState({ dropped: false, chaching: true, clickEnabled: false });
      setTimeout(() => this.setState({ dropped: false, chaching: false, clickEnabled: true }), 1000);
    }
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
                  <li><a href="https://github.com/NicolasESchneider/Discoded/wiki/MVP-list">MVP-list</a> </li>
                  <li><a href="https://github.com/NicolasESchneider/Discoded/wiki/Schema">Schema</a></li>
                  <li><a href="https://github.com/NicolasESchneider/Discoded/wiki/Sample-State">Sample State</a> </li>
                  <li><a href="https://github.com/NicolasESchneider/Discoded/wiki/backend-routes">Backend Routes</a></li>
                  <li><a href="https://github.com/NicolasESchneider/Discoded/wiki/frontend-routes">Frontend Routes</a></li>
                </ul>
              </li>
            </ul>
            <ul className="splash-header-right">
              <li>
                <i className="fab fa-linkedin"></i>
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
            <div className="splash-buttons">
              <Link className="signup-link" to='/signup'>Sign Up</Link>
              <Link className="login-link" to='/login'>Open Discoded in browser</Link>
            </div>
          </div>

          <div className="splash-art">
            <img 
              className={this.state.chaching ? ("coin1 chaching") : ("coin1")} src={window.coin} 
            />
            <img className="coin2 movin" src={window.coin}/>
            <img className="bomb" src={window.bomb} />
            <img className="coin3 movin" src={window.coin} />
            <img className="laptop" src={window.laptop} />
            <img className="phone1" src={window.phone} />
            <img className="triangle1 t" src={window.triangle} />
            <img className="triangle2 t" src={window.triangle} />
            <img className="triangle3 t" src={window.triangle} />
            <img className="triangle4 t" src={window.triangle} />
            <img className="dot5 t" src={window.dot} />
            <img className="controller" src={window.controller} />
            <img className="cartridge movin" src={window.cartridge} />
            <img className="dot1 t" src={window.dot} />
            <img className="dot4 t" src={window.dot} />
            <img className="dot3 t" src={window.dot} />
            <img className="dot2 t" src={window.dot} />
            <img className="square1 t" src={window.square} />
            <img className="square3 t" src={window.square} />
            <img className="square2 t" src={window.square} />
            <img className="square4 t" src={window.square} />
            <img className="phone2" src={window.cell} />
            <img className="computer" src={window.computer} />
            <img className="x1 t" src={window.x} />
            <img className="x2 t" src={window.x} />
            <img className="box" onClick={this.chaching} src={window.box} />
            <img className="headset" src={window.headset} />
          </div>

          <footer className="splash-footer">
            <div>
              <h2>Ready to try Discoded? It's free!</h2>
              <h3>JOIN OVER 250 MILLION PLAYERS TODAY</h3>
            </div>
            <Link className="footer-signup-link" to='/signup'>Sign Up</Link>

          </footer>

        </div>
      );
    }

  };
}

export default Splash;