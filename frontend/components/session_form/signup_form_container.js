import { connect } from 'react-redux';
import { signUp, login } from '../../actions/session_actions';
import SessionForm from './session_form';
const mapStateToProps = ({errors}) => ({
  formType: 'Sign Up',
  errors,
});

const mapDispatchToProps = dispatch => ({
  submitAction: user => dispatch(signUp(user)),
  demoLogin: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);