import { getServers, selectServer } from '../../actions/server_actions';
import { getUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import homePage from './home_page';


const msp = (state, ownProps) =>({
  userId: ownProps.match.params.userId,
  user: state.entities.users[ownProps.match.params.userId] || {},
  server: state.ui.server.id
});

const mdp = dispatch => ({
  getServers: () => dispatch(getServers()),
  getUser: (id) => dispatch(getUser(id)),
  selectServer: (id) => dispatch(selectServer(id))

});

export default withRouter(connect(msp,mdp)(homePage));