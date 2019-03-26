import SplashLoggedIn from './splash_loggedin_container';
import SplashLoggedOut from './splash_page_loggedout';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
let splashRender = SplashLoggedOut;
const msp = state => {
  if (state.session.currentUser){
    splashRender = SplashLoggedIn
    return { currentUser: state.session.currentUser };
  } else {
    return {};
  }
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(splashRender);