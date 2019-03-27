import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  // errors: state.errors.session,
  formType: 'Log In',
  errors,
});

const mapDispatchToProps = dispatch => ({
  submitAction: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);