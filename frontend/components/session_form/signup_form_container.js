import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => ({
  // errors: statesession,
  formType: 'Sign Up',
  errors,
});

const mapDispatchToProps = dispatch => ({
  submitAction: user => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);