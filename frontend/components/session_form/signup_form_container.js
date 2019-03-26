import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  // errors: statesession,
  formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
  submitAction: user => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);