import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import AuthTestSplash from './auth_test_splash';

const msp = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};
const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp,mdp)(AuthTestSplash);